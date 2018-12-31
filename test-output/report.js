$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "# Without Examples Keyword"
    },
    {
      "line": 4,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 6,
      "value": "#Given User is already on login page"
    },
    {
      "line": 7,
      "value": "#When title of login page is Free CRM"
    },
    {
      "line": 8,
      "value": "#Then User enters \"Learneasy\" and \"Learneasy\""
    },
    {
      "line": 9,
      "value": "#Then User clicks the login button"
    },
    {
      "line": 10,
      "value": "#And User is on home page"
    },
    {
      "line": 11,
      "value": "#Then close the browser"
    },
    {
      "line": 13,
      "value": "# With Examples Keyword"
    }
  ],
  "line": 14,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User clicks the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "Learneasy",
        "Learneasy"
      ],
      "line": 25,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "tom",
        "test123"
      ],
      "line": 26,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"Learneasy\" and \"Learneasy\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User clicks the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 5732941579,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 7534843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Learneasy",
      "offset": 13
    },
    {
      "val": "Learneasy",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enters_valid_username_and_password(String,String)"
});
formatter.result({
  "duration": 179156179,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 2961131124,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 3357895,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 765940338,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"tom\" and \"test123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User clicks the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 4772092347,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 6331062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 13
    },
    {
      "val": "test123",
      "offset": 23
    }
  ],
  "location": "LoginStepDefinition.user_enters_valid_username_and_password(String,String)"
});
formatter.result({
  "duration": 138606897,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 811984491,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 25484339,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[#1 Free CRM software in the cloud for sales and service]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.LoginStepDefinition.user_is_on_home_page(LoginStepDefinition.java:45)\r\n\tat ✽.And User is on home page(login.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});