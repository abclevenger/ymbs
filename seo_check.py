import subprocess, re

pages = [
  "/", "/services/operations", "/services/technology", "/services/communications",
  "/services/leadership", "/scale", "/team", "/contact", "/insights",
  "/nonprofit-consulting", "/law-firm-technology", "/assessments", "/partners",
  "/company-profile", "/llm-knowledge", "/portfolio", "/suppliers", "/support",
  "/a2p", "/accessibility", "/policy", "/terms", "/elevation",
  "/operations", "/technology", "/communications", "/leadership",
  "/technology.html", "/blog",
]

for u in pages:
    try:
        r = subprocess.run(["curl", "-s", "https://ymbs.pro" + u], capture_output=True, text=True, timeout=15)
        h = r.stdout
        t = re.findall(r'<title[^>]*>([^<]*)</title>', h, re.I)
        c = re.findall(r'rel=["\']canonical["\'][^>]*href=["\']([^"\']*)', h, re.I)
        rob = re.findall(r'name=["\']robots["\'][^>]*content=["\']([^"\']*)', h, re.I)
        title = (t[0][:55] if t else "NONE")
        canon = (c[0][:50] if c else "NONE")
        robots = (rob[0] if rob else "-")
        print(f"{u:45s} | title={title:58s} | canon={canon:50s} | robots={robots}")
    except Exception as e:
        print(f"{u:45s} | ERROR: {e}")
