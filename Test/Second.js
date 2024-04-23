const { Builder, Browser, until, By, Key } = require('selenium-webdriver');


(async function exemple(){
    let driver = await new Builder().forBrowser(Browser.CHROME).build()

    try{
        await driver.get('https://staging-clinic.gpet.com.vn/Login')

        await driver.wait(until.elementLocated(By.id('normal_login_email')),4000)

        await driver.findElement(By.id('normal_login_email')).sendKeys('tien@gmail.com')
        await driver.sleep(2000)
        await driver.findElement(By.xpath('//*[@id="normal_login_password"]/input')).sendKeys('123456',Key.RETURN)

        await driver.wait(until.titleIs('Phòng Mới Cho Tiến Test'),4000)
    }finally{
        await driver.quit()
    }
})();