import fs from 'fs';

const xml = fs.readFileSync('public/sitemap.xml', 'utf8');
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim());
console.log('Sitemap URL count:', urls.length);

const results = [];
const BATCH = 8;
for (let i = 0; i < urls.length; i += BATCH) {
  const batch = urls.slice(i, i + BATCH);
  const settled = await Promise.all(batch.map(async (u) => {
    try {
      const res = await fetch(u, { redirect: 'follow' });
      let robots = '';
      try {
        const html = await res.text();
        const m = html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i);
        if (m) robots = m[1];
      } catch {}
      return { url: u, status: res.status, finalUrl: res.url, robots };
    } catch (e) {
      return { url: u, status: 'ERR', error: String(e).slice(0, 80) };
    }
  }));
  for (const r of settled) {
    results.push(r);
    if (r.status !== 200 || r.robots) console.log(r.status, r.robots || '', r.url, r.finalUrl !== r.url ? '-> ' + r.finalUrl : '');
  }
}

const bad = results.filter(r => r.status !== 200);
const noindex = results.filter(r => r.robots && r.robots.includes('noindex'));
console.log('\n=== SUMMARY ===');
console.log('Total:', results.length);
console.log('Non-200:', bad.length, bad.map(r => r.url + ' (' + r.status + ')'));
console.log('noindex:', noindex.length, noindex.map(r => r.url));
fs.writeFileSync('app/sitemap_audit.json', JSON.stringify(results, null, 2));
