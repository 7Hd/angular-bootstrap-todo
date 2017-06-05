import { browser, by, element } from 'protractor';

export class TodoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('td-root h1')).getText();
  }
}
