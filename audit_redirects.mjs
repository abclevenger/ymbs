import https from 'https';
function fetchUrl(url) {
  return new Promise((resolve) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let body = '';
      res.on('data', (d) => body += d);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body }));
    });
    req.on('error', () => resolve({ status: 'ERR', body: '' }));
    req.setTimeout(10000, () => { req.destroy(); resolve({ status: 'TIMEOUT', body: '' }); });
  });
}
// Check redirects, noindex, canonicals for legacy/suspicious URLs
const testUrls = [
  '/operations', '/technology', '/communications', '/leadership',
  '/technology.html', '/leadership/michelle-griffith.html',
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
  '/preview/', '/welcome-room', '/cybersecurity-services',
  '/a2p-tos', '/book/service-discovery', '/ymbs-demo',
  '/home-page-9693', '/terms-of-use', '/financial-oversight',
  '/home', '/index', '/index.html', '/home.html',
  '/blog', '/blog/some-slug',
  '/assessments/dashboard', '/analytics-dashboard',
  '/nonexistent-test-page-12345',
];
for (const path of testUrls) {
  const r = await fetchUrl('https://ymbs.pro' + path);
  const loc = r.headers?.location || '';
  const body = r.body || '';
  const robotsM = body.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)/i);
  const robots = robotsM ? robotsM[1] : 'none';
  const canonM = body.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)/i);
  const canon = canonM ? canonM[1] : 'none';
  const titleM = body.match(/<title[^>]*>(.*?)<\/title>/s);
  const title = titleM ? titleM[1].trim().slice(0,50) : 'none';
  console.log(`${path.padEnd(55)} ${String(r.status).padEnd(5)} loc=${loc.slice(0,50)} robots=${robots} canon=${canon.slice(0,50)} title=${title}`);
}
