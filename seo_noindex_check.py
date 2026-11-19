import urllib.request, ssl, re
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

# Check the 3 routes not in sitemap + utility pages for noindex
noindex_candidates = [
    "/assessments/dashboard",
    "/analytics-dashboard", 
    "/assessments/results",
    "/seo-services",
    "/elevation",
    "/support",
    "/suppliers",
    "/a2p",
    "/policy",
    "/terms",
    "/accessibility",
    "/sitemap",
    "/llm-knowledge",
    "/company-profile",
    "/portfolio",
]

print("=" * 100)
print("NOINDEX CHECK - routes not in sitemap + utility pages")
print("=" * 100)

for path in noindex_candidates:
    url = "https://ymbs.pro" + path
    try:
        req = urllib.request.Request(url, headers={'User-Agent':'Mozilla/5.0 (compatible; Googlebot/2.1)'})
        opener = urllib.request.build_opener(urllib.request.HTTPSHandler(context=ctx))
        resp = opener.open(req, timeout=15)
        html = resp.read().decode("utf-8", errors="replace")
        
        robots_match = re.search(r'<meta[^>]*name="robots"[^>]*content="([^"]*)"', html)
        robots = robots_match.group(1) if robots_match else "none (indexable)"
        
        canon_match = re.search(r'<link[^>]*rel="canonical"[^>]*href="([^"]*)"', html)
        canonical = canon_match.group(1) if canon_match else "MISSING"
        
        title_match = re.search(r'<title>(.*?)</title>', html, re.S)
        title = title_match.group(1).strip()[:60] if title_match else "MISSING"
        
        is_shell = len(html) < 6000
        
        flag = ""
        if "noindex" in robots.lower(): flag = " *** NOINDEX ***"
        if is_shell: flag += " [SHELL]"
        if canonical == "MISSING": flag += " [NO CANONICAL]"
        
        print(f"  {path:<35} robots={robots:<25} canon={canonical:<40} len={len(html):<6}{flag}")
    except Exception as e:
        print(f"  {path:<35} ERROR: {e}")

# Check TrailGuide script
print("\n" + "=" * 100)
print("TRAILGUIDE / SEARCHATLAS SCRIPT CHECK")
print("=" * 100)
try:
    req = urllib.request.Request("https://ymbs.pro/", headers={'User-Agent':'Mozilla/5.0 (compatible; Googlebot/2.1)'})
    opener = urllib.request.build_opener(urllib.request.HTTPSHandler(context=ctx))
    resp = opener.open(req, timeout=15)
    html = resp.read().decode("utf-8", errors="replace")
    
    # Check for TrailGuide
    has_tg_static = 'sa-dynamic-optimization' in html
    has_tg_uuid = 'b5246913-dc40-4f3d-877d-be51133d3a77' in html
    has_tg_url = 'seo.ymbs.pro' in html
    has_dynamic_opt = 'dynamic_optimization' in html
    
    print(f"  Static HTML has sa-dynamic-optimization: {has_tg_static}")
    print(f"  Static HTML has UUID: {has_tg_uuid}")
    print(f"  Static HTML has seo.ymbs.pro: {has_tg_url}")
    print(f"  Static HTML has dynamic_optimization: {has_dynamic_opt}")
    
    # Check main.tsx injection
    has_main_tsx = 'main.tsx' in html or 'main.js' in html or '/src/main' in html
    
    # Count occurrences
    tg_count = html.count('sa-dynamic-optimization')
    print(f"  Occurrences of sa-dynamic-optimization in HTML: {tg_count}")
    
    # Check for noindex added by TrailGuide
    print(f"  noindex in HTML: {'noindex' in html.lower()}")
    
except Exception as e:
    print(f"  ERROR: {e}")

# Check www vs non-www
print("\n" + "=" * 100)
print("WWW vs NON-WWW CHECK")
print("=" * 100)
for host in ["https://www.ymbs.pro/", "https://ymbs.pro/"]:
    try:
        req = urllib.request.Request(host, headers={'User-Agent':'Mozilla/5.0 (compatible; Googlebot/2.1)'})
        opener = urllib.request.build_opener(urllib.request.HTTPSHandler(context=ctx))
        resp = opener.open(req, timeout=15)
        final = resp.geturl()
        print(f"  {host} -> {final} (status {resp.getcode()})")
    except urllib.error.HTTPError as e:
        loc = e.headers.get('Location', 'N/A')
        print(f"  {host} -> HTTP {e.code}, Location: {loc}")
    except Exception as e:
        print(f"  {host} -> ERROR: {e}")

# Check HTTP vs HTTPS
print("\n" + "=" * 100)
print("HTTP vs HTTPS CHECK")
print("=" * 100)
try:
    req = urllib.request.Request("http://ymbs.pro/", headers={'User-Agent':'Mozilla/5.0'})
    opener = urllib.request.build_opener(urllib.request.HTTPSHandler(context=ctx))
    resp = opener.open(req, timeout=15)
    print(f"  http://ymbs.pro/ -> {resp.geturl()} (status {resp.getcode()})")
except urllib.error.HTTPError as e:
    loc = e.headers.get('Location', 'N/A')
    print(f"  http://ymbs.pro/ -> HTTP {e.code}, Location: {loc}")
except Exception as e:
    print(f"  http://ymbs.pro/ -> ERROR: {e}")
