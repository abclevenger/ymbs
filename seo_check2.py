import re, subprocess

pages = ["/company-profile", "/llm-knowledge", "/portfolio", "/suppliers", "/support", "/a2p", "/accessibility", "/policy", "/terms", "/elevation", "/analytics-dashboard", "/assessments/dashboard", "/assessments/results"]

for u in pages:
    r = subprocess.run(["curl", "-s", "https://ymbs.pro" + u], capture_output=True, text=True, timeout=15)
    h = r.stdout
    t = re.findall(r'<title[^>]*>([^<]*)</title>', h, re.I)
    c = re.findall(r'rel=["\']canonical["\'][^>]*href=["\']([^"\']*)', h, re.I)
    rob = re.findall(r'name=["\']robots["\'][^>]*content=["\']([^"\']*)', h, re.I)
    title = (t[0][:60] if t else "NONE")
    canon = (c[0][:50] if c else "NONE")
    robots = (rob[0] if rob else "-")
    print(f"{u:40s} | title={title:62s} | canon={canon:50s} | robots={robots}")
