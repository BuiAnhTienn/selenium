const { Builder, Browser, until, By, Key } = require('selenium-webdriver');

const assert = require('assert');

(async function Exemple(){

    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try{
        // điều hướng tới trang web này
        await driver.get('https://staging-clinic.gpet.com.vn/Login')

        await driver.wait(until.elementLocated(By.id('normal_login_email')),5000)
        await driver.findElement(By.id('normal_login_email')).sendKeys('tientien123@gpet.vn')
        await driver.findElement(By.xpath('//*[@id="normal_login_password"]/input')).sendKeys('hongvien',Key.RETURN)
       await driver.sleep(5000)
 
        let todoText = await driver.findElement(By.xpath('//*[@id="root"]/div/div/div[2]/div/div/div/div/div/div[2]/div[2]/div/div[2]/div/div/div/div/div/div/div[1]/table/thead/tr/th[1]/p')).getText().then(function(value){
            return value;
        })
        assert.strictEqual(todoText,'Tên sản phẩm')
    }finally{
        await driver.quit()
    }
})();