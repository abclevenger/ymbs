const urls = [
  '/', '/services', '/services/operations', '/services/technology', '/services/leadership',
  '/services/communications', '/insights', '/assessments', '/assessments/cyber-readiness',
  '/assessments/technology', '/assessments/seo', '/assessments/system-health',
  '/assessments/dashboard', '/solutions/organizational-growth', '/solutions/ai-adoption',
  '/solutions/technology-modernization', '/solutions/organizational-change', '/contact',
  '/policy', '/terms', '/a2p', '/accessibility', '/elevation', '/services/seo', '/portfolio',
  '/team', '/sitemap', '/suppliers', '/support', '/llm-knowledge', '/scale', '/scale/assessment',
  '/michelle-griffith', '/executive-readiness-intensive', '/law-firm-pr-system',
  '/nonprofit-consulting', '/professional-services', '/mission-driven-organizations',
  '/partners', '/law-firm-technology', '/fractional-coo', '/strategic-planning',
  '/mission-foundation', '/integrated-executive-advisory', '/company-profile',
  '/client-results', '/thania-clevenger', '/ashley-clevenger', '/nestor-ortiz',
  '/analytics-dashboard', '/case-studies/law-firm-intake-automation',
  '/case-studies/nonprofit-tech-consolidation', '/case-studies/law-firm-website-transformation',
  '/case-studies/nonprofit-governance-operations', '/case-studies/executive-readiness-stakeholder-comms',
  '/services/technology/ai-automation', '/services/technology/cybersecurity',
  '/services/technology/connectivity', '/services/technology/crm-workflow',
  '/services/technology/website-seo', '/services/technology/iot-physical-security',
  '/services/technology/digital-signage', '/services/technology/software-solutions',
  '/services/technology/mobility-workforce', '/services/communications/reputation-management',
  '/services/communications/executive-communications', '/services/operations/governance',
  '/services/leadership/community-engagement',
  '/operations', '/technology', '/communications', '/leadership', '/blog',
  '/technology/digital-signage-menu-boards.html', '/technology/iot-physical-security.html',
  '/technology/ai-communications.html', '/technology/online-reputation-management.html',
  '/technology/software-solutions.html', '/technology/mobility-workforce.html',
  '/technology/digital-growth.html', '/technology-services/technology-assessment.html',
  '/enterprise-connectivity.html', '/comprehensive-technology-audit-services.html',
  '/leadership/community-research-engagement.html',
  '/mission-foundation/board-governance-framework.html', '/mission-foundation/',
  '/nonprofit-strategy-development-vs-traditional-business-models.html',
  '/unlock-nonprofit-success-strategic-development.html',
  '/empowering-nonprofits-florida-ymbs-consulting-insights.html',
  '/leadership/michelle-griffith.html', '/technology-services/cybersecurity-risk-cleanup.html',
  '/leadership/strategic-planning-alignment.html', '/smb-cybersecurity-playbook.html',
  '/technology-services/reporting-visibility.html', '/technology/cybersecurity-risk.html',
  '/mission-foundation/strategic-alignment-framework.html', '/legal-software/mycase.html',
  '/leadership/ashley-clevenger.html', '/elevating-public-voice.html',
  '/affiliate-program.html', '/strengthening-organizational-governance.html',
  '/technology.html', '/preview/', '/welcome-room', '/cybersecurity-services',
  '/a2p-tos', '/book/service-discovery', '/ymbs-demo', '/home-page-9693',
  '/terms-of-use', '/financial-oversight', '/home', '/home/', '/index',
  '/index.html', '/home.html',
];

async function check(url) {
  try {
    const res = await fetch('https://ymbs.pro' + url, { redirect: 'manual' });
    const status = res.status;
    const location = res.headers.get('location');
    const ct = res.headers.get('content-type') || '';
    const xrobots = res.headers.get('x-robots-tag') || '';
    let body = '';
    if (status === 200 && ct.includes('text/html')) {
      body = await res.text();
    }
    let title = '', robots = '', canonical = '', desc = '';
    const tm = body.match(/<title>([^<]*)<\/title>/i);
    if (tm) title = tm[1].trim();
    const rm = body.match(/<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i);
    if (rm) robots = rm[1].trim();
    const cm = body.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
    if (cm) canonical = cm[1].trim();
    const dm = body.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
    if (dm) desc = dm[1].trim().slice(0, 80);
    return { url, status, location, xrobots, title, robots, canonical, desc, bodyLen: body.length };
  } catch (e) {
    return { url, error: e.message };
  }
}

(async () => {
  const results = [];
  for (let i = 0; i < urls.length; i += 8) {
    const batch = urls.slice(i, i + 8);
    const r = await Promise.all(batch.map(check));
    results.push(...r);
  }
  console.log(JSON.stringify(results, null, 2));
})();
