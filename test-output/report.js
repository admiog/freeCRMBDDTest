$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/bolas/IdeaProjects/freeCRMBDDTest/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "# Without Examples Keyword"
    }
  ],
  "line": 4,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"Learneasy\" and \"Learneasy\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 8590455439,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 6421875,
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
  "duration": 161815921,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 4840706151,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 6560449,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 680156372,
  "status": "passed"
});
});