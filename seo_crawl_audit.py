import urllib.request, ssl, re, json
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def fetch(url, ua='Mozilla/5.0 (compatible; Googlebot/2.1)'):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': ua})
        opener = urllib.request.build_opener(urllib.request.HTTPSHandler(context=ctx))
        resp = opener.open(req, timeout=15)
        return resp.getcode(), resp.read().decode("utf-8", errors="replace"), resp.geturl(), dict(resp.headers)
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode("utf-8", errors="replace")[:200], e.headers.get('Location',''), dict(e.headers)
    except Exception as e:
        return 0, str(e), '', {}

# 1. Fetch robots.txt
print("=" * 100)
print("ROBOTS.TXT")
print("=" * 100)
code, robots_txt, _, _ = fetch("https://ymbs.pro/robots.txt")
print(robots_txt)

# 2. Fetch sitemap.xml
print("\n" + "=" * 100)
print("SITEMAP.XML")
print("=" * 100)
code, sitemap_xml, _, _ = fetch("https://ymbs.pro/sitemap.xml")
urls = re.findall(r'<loc>(.*?)</loc>', sitemap_xml)
print(f"Total URLs in sitemap: {len(urls)}")
for u in urls:
    print(f"  {u}")

# 3. Check each sitemap URL
print("\n" + "=" * 100)
print("SITEMAP URL STATUS CHECK")
print("=" * 100)
sitemap_issues = []
for u in urls:
    code, html, final, headers = fetch(u)
    is_shell = len(html) < 6000
    robots_match = re.search(r'<meta[^>]*name="robots"[^>]*content="([^"]*)"', html)
    robots = robots_match.group(1) if robots_match else "indexable"
    canon_match = re.search(r'<link[^>]*rel="canonical"[^>]*href="([^"]*)"', html)
    canonical = canon_match.group(1) if canon_match else "MISSING"
    title_match = re.search(r'<title>(.*?)</title>', html, re.S)
    title = title_match.group(1).strip()[:50] if title_match else "MISSING"
    
    issues = []
    if code != 200: issues.append(f"HTTP {code}")
    if is_shell: issues.append("SHELL")
    if "noindex" in robots.lower(): issues.append("NOINDEX")
    if canonical == "MISSING": issues.append("NO_CANONICAL")
    if final != u: issues.append(f"REDIRECT->{final}")
    
    path = u.replace("https://ymbs.pro", "")
    status_str = "OK" if not issues else " | ".join(issues)
    print(f"  {path:<55} {code} {status_str}")
    if issues:
        sitemap_issues.append((path, issues))

print(f"\nTotal sitemap issues: {len(sitemap_issues)}")

# 4. Check legacy .html URLs and known GSC problem URLs
print("\n" + "=" * 100)
print("LEGACY / GSC PROBLEM URL CHECK")
print("=" * 100)
legacy_urls = [
    "/leadership/michelle-griffith.html",
    "/technology-services/cybersecurity-risk-cleanup.html",
    "/leadership/strategic-planning-alignment.html",
    "/smb-cybersecurity-playbook.html",
    "/technology-services/reporting-visibility.html",
    "/technology/cybersecurity-risk.html",
    "/mission-foundation/strategic-alignment-framework.html",
    "/legal-software/mycase.html",
    "/leadership/ashley-clevenger.html",
    "/elevating-public-voice.html",
    "/affiliate-program.html",
    "/strengthening-organizational-governance.html",
    "/technology.html",
    "/operations.html",
    "/communications.html",
    "/leadership.html",
    "/preview/",
    "/welcome-room",
    "/cybersecurity-services",
    "/a2p-tos",
    "/book/service-discovery",
    "/ymbs-demo",
    "/home-page-9693",
    "/terms-of-use",
    "/financial-oversight",
    "/seo-services",
    "/home",
    "/index",
    "/index.html",
    "/home.html",
]

for path in legacy_urls:
    url = "https://ymbs.pro" + path
    code, html, final, headers = fetch(url)
    is_shell = len(html) < 6000
    robots_match = re.search(r'<meta[^>]*name="robots"[^>]*content="([^"]*)"', html)
    robots = robots_match.group(1) if robots_match else "indexable"
    canon_match = re.search(r'<link[^>]*rel="canonical"[^>]*href="([^"]*)"', html)
    canonical = canon_match.group(1) if canon_match else "MISSING"
    
    classification = ""
    if code == 200 and is_shell and "noindex" not in robots.lower():
        classification = "SOFT_404 (200 shell, indexable)"
    elif code == 200 and is_shell and "noindex" in robots.lower():
        classification = "SOFT_404 (200 shell, noindex)"
    elif code == 200 and not is_shell:
        classification = "LIVE_PAGE"
    elif code == 301 or code == 302:
        classification = f"REDIRECT -> {final}"
    elif code == 404:
        classification = "404"
    else:
        classification = f"HTTP {code}"
    
    print(f"  {path:<55} {code} {classification}")

# 5. Check redirect behavior for /operations, /technology, etc
print("\n" + "=" * 100)
print("SHORT DISCIPLINE URL REDIRECT CHECK")
print("=" * 100)
for path in ["/operations", "/technology", "/communications", "/leadership", "/blog"]:
    url = "https://ymbs.pro" + path
    code, html, final, headers = fetch(url)
    is_shell = len(html) < 6000
    print(f"  {path:<20} code={code} final={final} shell={is_shell} len={len(html)}")
