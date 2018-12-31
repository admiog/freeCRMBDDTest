Feature: Free CRM Login Feature

  # Without Examples Keyword
  Scenario: Free CRM Login Test Scenario

    Given User is already on login page
    When title of login page is Free CRM
    Then User enters "Learneasy" and "Learneasy"
    Then User clicks the login button
    And User is on home page
    Then close the browser

  # With Examples Keyword
  #Scenario Outline: Free CRM Login Test Scenario

    #Given User is already on login page
    #When title of login page is Free CRM
    #Then User enters "<username>" and "<password>"
    #Then User clicks the login button
    #And User is on home page
    #Then close the browser

    #Examples:
    #| username | password |
    #| Learneasy | Learneasy |
    #| tom | test123 |