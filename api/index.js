  export default async function handler(req, res) {
    const ua = (req.headers['user-agent'] || '').toLowerCase();
    const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim();

    const botUAs = [
      'facebookexternalhit', 'facebot', 'facebookbot',
      'adsbot', 'googlebot', 'bingbot', 'twitterbot',
      'linkedinbot', 'slackbot', 'whatsapp', 'telegrambot',
      'crawler', 'spider', 'headless', 'phantom', 'python',
      'curl', 'wget', 'java/', 'apache-httpclient'
    ];

    const metaIPs = [
      '66.220.', '69.63.', '69.171.', '173.252.',
      '31.13.', '157.240.', '179.60.', '204.15.'
    ];

    const isBot = botUAs.some(b => ua.includes(b));
    const isMeta = metaIPs.some(r => ip.startsWith(r));

    if (isBot || isMeta) {
      res.writeHead(302, { Location: 'https://grupojogadorcaro.com.br/quem-e-jota' });
      res.end();
      return;
      }                                                                                                                                                                                      
                                                                                                                                                                                         
    const url = 'https://go.aff.esportiva.bet/nvgf8026?campaign_id=29908'

    const shareCode = '&shareCode=EYPE0J3T467'
    
    const afp = '&afp4=bot'
    
    const source = '&utm_medium=telegram'

    const destino = new URL(url + shareCode + afp + source)

    const entrada = new URL(req.url, `https://${req.headers.host}`).searchParams;

    for (const [chave, valor] of entrada) {
      if (chave.startsWith('utm_') || chave === 'source_id' || chave === 'fbclid' || chave === 'gclid') {
        destino.searchParams.set(chave, valor);
      }
    }

    res.writeHead(302, { Location: destino.toString() });
    res.end();
  }
