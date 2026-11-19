import urllib.request, ssl
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

# Fetch raw HTML of homepage and a deep page to check rendering
for path in ["/", "/services/operations", "/seo-services", "/nonexistent-test-page"]:
    url = "https://ymbs.pro" + path
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1)"})
    resp = urllib.request.urlopen(req, context=ctx, timeout=15)
    html = resp.read().decode("utf-8", errors="replace")
    # Check for key SEO elements
    has_title = "<title>" in html
    has_canonical = 'rel="canonical"' in html or "rel='canonical'" in html
    has_meta_desc = 'name="description"' in html
    has_h1 = "<h1" in html
    has_app_root = 'id="root"' in html
    body_len = len(html)
    # Check if body has real content beyond the SPA shell
    has_script_content = "sa-dynamic-optimization" in html
    print(f"=== {path} ===")
    print(f"  Status: {resp.status}, HTML length: {body_len}")
    print(f"  title: {has_title}, canonical: {has_canonical}, meta_desc: {has_meta_desc}, h1: {has_h1}")
    print(f"  app_root: {has_app_root}, trailguide: {has_script_content}")
    # Show first 500 chars of body
    body_start = html.find("<body")
    if body_start > 0:
        print(f"  body snippet: {html[body_start:body_start+300].strip()[:200]}")
    print()
