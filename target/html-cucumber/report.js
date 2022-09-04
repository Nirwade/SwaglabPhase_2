$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Product.feature");
formatter.feature({
  "name": "this feature is used to define the login page of the application",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Open Swaglab application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launch the swaglab application",
  "keyword": "Given "
});
formatter.match({
  "location": "SwagLogin.i_launch_the_swaglab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user \"standard_user\" and \"secret_sauce\"  and click on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "SwagLogin.i_enter_user_and_and_click_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the homepage with successful login message",
  "keyword": "Then "
});
formatter.match({
  "location": "SwagLogin.i_should_be_landed_on_the_homepage_with_successful_login_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validating the product feature using name and its price",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I land on product page",
  "keyword": "Given "
});
formatter.match({
  "location": "SwagProduct.i_land_on_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate its price values along with product name",
  "rows": [
    {
      "cells": [
        "Sauce Labs Backpack",
        "$29.99"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "SwagProduct.i_validate_its_price_values_along_with_product_name(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/swaglogin.feature");
formatter.feature({
  "name": "this feature is used to define the login page of the application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "positive login scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter user \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"  and click on loginpage",
  "keyword": "When "
});
formatter.step({
  "name": "I should be landed on the homepage with successful login message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "Open swag lab application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launch the swaglab application",
  "keyword": "Given "
});
formatter.match({
  "location": "SwagLogin.i_launch_the_swaglab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "positive login scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter user \"standard_user\" and \"secret_sauce\"  and click on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "SwagLogin.i_enter_user_and_and_click_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the homepage with successful login message",
  "keyword": "Then "
});
formatter.match({
  "location": "SwagLogin.i_should_be_landed_on_the_homepage_with_successful_login_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "negative login scenario with incorrect values",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter user \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"  and click on loginpage",
  "keyword": "When "
});
formatter.step({
  "name": "I should be landed on the homepage with unsuccessful login message as\"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Message"
      ]
    },
    {
      "cells": [
        "sfnjd@mail.com",
        "DG@!@2",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.background({
  "name": "Open swag lab application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launch the swaglab application",
  "keyword": "Given "
});
formatter.match({
  "location": "SwagLogin.i_launch_the_swaglab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "negative login scenario with incorrect values",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter user \"sfnjd@mail.com\" and \"DG@!@2\"  and click on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "SwagLogin.i_enter_user_and_and_click_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the homepage with unsuccessful login message as\"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SwagLogin.i_should_be_landed_on_the_homepage_with_unsuccessful_login_message_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});