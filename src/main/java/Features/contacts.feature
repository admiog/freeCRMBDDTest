Feature: Free CRM Contacts Feature

  Scenario Outline: Free CRM Create New Contact Feature

    Given user is on home page
    When user enters "<username>" and "<password>"
    And user clicks on Login button
    Then user clicks on New Contacts link
    Then user enters new contact detail "<firstname>" and "<lastname>" and "<position>"
    Then user clicks on save
    Then user closes browser

    Examples:
    | username | password | firstname | lastname | position |
    | Learneasy | Learneasy | Tester1     | One   | Team Lead  |
    | Learneasy | Learneasy | Tester2     | Two   | Team member  |
    | Learneasy | Learneasy | Tester3     | Three   | Team member  |
