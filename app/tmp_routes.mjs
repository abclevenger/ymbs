import fs from 'fs';

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
  // Legacy/redirect candidates
  '/operations', '/technology', '/communications', '/leadership', '/blog',
  // 404 candidates
  '/nonexistent-test-page', '/welcome-room', '/cybersecurity-services', '/a2p-tos',
  '/book/service-discovery', '/ymbs-demo', '/home-page-9693', '/terms-of-use',
  '/financial-oversight', '/home', '/index', '/preview/',
  // Legacy .html
  '/technology/digital-signage-menu-boards.html', '/technology/iot-physical-security.html',
  '/technology/ai-communications.html', '/technology/online-reputation-management.html',
  '/technology-services/technology-assessment.html', '/technology/software-solutions.html',
  '/technology/mobility-workforce.html', '/technology/digital-growth.html', '/enterprise-connectivity.html',
  '/comprehensive-technology-audit-services.html', '/leadership/community-research-engagement.html',
  '/mission-foundation/board-governance-framework.html', '/mission-foundation/',
  '/nonprofit-strategy-development-vs-traditional-business-models.html',
  '/unlock-nonprofit-success-strategic-development.html',
  '/empowering-nonprofits-florida-ymbs-consulting-insights.html',
  '/blog/some-slug',
  // GSC-suspicious URLs
  '/leadership/michelle-griffith.html', '/technology-services/cybersecurity-risk-cleanup.html',
  '/leadership/strategic-planning-alignment.html', '/smb-cybersecurity-playbook.html',
  '/technology-services/reporting-visibility.html', '/technology/cybersecurity-risk.html',
  '/mission-foundation/strategic-alignment-framework.html', '/legal-software/mycase.html',
  '/leadership/ashley-clevenger.html', '/elevating-public-voice.html', '/affiliate-program.html',
  '/strengthening-organizational-governance.html', '/technology.html',
];

const results = [];
const BATCH = 8;
for (let i = 0; i < routes.length; i += BATCH) {
  const batch = routes.slice(i, i + BATCH);
  const settled = await Promise.all(batch.map(async (r) => {
    const u = BASE + r;
    try {
      const res = await fetch(u, { redirect: 'manual' });
      let loc = res.headers.get('location') || '';
      let robots = '';
      let title = '';
      let canonical = '';
      if (res.status >= 300 && res.status < 400) {
        // don't read body for redirects
      } else {
        try {
          const html = await res.text();
          const rm = html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i);
          if (rm) robots = rm[1];
          const tm = html.match(/<title>([^<]*)<\/title>/i);
          if (tm) title = tm[1].trim().slice(0, 60);
          const cm = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
          if (cm) canonical = cm[1];
        } catch {}
      }
      return { route: r, status: res.status, location: loc, robots, title, canonical };
    } catch (e) {
      return { route: r, status: 'ERR', error: String(e).slice(0, 80) };
    }
  }));
  for (const r of settled) {
    results.push(r);
    const flag = (r.status !== 200 && r.status !== 301 && r.status !== 302) || r.robots || (r.location && r.route !== r.location.replace(BASE, ''));
    if (flag) console.log(JSON.stringify(r));
  }
}

console.log('\n=== SUMMARY ===');
console.log('Total tested:', results.length);
const byStatus = {};
for (const r of results) { byStatus[r.status] = (byStatus[r.status]||0)+1; }
console.log('By status:', byStatus);
const redirects = results.filter(r => r.status === 301 || r.status === 302);
console.log('Redirects:', redirects.length);
for (const r of redirects) console.log('  ', r.route, '->', r.location);
const noindex = results.filter(r => r.robots && r.robots.includes('noindex'));
console.log('noindex:', noindex.length, noindex.map(r => r.route));
const not200 = results.filter(r => r.status !== 200 && r.status !== 301 && r.status !== 302);
console.log('Other statuses:', not200.map(r => r.route + ' (' + r.status + ')'));
fs.writeFileSync('app/route_audit.json', JSON.stringify(results, null, 2));
