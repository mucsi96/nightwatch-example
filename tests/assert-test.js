module.exports = {
  'assert.ok' : function (browser) {
    browser.assert.ok(false);
    browser.end();
  },
  'verify.ok' : function (browser) {
    browser.verify.ok(false)
    browser.end();
  },
  'expect.element': function (browser) {
    browser
      .url('http://google.com')
      .setValue('input[name="q"]', '1')
      .setValue('input[name="q"]', '2')
      .setValue('input[name="q"]', '3')
      .setValue('input[name="q"]', '4')
      .setValue('input[name="q"]', '5')
      .setValue('input[name="q"]', '6')
      .setValue('input[name="q"]', '7')
      .setValue('input[name="q"]', '8')
      .setValue('input[name="q"]', '9')
      .setValue('input[name="q"]', '10')
      .setValue('input[name="q"]', '11')
      .setValue('input[name="q"]', '12');

    browser.expect.element('input[name="q"]').text.to.equal('some text');
    
    browser.end();
  }
};
  