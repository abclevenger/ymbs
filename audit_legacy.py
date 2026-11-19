import subprocess, re

legacy = [
  '/leadership/michelle-griffith.html',
  '/technology-services/cybersecurity-risk-cleanup.html',
  '/leadership/strategic-planning-alignment.html',
  '/smb-cybersecurity-playbook.html',
  '/technology-services/reporting-visibility.html',
  '/technology/cybersecurity-risk.html',
  '/mission-foundation/strategic-alignment-framework.html',
  '/legal-software/mycase.html',
  '/leadership/ashley-clevenger.html',
  '/elevating-public-voice.html',
  '/affiliate-program.html',
  '/strengthening-organizational-governance.html',
  '/technology.html',
  '/preview/',
  '/welcome-room',
  '/cybersecurity-services',
  '/a2p-tos',
  '/book/service-discovery',
  '/ymbs-demo',
  '/home-page-9693',
  '/terms-of-use',
  '/financial-oversight',
  '/home',
  '/index',
  '/index.html',
]

for path in legacy:
    result = subprocess.run(['curl','-sI',f'https://ymbs.pro{path}'], capture_output=True, text=True)
    status = re.search(r'HTTP/\S+ (\d+)', result.stdout)
    loc = re.search(r'location: (\S+)', result.stdout, re.I)
    s = status.group(1) if status else '?'
    l = loc.group(1).strip() if loc else ''
    info = s
    if l:
        info += ' -> ' + l
    if s == '200':
        html = subprocess.run(['curl','-s',f'https://ymbs.pro{path}'], capture_output=True, text=True).stdout
        title = re.search(r'<title>([^<]*)</title>', html)
        root_start = html.find('<div id="root">')
        root_end = html.find('</body>')
        root_len = root_end - root_start
        t = title.group(1)[:50] if title else 'NO_TITLE'
        info += ' | title=' + t + ' | root_len=' + str(root_len)
    print(f"{path:55s} {info}")
