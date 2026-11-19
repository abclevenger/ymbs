import urllib.request, re

BASE = "https://ymbs.pro"
routes = [
    "/", "/services", "/services/operations", "/services/technology", "/services/leadership",
    "/services/communications", "/insights", "/assessments/cyber-readiness", "/assessments/technology",
    "/assessments/seo", "/assessments/system-health", "/assessments/dashboard", "/assessments",
    "/solutions/organizational-growth", "/solutions/ai-adoption", "/solutions/technology-modernization",
    "/solutions/organizational-change", "/contact", "/policy", "/terms", "/a2p", "/accessibility",
    "/elevation", "/services/seo", "/portfolio", "/team", "/sitemap", "/suppliers", "/support",
    "/llm-knowledge", "/scale", "/scale/assessment", "/michelle-griffith", "/executive-readiness-intensive",
    "/law-firm-pr-system", "/nonprofit-consulting", "/professional-services", "/mission-driven-organizations",
    "/partners", "/law-firm-technology", "/fractional-coo", "/strategic-planning", "/mission-foundation",
    "/integrated-executive-advisory", "/company-profile", "/client-results", "/thania-clevenger",
    "/ashley-clevenger", "/nestor-ortiz", "/analytics-dashboard",
    "/case-studies/law-firm-intake-automation", "/case-studies/nonprofit-tech-consolidation",
    "/case-studies/law-firm-website-transformation", "/case-studies/nonprofit-governance-operations",
    "/case-studies/executive-readiness-stakeholder-comms", "/assessments/results",
    "/services/technology/ai-automation", "/services/technology/cybersecurity", "/services/technology/connectivity",
    "/services/technology/crm-workflow", "/services/technology/website-seo", "/services/technology/iot-physical-security",
    "/services/technology/digital-signage", "/services/technology/software-solutions", "/services/technology/mobility-workforce",
    "/services/communications/reputation-management", "/services/communications/executive-communications",
    "/services/operations/governance", "/services/leadership/community-engagement",
    "/operations", "/technology", "/communications", "/leadership", "/blog",
]

for path in routes:
    url = BASE + path
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        resp = urllib.request.urlopen(req, timeout=10)
        final_url = resp.geturl()
        status = resp.getcode()
        body = resp.read().decode("utf-8", errors="replace")
        title_m = re.search(r"<title[^>]*>(.*?)</title>", body, re.S)
        title = title_m.group(1).strip()[:55] if title_m else "NO_TITLE"
        canon_m = re.search(r'<link[^>]*rel=["\']canonical["\'][^>]*href=["\']([^"\']+)', body, re.I)
        canonical = canon_m.group(1).replace(BASE, "") if canon_m else "NONE"
        robots_m = re.search(r'<meta[^>]*name=["\']robots["\'][^>]*content=["\']([^"\']+)', body, re.I)
        robots = robots_m.group(1) if robots_m else "NONE"
        h1_m = re.search(r"<h1[^>]*>(.*?)</h1>", body, re.S)
        has_h1 = bool(h1_m)
        body_len = len(body)
        redirected = final_url != url
        print(f"{path:55s} {str(status):4s} redir={str(redirected):5s} final={final_url.replace(BASE,''):30s} robots={robots:10s} h1={str(has_h1):5s} len={body_len:6d} title={title[:50]}")
    except urllib.error.HTTPError as e:
        print(f"{path:55s} {e.code} HTTP_ERROR")
    except Exception as e:
        print(f"{path:55s} ERR {str(e)[:50]}")
