module.exports = {
    "Can you sign up?": (browser) => {
        browser
         .url('http://localhost:3000/')
         .waitForElementVisible("body", 1000)
         .click('#signup')
         .waitForElementVisible("body", 1000)
         .setValue('input[name=firstName]', 'Luis Angel')
         .setValue('input[name=lastName]', 'Ortega')
         .setValue('input[name=email]', 'angel@rellet.io')
         .setValue('input[name=password]', '123456')
         .setValue('input[name=passwordConfirm]', '123456')
         .click('button')
         .waitForElementVisible("body", 1000)
         .assert.containsText('#welcome','Welcome back!')
         .assert.urlEquals("http://localhost:3000/login")
    } 
 }