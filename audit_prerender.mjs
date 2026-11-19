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
// Check if real routes are pre-rendered vs legacy empty shells
const tests = [
  { path: '/services/operations', label: 'REAL ROUTE' },
  { path: '/operations', label: 'SHORT DISCIPLINE (should 301)' },
  { path: '/technology.html', label: 'LEGACY .HTML' },
  { path: '/nonexistent-xyz', label: 'FAKE 404' },
];
for (const t of tests) {
  const r = await fetchUrl('https://ymbs.pro' + t.path);
  const body = r.body || '';
  const hasTitle = /<title[^>]*>[^<]/.test(body);
  const hasCanonical = /rel=["']canonical["']/.test(body);
  const hasH1 = /<h1[^>]*>[^<]/.test(body);
  const hasContent = body.length > 2000;
  const bodySnippet = body.slice(0, 500).replace(/\n/g, ' ');
  console.log(`\n=== ${t.label}: ${t.path} ===`);
  console.log(`Status: ${r.status}, Length: ${body.length}, Title: ${hasTitle}, Canonical: ${hasCanonical}, H1: ${hasH1}`);
  console.log(`First 500 chars: ${bodySnippet}`);
}
