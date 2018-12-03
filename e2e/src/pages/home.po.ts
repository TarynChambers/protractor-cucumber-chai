import {by, element} from 'protractor';

export class HomePage {

  clickDashboardLink() {
    return element(by.css('.dashboard-link')).click();
  }

}
