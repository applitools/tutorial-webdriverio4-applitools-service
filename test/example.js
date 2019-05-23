'use strict';

describe('Test app', () => {

  beforeEach(() => {
    browser.url('https://demo.applitools.com');
  });

  it('First test', () => {
    browser.eyesCheckWindow('Login Window test');
  });

});
