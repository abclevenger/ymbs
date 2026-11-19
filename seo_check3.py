import urllib.request, re, ssl
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

pages = [
    "/services/operations",
    "/services/technology",
    "/services/communications",
    "/services/leadership",
    "/scale",
    "/scale/assessment",
    "/assessments",
    "/team",
    "/contact",
    "/insights",
    "/nonprofit-consulting",
    "/law-firm-technology",
    "/professional-services",
    "/mission-driven-organizations",
    "/partners",
    "/fractional-coo",
    "/strategic-planning",
    "/integrated-executive-advisory",
    "/mission-foundation",
    "/company-profile",
    "/llm-knowledge",
    "/portfolio",
    "/suppliers",
    "/support",
    "/a2p",
    "/accessibility",
    "/policy",
    "/terms",
    "/elevation",
    "/client-results",
    "/executive-readiness-intensive",
    "/law-firm-pr-system",
    "/seo-services",
    "/services/seo",
    "/thania-clevenger",
    "/ashley-clevenger",
    "/michelle-griffith",
    "/nestor-ortiz",
    "/sitemap",
    "/analytics-dashboard",
    "/assessments/dashboard",
    "/assessments/results",
    "/solutions/organizational-growth",
    "/solutions/ai-adoption",
    "/solutions/technology-modernization",
    "/solutions/organizational-change",
    "/services/technology/ai-automation",
    "/services/technology/cybersecurity",
    "/services/technology/connectivity",
    "/services/technology/crm-workflow",
    "/services/technology/website-seo",
    "/services/technology/iot-physical-security",
    "/services/technology/digital-signage",
    "/services/technology/software-solutions",
    "/services/technology/mobility-workforce",
    "/services/communications/reputation-management",
    "/services/communications/executive-communications",
    "/services/operations/governance",
    "/services/leadership/community-engagement",
]

for p in pages:
    url = "https://ymbs.pro" + p
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        resp = urllib.request.urlopen(req, context=ctx, timeout=15)
        html = resp.read().decode("utf-8", errors="replace")
        m = re.search(r'<meta[^>]*name=["\']robots["\'][^>]*content=["\']([^"\']*)["\']', html, re.I)
        robots = m.group(1) if m else "-"
        cm = re.search(r'<link[^>]*rel=["\']canonical["\'][^>]*href=["\']([^"\']*)["\']', html, re.I)
        canon = cm.group(1) if cm else "MISSING"
        tm = re.search(r'<title>([^<]*)</title>', html, re.I)
        title = tm.group(1).strip()[:55] if tm else "MISSING"
        print(f"{p:55s} | {resp.status} | robots={robots:20s} | canon={canon[:50]:50s} | title={title}")
    except urllib.error.HTTPError as e:
        print(f"{p:55s} | {e.code} | HTTP ERROR")
    except Exception as e:
        print(f"{p:55s} | ERR | {str(e)[:50]}")
