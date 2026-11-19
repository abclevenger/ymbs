import https from 'https';
const BASE = 'https://ymbs.pro';
const routes = [
  '/', '/services', '/services/operations', '/services/technology', '/services/leadership',
  '/services/communications', '/insights', '/assessments', '/contact', '/team', '/scale',
  '/scale/assessment', '/michelle-griffith', '/nonprofit-consulting', '/law-firm-technology',
  '/fractional-coo', '/strategic-planning', '/mission-foundation', '/integrated-executive-advisory',
  '/company-profile', '/client-results', '/thania-clevenger', '/ashley-clevenger', '/nestor-ortiz',
  '/partners', '/professional-services', '/mission-driven-organizations',
  '/solutions/organizational-growth', '/solutions/ai-adoption', '/solutions/technology-modernization',
  '/solutions/organizational-change',
  '/case-studies/law-firm-intake-automation', '/case-studies/nonprofit-tech-consolidation',
  '/case-studies/law-firm-website-transformation', '/case-studies/nonprofit-governance-operations',
  '/case-studies/executive-readiness-stakeholder-comms',
  '/services/technology/ai-automation', '/services/technology/cybersecurity', '/services/technology/connectivity',
  '/services/technology/crm-workflow', '/services/technology/website-seo', '/services/technology/iot-physical-security',
  '/services/technology/digital-signage', '/services/technology/software-solutions', '/services/technology/mobility-workforce',
  '/services/communications/reputation-management', '/services/communications/executive-communications',
  '/services/operations/governance', '/services/leadership/community-engagement',
  '/assessments/cyber-readiness', '/assessments/technology', '/assessments/seo', '/assessments/system-health',
  '/executive-readiness-intensive', '/law-firm-pr-system', '/elevation', '/services/seo',
  '/portfolio', '/llm-knowledge', '/support', '/suppliers', '/policy', '/terms', '/a2p', '/accessibility', '/sitemap',
];
function fetchUrl(url) {
  return new Promise((resolve) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let body = '';
      res.on('data', (d) => body += d);
      res.on('end', () => resolve({ status: res.statusCode, body }));
    });
    req.on('error', () => resolve({ status: 'ERR', body: '' }));
    req.setTimeout(10000, () => { req.destroy(); resolve({ status: 'TIMEOUT', body: '' }); });
  });
}
for (const path of routes) {
  const r = await fetchUrl(BASE + path);
  if (r.status !== 200) { console.log(`${path.padEnd(55)} ${r.status}`); continue; }
  const body = r.body || '';
  const titleM = body.match(/<title[^>]*>(.*?)<\/title>/s);
  const title = titleM ? titleM[1].trim() : 'NO_TITLE';
  const descM = body.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)/i);
  const desc = descM ? descM[1].trim().slice(0, 60) : 'NO_DESC';
  const h1M = body.match(/<h1[^>]*>(.*?)<\/h1>/s);
  const h1 = h1M ? h1M[1].replace(/<[^>]+>/g, '').trim().slice(0, 50) : 'NO_H1';
  console.log(`${path.padEnd(55)} title=${title.slice(0, 60)}`);
  console.log(`${''.padEnd(55)} desc=${desc}`);
  console.log(`${''.padEnd(55)} h1=${h1}`);
}
