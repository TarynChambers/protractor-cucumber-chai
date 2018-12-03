import {Given, Then, When} from 'cucumber';
import {browser} from 'protractor';
import {HomePage} from '../../pages/home.po';
import {DashboardPage} from '../../pages/dashboard.po';
const chai = require('chai');
const expect = chai.expect;
const homePage: HomePage = new HomePage();
const dashboardPage: DashboardPage = new DashboardPage();

Given('I\'m on the home page', async () => {
  await browser.get('/');
});

When('I click on the dashboard link', async () => {
  await homePage.clickDashboardLink();
    });

Then('I should navigate to the dashboard page', async () => {
  await expect(await dashboardPage.getPageTitle()).to.equal('Welcome to the Dashboard');
});
