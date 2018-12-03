Feature: Navigation on Home Page

  Scenario: test navigating to dashboard
    Given I'm on the home page
    When I click on the dashboard link
    Then I should navigate to the dashboard page
