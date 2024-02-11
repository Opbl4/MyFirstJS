Feature('TZ');

Scenario('test something', async ({ I }) => {
I.amOnPage('/')
I.seeElement('//html/body/div[1]/div/article/div[2]/form/div/div[3]/div/div[2]')
let price = await I.grabTextFrom('//html/body/div[1]/div/article/div[2]/form/div/div[3]/div/div[2]/p/strong')
I.click('//html/body/div[1]/div/article/div[2]/form/div/div[3]/div/div[3]/div')
I.fillField('Введите имя домена','Opbl4.ru')
I.wait(2)
let domain_price = await I.grabTextFrom('//html/body/div/div[3]/div[1]/div/div[2]/div[4]/div/div/div/div/div[2]/div[2]/div/div/div/div[1]/div/div[2]/div/div/span/span/b')
I.click('//html/body/div/div[3]/div[1]/div/div[2]/div[4]/div/div/div/div/div[2]/div[2]/div/div/div/div[1]')
I.wait(1)
let total_price = await I.grabTextFrom('//html/body/div/div[3]/div[2]/div/div/div[2]/div/div/div/div[1]/div/div/span[2]/span[1]')
price = parseInt(price.replace(/\D/g,''),10);
domain_price = parseInt(domain_price.replace(/\D/g,''),10);
total_price = parseInt(total_price.replace(/\D/g,''),10);
let addition_price = price + domain_price
let assert = require('assert');
  assert.equal(addition_price, total_price );


});

