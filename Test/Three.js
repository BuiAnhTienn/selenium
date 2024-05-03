const { Builder, Browser, until, By, Key } = require("selenium-webdriver");
const assert = require('assert');

var should = require('chai').should();


(async function Exemple(){
    let driver = await new Builder().forBrowser(Browser.CHROME).build();

    try{
        await driver.get('https://staging-clinic.gpet.com.vn/sell/goods');
        await driver.wait(until.elementLocated(By.id('normal_login_email')),3000)


        await driver.findElement(By.id('normal_login_email')).sendKeys('tientien123@gpet.vn')

        await driver.findElement(By.xpath('//*[@id="normal_login_password"]/input')).sendKeys('hongvien',Key.RETURN)

        await driver.wait(until.titleIs('Phòng Của Tiến'),3000)
        await driver.sleep(3000)
        let todoText = await driver.findElement(By.className('sc-cHPgQl beJFeL')).getText().then(function(value){
            return value;
        })
        // using assert
       // assert.strictEqual(todoText,'Tên sản phẩm')
        
        // using assert chaijs should
        
        todoText.should.equal('Tên sản phẩm')
    }finally{
        await driver.quit()
    }
})();