import https from 'https';

const urls = [
  '/technology/digital-signage-menu-boards.html',
  '/technology/iot-physical-security.html',
  '/technology/ai-communications.html',
  '/technology/online-reputation-management.html',
  '/technology/software-solutions.html',
  '/technology/mobility-workforce.html',
  '/technology/digital-growth.html',
  '/technology-services/technology-assessment.html',
  '/enterprise-connectivity.html',
  '/comprehensive-technology-audit-services.html',
  '/leadership/community-research-engagement.html',
  '/mission-foundation/board-governance-framework.html',
  '/mission-foundation/',
  '/nonprofit-strategy-development-vs-traditional-business-models.html',
  '/unlock-nonprofit-success-strategic-development.html',
  '/empowering-nonprofits-florida-ymbs-consulting-insights.html',
  '/blog',
  '/blog/some-slug',
  '/operations',
  '/technology',
  '/communications',
  '/leadership',
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
  '/home.html',
  '/services/',
  '/services/operations/',
];

function fetchHead(path) {
  return new Promise((resolve) => {
    const req = https.request({ hostname: 'ymbs.pro', path, method: 'GET', headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let body = '';
      res.on('data', (d) => { body += d; if (body.length > 2000) res.destroy(); });
      res.on('end', () => {
        resolve({ status: res.statusCode, location: res.headers.location, xrobots: res.headers['x-robots-tag'] });
      });
    });
    req.on('error', (e) => resolve({ error: e.message }));
    req.setTimeout(8000, () => { req.destroy(); resolve({ error: 'timeout' }); });
    req.end();
  });
}

async function main() {
  for (const u of urls) {
    const r = await fetchHead(u);
    console.log(`${u}\t=>\t${r.status || r.error}\t${r.location||''}\t${r.xrobots||''}`);
  }
}
main();

