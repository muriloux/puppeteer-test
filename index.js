const puppeteer = require("puppeteer-core");

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", // Path to Chromium
    args: ["--no-sandbox"], // Necessary for running in a sandboxed environment
  });
  const page = await browser.newPage();

  await page.goto("https://google.com");
  const pageTitle = await page.title();

  console.log("Page title: ", pageTitle);

  await browser.close();
})();
