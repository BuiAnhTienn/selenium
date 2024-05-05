const { Builder, Browser, until, By, Key } = require('selenium-webdriver');
const assert = require('assert');

(async function Exemple(){
    // khởi tạo đối tượng driver dựa vào Builder của webdriver , dùng chrome
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try{
        // điều hướng tới trang web này
        await driver.get('https://staging-clinic.gpet.com.vn/Login')
        // chờ cho cái id này được tìm thấy trong 4s
        await driver.wait(until.elementLocated(By.id('normal_login_email')),4000)

        await driver.findElement(By.id('normal_login_email')).sendKeys('tientien123@gpet.vn')
        await driver.findElement(By.xpath('//*[@id="normal_login_password"]/input')).sendKeys('hongvien',Key.RETURN)
        await driver.sleep(5000)
        let todotext = await driver.findElement(By.xpath('//*[@id="root"]/div/div/div[2]/div/div/div/div/div/div[2]/div[2]/div/div[2]/div/div/div/div/div/div/div[1]/table/thead/tr/th[1]/p')).getText().then(function(value){
            return value
        });

        assert.strictEqual(todotext,'Tên sản phẩm');
        // chờ cái thằng title đc tìm thấy trong 2s
        await driver.wait(until.titleIs('Phòng Của Tiến'),2000)
    }finally{
        await driver.quit()
    }
})();