const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('https://arqit.eead.cl', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));
  
  // 1. Hero
  await page.screenshot({ path: '/home/nikka/Proyectos/franco-portfolio/public/img/projects/arqit-1.png' });
  
  // 2. Middle section (scroll down)
  await page.evaluate(() => window.scrollBy(0, 1000));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: '/home/nikka/Proyectos/franco-portfolio/public/img/projects/arqit-2.png' });
  
  // 3. Lower section
  await page.evaluate(() => window.scrollBy(0, 1000));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: '/home/nikka/Proyectos/franco-portfolio/public/img/projects/arqit-3.png' });

  // 4. Portfolio section
  await page.evaluate(() => window.scrollBy(0, 1000));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: '/home/nikka/Proyectos/franco-portfolio/public/img/projects/arqit-4.png' });
  
  await browser.close();
  console.log('Screenshots taken successfully');
})();
