import urllib.request, ssl, re
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

# Check the 3 routes in sitemap but NOT in App.tsx routes
print("=" * 100)
print("ROUTES IN SITEMAP BUT NOT IN APP.TSX - checking if they render")
print("=" * 100)
# /services/seo is in sitemap but App.tsx has /services/seo -> SeoServices
# Check /seo-services vs /services/seo
for path in ["/seo-services", "/services/seo"]:
    code, html, final, _ = fetch("https://ymbs.pro" + path)
    is_shell = len(html) < 6000
    title_match = re.search(r'<title>(.*?)</title>', html, re.S)
    title = title_match.group(1).strip()[:60] if title_match else "MISSING"
    print(f"  {path:<25} code={code} shell={is_shell} len={len(html)} title={title}")

# Check X-Robots-Tag headers
print("\n" + "=" * 100)
print("X-ROBOTS-TAG HEADER CHECK")
print("=" * 100)
for path in ["/", "/services/operations", "/assessments/dashboard", "/analytics-dashboard", "/assessments/results"]:
    code, html, final, headers = fetch("https://ymbs.pro" + path)
    xrobots = headers.get('X-Robots-Tag', 'NONE')
    print(f"  {path:<35} X-Robots-Tag: {xrobots}")

# Check which routes are in sitemap but missing from App.tsx
print("\n" + "=" * 100)
print("SITEMAP vs APP.TSX ROUTE RECONCILIATION")
print("=" * 100)
# Read sitemap from repo
with open('public/sitemap.xml', 'r') as f:
    sitemap = f.read()
sitemap_urls = [u.replace('https://ymbs.pro', '') for u in re.findall(r'<loc>(.*?)</loc>', sitemap)]

# Read App.tsx routes
with open('src/App.tsx', 'r') as f:
    app = f.read()
app_routes = re.findall(r'path="([^"]+)"', app)

print(f"Sitemap URLs: {len(sitemap_urls)}")
print(f"App.tsx routes: {len(app_routes)}")

# Routes in sitemap but not in App.tsx
in_sitemap_not_app = []
for u in sitemap_urls:
    if u not in app_routes:
        in_sitemap_not_app.append(u)

print(f"\nIn sitemap but NOT in App.tsx routes ({len(in_sitemap_not_app)}):")
for u in in_sitemap_not_app:
    print(f"  {u}")

# Routes in App.tsx but not in sitemap
in_app_not_sitemap = []
for u in app_routes:
    if u not in sitemap_urls and u != '*':
        in_app_not_sitemap.append(u)

print(f"\nIn App.tsx but NOT in sitemap ({len(in_app_not_sitemap)}):")
for u in in_app_not_sitemap:
    print(f"  {u}")

# Check duplicate content: /services/seo vs /seo-services
print("\n" + "=" * 100)
print("DUPLICATE CONTENT CHECK - /services/seo vs /seo-services")
print("=" * 100)
for path in ["/services/seo", "/seo-services"]:
    code, html, final, _ = fetch("https://ymbs.pro" + path)
    is_shell = len(html) < 6000
    canon_match = re.search(r'<link[^>]*rel="canonical"[^>]*href="([^"]*)"', html)
    canonical = canon_match.group(1) if canon_match else "MISSING"
    title_match = re.search(r'<title>(.*?)</title>', html, re.S)
    title = title_match.group(1).strip()[:60] if title_match else "MISSING"
    print(f"  {path:<20} code={code} shell={is_shell} canon={canonical} title={title}")

# Check /services/seo in sitemap
print(f"\n  /services/seo in sitemap: {'/services/seo' in sitemap_urls}")
print(f"  /seo-services in sitemap: {'/seo-services' in sitemap_urls}")
