import {by, element} from 'protractor';

export class DashboardPage {

  getPageTitle() {
    return element(by.css('.page-title')).getText();
  }

}
