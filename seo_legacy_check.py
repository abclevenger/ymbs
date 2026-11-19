import urllib.request, ssl, re
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

# Legacy .html URLs from redirects.ts + GSC examples
legacy_urls = [
    "/technology/digital-signage-menu-boards.html",
    "/technology/iot-physical-security.html",
    "/technology/ai-communications.html",
    "/technology/online-reputation-management.html",
    "/technology-services/technology-assessment.html",
    "/technology/software-solutions.html",
    "/technology/mobility-workforce.html",
    "/technology/digital-growth.html",
    "/enterprise-connectivity.html",
    "/comprehensive-technology-audit-services.html",
    "/leadership/community-research-engagement.html",
    "/mission-foundation/board-governance-framework.html",
    "/mission-foundation/",
    "/nonprofit-strategy-development-vs-traditional-business-models.html",
    "/unlock-nonprofit-success-strategic-development.html",
    "/empowering-nonprofits-florida-ymbs-consulting-insights.html",
    "/blog",
    "/operations",
    "/technology",
    "/communications",
    "/leadership",
    # GSC examples
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
    # More GSC 404 examples
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
    # Homepage variants
    "/home",
    "/index",
    "/index.html",
]

print("=" * 100)
print("LEGACY / GSC URL REDIRECT & STATUS CHECK")
print("=" * 100)
print(f"{'URL':<60} {'Status':<8} {'Final':<45} {'Hops'}")
print("-" * 100)

for path in legacy_urls:
    url = "https://ymbs.pro" + path
    try:
        req = urllib.request.Request(url, headers={'User-Agent':'Mozilla/5.0 (compatible; Googlebot/2.1)'})
        # Don't follow redirects automatically - use HTTPRedirectHandler
        opener = urllib.request.build_opener(urllib.request.HTTPSHandler(context=ctx))
        resp = opener.open(req, timeout=15)
        status = resp.getcode()
        final = resp.geturl().replace("https://ymbs.pro","")
        html = resp.read().decode("utf-8", errors="replace")[:2000]
        # Check if SPA shell (no canonical)
        has_canon = 'rel="canonical"' in html
        is_shell = len(html) < 6000 and not has_canon
        robots_match = re.search(r'<meta[^>]*name="robots"[^>]*content="([^"]*)"', html)
        robots = robots_match.group(1) if robots_match else ""
        flag = ""
        if is_shell: flag = " [SPA SHELL/SOFT-404]"
        if "noindex" in robots.lower(): flag += " [NOINDEX]"
        print(f"{path:<60} {status:<8} {final:<45} {'0':<4}{flag}")
    except urllib.error.HTTPError as e:
        print(f"{path:<60} {e.code:<8} {'':<45} {'0':<4} [HTTP ERROR]")
    except urllib.error.URLError as e:
        if hasattr(e, 'reason') and 'redirect' in str(e).lower():
            loc = e.headers.get('Location','') if hasattr(e,'headers') else ''
            print(f"{path:<60} {'REDIR':<8} {loc:<45} {'?':<4} [REDIRECT ERROR?]")
        else:
            print(f"{path:<60} {'ERR':<8} {str(e)[:40]:<45} {'?':<4}")
    except Exception as e:
        print(f"{path:<60} {'ERR':<8} {str(e)[:40]:<45} {'?':<4}")
