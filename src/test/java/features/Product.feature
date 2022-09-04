Feature: this feature is used to define the login page of the application


  Background: Open Swaglab application
    Given I launch the swaglab application
    When I enter user "standard_user" and "secret_sauce"  and click on loginpage
    Then I should be landed on the homepage with successful login message

@Sanity
  Scenario: validating the product feature using name and its price
    Given I land on product page
    When I validate its price values along with product name
      | Sauce Labs Backpack | $29.99 |
   
      
      
