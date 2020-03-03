package stepDefination;

import org.testng.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps {
	
	
	@Given("User is on Home Page")
	public void user_is_on_Home_Page() {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("User is on homePage");
	}
	
	@When("User Navigate to LogIn Page")
	public void user_Navigate_to_LogIn_Page() {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("User Navigate to LogIn Page");
	}

	@When("User enters UserName and Password")
	public void user_enters_UserName_and_Password() {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("User enters UserName and Password");
	}

	@Then("Message displayed Login Successfully")
	public void message_displayed_Login_Successfully() {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Message displayed Login Successfully");
	}
	

@Given("User is on Home Page{int}")
public void user_is_on_Home_Page(Integer int1) {
    // Write code here that turns the phrase above into concrete actions
    System.out.println("In feature 1");
}

@When("User Navigate to LogIn Page{int}")
public void user_Navigate_to_LogIn_Page(Integer int1) {
    // Write code here that turns the phrase above into concrete actions
	Assert.assertEquals(true, false);
}

@When("User enters UserName and Password{int}")
public void user_enters_UserName_and_Password(Integer int1) {
    // Write code here that turns the phrase above into concrete actions
	System.out.println("In feature 1");
}

@Then("Message displayed Login Successfully{int}")
public void message_displayed_Login_Successfully(Integer int1) {
    // Write code here that turns the phrase above into concrete actions
	System.out.println("In feature 1");
}

}
