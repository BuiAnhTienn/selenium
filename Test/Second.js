const { Builder, Browser, until, By, Key } = require('selenium-webdriver');
(async function Exemple(){
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try{
        await driver.get('https://staging-clinic.gpet.com.vn/Login')

        await driver.wait(until.elementLocated(By.id('normal_login_email')),4000)

        await driver.findElement(By.id('normal_login_email')).sendKeys('tientien123@gpet.vn')
        await driver.findElement(By.xpath('//*[@id="normal_login_password"]/input')).sendKeys('hongvien',Key.RETURN)

        await driver.wait(until.titleIs('Phòng Của Tiến'),2000)
    }finally{
        await driver.quit()
    }
})();