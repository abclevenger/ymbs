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
const r = await fetchUrl('https://ymbs.pro/');
console.log('STATUS:', r.status);
console.log('HEADERS:', JSON.stringify(r.headers, null, 2));
console.log('--- HEAD SECTION (first 3000 chars) ---');
const head = r.body.slice(0, 3000);
console.log(head);
