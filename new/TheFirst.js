const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('https://staging-clinic.gpet.com.vn/Login');

    // Đợi cho đến khi phần tử được tìm thấy trong 10 giây
    await driver.wait(until.elementLocated(By.id('normal_login_email')), 10000);

    // Sau khi phần tử được tìm thấy, thực hiện hành động sendKeys
    await driver.findElement(By.id('normal_login_email'))
                .sendKeys('tientien123@gpet.vn');
    await driver.findElement(By.xpath('//*[@id="normal_login_password"]/input'))
                .sendKeys('hongvien',Key.RETURN);

    // Đợi 3 giây trước khi kết thúc quá trình
    await driver.sleep(5000)
  } finally {
    await driver.quit();
  }
})();