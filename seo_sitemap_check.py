import urllib.request, ssl, re, json
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

# 1. Parse sitemap URLs
req = urllib.request.Request('https://ymbs.pro/sitemap.xml', headers={'User-Agent':'Mozilla/5.0 (compatible; Googlebot/2.1)'})
data = urllib.request.urlopen(req, context=ctx).read().decode()
sitemap_urls = re.findall(r'<loc>(.*?)</loc>', data)

# 2. App routes from App.tsx (manually extracted from route-map)
app_routes = [
    "/", "/services", "/services/operations", "/services/technology", "/services/leadership",
    "/services/communications", "/insights", "/assessments/cyber-readiness", "/assessments/technology",
    "/assessments/seo", "/assessments/system-health", "/assessments/dashboard", "/assessments",
    "/solutions/organizational-growth", "/solutions/ai-adoption", "/solutions/technology-modernization",
    "/solutions/organizational-change", "/contact", "/policy", "/terms", "/a2p", "/accessibility",
    "/elevation", "/services/seo", "/portfolio", "/team", "/sitemap", "/suppliers", "/support",
    "/llm-knowledge", "/scale", "/scale/assessment", "/michelle-griffith",
    "/executive-readiness-intensive", "/law-firm-pr-system", "/nonprofit-consulting",
    "/professional-services", "/mission-driven-organizations", "/partners", "/law-firm-technology",
    "/fractional-coo", "/strategic-planning", "/mission-foundation", "/integrated-executive-advisory",
    "/company-profile", "/client-results", "/thania-clevenger", "/ashley-clevenger", "/nestor-ortiz",
    "/analytics-dashboard", "/case-studies/law-firm-intake-automation",
    "/case-studies/nonprofit-tech-consolidation", "/case-studies/law-firm-website-transformation",
    "/case-studies/nonprofit-governance-operations", "/case-studies/executive-readiness-stakeholder-comms",
    "/assessments/results", "/insights/why-your-new-tech-stack-failed",
    "/services/technology/ai-automation", "/services/technology/cybersecurity",
    "/services/technology/connectivity", "/services/technology/crm-workflow",
    "/services/technology/website-seo", "/services/technology/iot-physical-security",
    "/services/technology/digital-signage", "/services/technology/software-solutions",
    "/services/technology/mobility-workforce", "/services/communications/reputation-management",
    "/services/communications/executive-communications", "/services/operations/governance",
    "/services/leadership/community-engagement",
]

# 3. Check each sitemap URL for HTTP status, canonical, noindex
results = []
for sm_url in sitemap_urls:
    path = sm_url.replace("https://ymbs.pro", "")
    try:
        req = urllib.request.Request(sm_url, headers={'User-Agent':'Mozilla/5.0 (compatible; Googlebot/2.1)'})
        resp = urllib.request.urlopen(req, context=ctx, timeout=15)
        status = resp.getcode()
        final_url = resp.geturl()
        html = resp.read().decode("utf-8", errors="replace")
        # Extract canonical
        canon_match = re.search(r'<link[^>]*rel="canonical"[^>]*href="([^"]*)"', html)
        canonical = canon_match.group(1) if canon_match else "MISSING"
        # Extract robots meta
        robots_match = re.search(r'<meta[^>]*name="robots"[^>]*content="([^"]*)"', html)
        robots_meta = robots_match.group(1) if robots_match else "none"
        # Extract title
        title_match = re.search(r'<title>(.*?)</title>', html, re.S)
        title = title_match.group(1).strip() if title_match else "MISSING"
        redirected = final_url != sm_url
        results.append({
            "url": path, "status": status, "redirected": redirected,
            "final": final_url.replace("https://ymbs.pro","") if redirected else "",
            "canonical": canonical.replace("https://ymbs.pro",""),
            "robots": robots_meta, "title": title[:60],
            "body_len": len(html)
        })
    except urllib.error.HTTPError as e:
        results.append({"url": path, "status": e.code, "redirected": False, "final": "",
                        "canonical": "ERR", "robots": "", "title": "", "body_len": 0})
    except Exception as e:
        results.append({"url": path, "status": f"ERR:{e}", "redirected": False, "final": "",
                        "canonical": "ERR", "robots": "", "title": "", "body_len": 0})

# 4. Find app routes NOT in sitemap
sm_paths = set(u.replace("https://ymbs.pro","") for u in sitemap_urls)
not_in_sitemap = [r for r in app_routes if r not in sm_paths]

# 5. Find sitemap URLs NOT in app routes (excluding /insights/:slug dynamic)
app_set = set(app_routes)
insights_in_sm = [u for u in sm_paths if u.startswith("/insights/") and u != "/insights"]
extra_in_sitemap = [u for u in sm_paths if u not in app_set and u not in insights_in_sm]

print("=" * 80)
print("SITEMAP URL STATUS CHECK")
print("=" * 80)
print(f"{'URL':<55} {'Status':<6} {'Canon':<12} {'Robots':<12} {'Len':<6}")
print("-" * 80)
for r in results:
    flag = ""
    if r["status"] != 200: flag = " <<< NON-200"
    if r["redirected"]: flag += " <<< REDIRECT"
    if "noindex" in r["robots"].lower(): flag += " <<< NOINDEX"
    if r["canonical"] == "MISSING": flag += " <<< NO CANONICAL"
    if r["canonical"] != r["url"] and r["canonical"] != "MISSING": flag += f" <<< NON-SELF-CANONICAL"
    print(f"{r['url']:<55} {str(r['status']):<6} {r['canonical']:<12} {r['robots']:<12} {r['body_len']:<6}{flag}")

print("\n" + "=" * 80)
print(f"APP ROUTES NOT IN SITEMAP ({len(not_in_sitemap)}):")
print("=" * 80)
for r in not_in_sitemap:
    print(f"  {r}")

print("\n" + "=" * 80)
print(f"INSIGHTS ARTICLES IN SITEMAP ({len(insights_in_sm)}):")
print("=" * 80)
for u in insights_in_sm:
    print(f"  {u}")

print("\n" + "=" * 80)
print(f"SITEMAP URLS NOT IN APP ROUTES (non-insights) ({len(extra_in_sitemap)}):")
print("=" * 80)
for u in extra_in_sitemap:
    print(f"  {u}")

print("\n" + "=" * 80)
print("SUMMARY")
print("=" * 80)
non200 = [r for r in results if r["status"] != 200]
noindex = [r for r in results if "noindex" in r["robots"].lower()]
no_canon = [r for r in results if r["canonical"] == "MISSING"]
non_self = [r for r in results if r["canonical"] != r["url"] and r["canonical"] != "MISSING"]
redirected = [r for r in results if r["redirected"]]
print(f"Total sitemap URLs: {len(results)}")
print(f"Non-200 status: {len(non200)}")
print(f"Has noindex: {len(noindex)}")
print(f"Missing canonical: {len(no_canon)}")
print(f"Non-self-referencing canonical: {len(non_self)}")
print(f"Redirected: {len(redirected)}")
print(f"App routes not in sitemap: {len(not_in_sitemap)}")
