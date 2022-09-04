Feature: this feature is used to define the login page of the application

  Background: Open swag lab application
    Given I launch the swaglab application

  @Sanity
  Scenario Outline: positive login scenario
    When I enter user "<Username>" and "<Password>"  and click on loginpage
    Then I should be landed on the homepage with successful login message

    Examples: 
      | Username      | Password     |
      | standard_user | secret_sauce |

  @Sanity
  Scenario Outline: negative login scenario with incorrect values
    When I enter user "<Username>" and "<Password>"  and click on loginpage
    Then I should be landed on the homepage with unsuccessful login message as"Epic sadface: Username and password do not match any user in this service"

    Examples: 
      | Username       | Password | Message                                                                   |
      | sfnjd@mail.com | DG@!@2   | Epic sadface: Username and password do not match any user in this service |

  
