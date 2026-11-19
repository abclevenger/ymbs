import urllib.request, ssl, re
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

# Check which routes get full prerender vs SPA shell
pages = [
    "/", "/services", "/services/operations", "/services/technology",
    "/services/communications", "/services/leadership", "/scale", "/team",
    "/contact", "/insights", "/nonprofit-consulting", "/law-firm-technology",
    "/professional-services", "/mission-driven-organizations", "/partners",
    "/fractional-coo", "/strategic-planning", "/integrated-executive-advisory",
    "/mission-foundation", "/company-profile", "/client-results",
    "/thania-clevenger", "/ashley-clevenger", "/michelle-griffith", "/nestor-ortiz",
    "/assessments", "/assessments/technology", "/assessments/cyber-readiness",
    "/assessments/seo", "/assessments/system-health", "/scale/assessment",
    "/solutions/organizational-growth", "/solutions/ai-adoption",
    "/solutions/technology-modernization", "/solutions/organizational-change",
    "/seo-services", "/services/seo", "/portfolio", "/suppliers", "/support",
    "/llm-knowledge", "/executive-readiness-intensive", "/law-firm-pr-system",
    "/elevation", "/policy", "/terms", "/a2p", "/accessibility", "/sitemap",
    "/analytics-dashboard", "/assessments/dashboard", "/assessments/results",
    "/services/technology/ai-automation", "/services/technology/cybersecurity",
    "/services/technology/connectivity", "/services/technology/crm-workflow",
    "/services/technology/website-seo", "/services/technology/iot-physical-security",
    "/services/technology/digital-signage", "/services/technology/software-solutions",
    "/services/technology/mobility-workforce",
    "/services/communications/reputation-management",
    "/services/communications/executive-communications",
    "/services/operations/governance",
    "/services/leadership/community-engagement",
    "/case-studies/law-firm-intake-automation",
    "/case-studies/nonprofit-tech-consolidation",
    "/case-studies/law-firm-website-transformation",
    "/case-studies/nonprofit-governance-operations",
    "/case-studies/executive-readiness-stakeholder-comms",
    "/insights/why-your-new-tech-stack-failed",
    "/insights/cybersecurity-basics-mission-driven-orgs",
    "/nonexistent-test-page",
    "/random-fake-route-xyz",
]

prerendered = []
shell_only = []

for p in pages:
    url = "https://ymbs.pro" + p
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1)"})
        resp = urllib.request.urlopen(req, context=ctx, timeout=15)
        html = resp.read().decode("utf-8", errors="replace")
        has_canonical = 'rel="canonical"' in html
        body_len = len(html)
        if has_canonical and body_len > 10000:
            prerendered.append((p, body_len))
        else:
            shell_only.append((p, body_len))
    except Exception as e:
        shell_only.append((p, f"ERR:{e}"))

print("=== PRERENDERED (full HTML with canonical) ===")
for p, l in prerendered:
    print(f"  {p:55s} {l}")
print(f"\nTotal prerendered: {len(prerendered)}")

print("\n=== SHELL ONLY (SPA fallback, no canonical in initial HTML) ===")
for p, l in shell_only:
    print(f"  {p:55s} {l}")
print(f"\nTotal shell-only: {len(shell_only)}")
