$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Automation/BDDCucumber/scenario.feature");
formatter.feature({
  "name": "Login Action",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_is_on_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters UserName and Password",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_UserName_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.message_displayed_Login_Successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful Login with Valid Credentials1",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on Home Page1",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_is_on_Home_Page(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigate to LogIn Page1",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_Navigate_to_LogIn_Page(Integer)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [false] but found [true]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:496)\r\n\tat org.testng.Assert.assertEquals(Assert.java:125)\r\n\tat org.testng.Assert.assertEquals(Assert.java:288)\r\n\tat org.testng.Assert.assertEquals(Assert.java:298)\r\n\tat stepDefination.Steps.user_Navigate_to_LogIn_Page(Steps.java:47)\r\n\tat ✽.User Navigate to LogIn Page1(D:/Automation/BDDCucumber/scenario.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enters UserName and Password1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_UserName_and_Password(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Message displayed Login Successfully1",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.message_displayed_Login_Successfully(Integer)"
});
formatter.result({
  "status": "skipped"
});
});