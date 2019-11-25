module.exports = {
    "Can you sign up?": (browser) => {
        browser
         .url('http://localhost:3000/')
         .waitForElementVisible("body", 1000)
         .click('#login')
         .waitForElementVisible("body", 1000)
         .setValue('input[name=email]', 'angel@rellet.io')
         .setValue('input[name=password]', '123456')
         .click('button')
         .click('#me')
         .assert.elementPresent("#placeholder-msg")
         .assert.urlEquals("http://localhost:3000/home")
    } 
 }