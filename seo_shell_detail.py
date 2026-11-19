import urllib.request, ssl, re
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

# Check if the SPA shell includes a noindex (the LegacyRedirectHandler adds one)
# and check the actual HTTP headers for X-Robots-Tag
test_urls = [
    "/technology/digital-signage-menu-boards.html",
    "/blog",
    "/operations",
    "/nonexistent-test-page",
    "/seo-services",
    "/home",
]

print("=" * 100)
print("DETAILED SHELL ANALYSIS - checking for noindex in SPA shell")
print("=" * 100)

for path in test_urls:
    url = "https://ymbs.pro" + path
    try:
        req = urllib.request.Request(url, headers={'User-Agent':'Mozilla/5.0 (compatible; Googlebot/2.1)'})
        opener = urllib.request.build_opener(urllib.request.HTTPSHandler(context=ctx))
        resp = opener.open(req, timeout=15)
        status = resp.getcode()
        headers = dict(resp.headers)
        html = resp.read().decode("utf-8", errors="replace")
        
        print(f"\n--- {path} (HTTP {status}) ---")
        print(f"  X-Robots-Tag: {headers.get('X-Robots-Tag', 'NOT SET')}")
        print(f"  Content-Type: {headers.get('Content-Type', 'NOT SET')}")
        print(f"  Body length: {len(html)}")
        
        # Check for noindex in the static HTML
        robots_match = re.search(r'<meta[^>]*name="robots"[^>]*content="([^"]*)"', html)
        print(f"  robots meta in HTML: {robots_match.group(1) if robots_match else 'NOT PRESENT'}")
        
        # Check for canonical
        canon_match = re.search(r'<link[^>]*rel="canonical"[^>]*href="([^"]*)"', html)
        print(f"  canonical in HTML: {canon_match.group(1) if canon_match else 'NOT PRESENT'}")
        
        # Check for title
        title_match = re.search(r'<title>(.*?)</title>', html, re.S)
        print(f"  title in HTML: {title_match.group(1).strip()[:60] if title_match else 'NOT PRESENT'}")
        
        # Check for noindex in JS (the LegacyRedirectHandler adds it dynamically)
        has_redirect_handler = 'LegacyRedirect' in html or 'resolveLegacyRedirect' in html
        print(f"  Has redirect handler in JS: {has_redirect_handler}")
        
    except Exception as e:
        print(f"\n--- {path} --- ERROR: {e}")

# Now check: does the _redirects file actually get served?
print("\n" + "=" * 100)
print("CHECKING IF _redirects FILE IS ACCESSIBLE")
print("=" * 100)
try:
    req = urllib.request.Request("https://ymbs.pro/_redirects", headers={'User-Agent':'Mozilla/5.0'})
    opener = urllib.request.build_opener(urllib.request.HTTPSHandler(context=ctx))
    resp = opener.open(req, timeout=15)
    print(f"  Status: {resp.getcode()}")
    content = resp.read().decode("utf-8", errors="replace")
    print(f"  Content length: {len(content)}")
    print(f"  First 200 chars: {content[:200]}")
except urllib.error.HTTPError as e:
    print(f"  HTTP Error: {e.code}")
except Exception as e:
    print(f"  Error: {e}")
