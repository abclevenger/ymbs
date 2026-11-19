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
const r = await fetchUrl('https://ymbs.pro/sitemap.xml');
console.log('STATUS:', r.status);
const urls = (r.body.match(/<loc>(.*?)<\/loc>/g) || []).map(s => s.replace(/<\/?loc>/g, ''));
console.log('URL COUNT:', urls.length);
urls.forEach(u => console.log(u));
