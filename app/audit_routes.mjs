import https from 'https';

const BASE = 'https://ymbs.pro';
const routes = [
  '/', '/services', '/services/operations', '/services/technology', '/services/leadership',
  '/services/communications', '/insights', '/assessments/cyber-readiness', '/assessments/technology',
  '/assessments/seo', '/assessments/system-health', '/assessments/dashboard', '/assessments',
  '/solutions/organizational-growth', '/solutions/ai-adoption', '/solutions/technology-modernization',
  '/solutions/organizational-change', '/contact', '/policy', '/terms', '/a2p', '/accessibility',
  '/elevation', '/services/seo', '/portfolio', '/team', '/sitemap', '/suppliers', '/support',
  '/llm-knowledge', '/scale', '/scale/assessment', '/michelle-griffith', '/executive-readiness-intensive',
  '/law-firm-pr-system', '/nonprofit-consulting', '/professional-services', '/mission-driven-organizations',
  '/partners', '/law-firm-technology', '/fractional-coo', '/strategic-planning', '/mission-foundation',
  '/integrated-executive-advisory', '/company-profile', '/client-results', '/thania-clevenger',
  '/ashley-clevenger', '/nestor-ortiz', '/analytics-dashboard',
  '/case-studies/law-firm-intake-automation', '/case-studies/nonprofit-tech-consolidation',
  '/case-studies/law-firm-website-transformation', '/case-studies/nonprofit-governance-operations',
  '/case-studies/executive-readiness-stakeholder-comms', '/assessments/results',
  '/services/technology/ai-automation', '/services/technology/cybersecurity', '/services/technology/connectivity',
  '/services/technology/crm-workflow', '/services/technology/website-seo', '/services/technology/iot-physical-security',
  '/services/technology/digital-signage', '/services/technology/software-solutions', '/services/technology/mobility-workforce',
  '/services/communications/reputation-management', '/services/communications/executive-communications',
  '/services/operations/governance', '/services/leadership/community-engagement',
  '/operations', '/technology', '/communications', '/leadership', '/blog',
];

function fetchUrl(url) {
  return new Promise((resolve) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let body = '';
      res.on('data', (d) => body += d);
      res.on('end', () => {
        resolve({ status: res.statusCode, body, headers: res.headers });
      });
    });
    req.on('error', (e) => resolve({ status: 'ERR', error: e.message }));
    req.setTimeout(10000, () => { req.destroy(); resolve({ status: 'TIMEOUT' }); });
  });
}

for (const path of routes) {
  const url = BASE + path;
  const r = await fetchUrl(url);
  if (r.status === 'ERR' || r.status === 'TIMEOUT') {
    console.log(`${path.padEnd(55)} ${r.status}`);
    continue;
  }
  const body = r.body || '';
  const titleM = body.match(/<title[^>]*>(.*?)<\/title>/s);
  const title = titleM ? titleM[1].trim().slice(0, 50) : 'NO_TITLE';
  const canonM = body.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)/i);
  const canonical = canonM ? canonM[1].replace(BASE, '') : 'NONE';
  const robotsM = body.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)/i);
  const robots = robotsM ? robotsM[1] : 'NONE';
  const hasH1 = /<h1[^>]*>/i.test(body);
  const xrobots = r.headers['x-robots-tag'] || 'NONE';
  console.log(`${path.padEnd(55)} ${String(r.status).padEnd(4)} robots=${robots.padEnd(10)} xrobots=${String(xrobots).padEnd(10)} h1=${String(hasH1).padEnd(5)} len=${String(body.length).padStart(6)} canon=${canonical.padEnd(30)} title=${title}`);
}
