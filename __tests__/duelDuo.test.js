const { Builder, Browser, By, until, Button } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});


describe("Draw btn display", () => {
  test("load player choices", async () => {
    await driver.get("http://localhost:8000");

    const drawBtn = await driver.findElement(By.id("draw"));
    await drawBtn.click();

    const element = await driver.findElement(By.id("choices"));
    await driver.wait(until.elementIsVisible(element), 1000);

    expect(await element.isDisplayed()).toBe(true);

  });
});


describe("add to duo btn display", () => {
  test("load player duo div", async () => {
    await driver.get("http://localhost:8000");

    const drawBtn = await driver.findElement(By.id("draw"));
    await drawBtn.click();

    const botBtn = await driver.findElement(By.xpath("//button[@id='bot-btn']"));
    for (let i = 0; i < 2; i++) {
      await botBtn[0].click()
    }

    const element = await driver.findElement(By.id('player-duo'));
    await driver.wait(until.elementIsVisible(element), 1000);
    
    expect(await element.isDisplayed()).toBe(true);
  });
});