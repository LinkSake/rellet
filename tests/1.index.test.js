module.exports = {
   "Does it render the index ok?": (browser) => {
       browser
        .url('http://localhost:3000/')
        .waitForElementVisible("body", 1000)
        .assert.elementPresent('#signup')
        .assert.elementPresent('#login')
   } 
}