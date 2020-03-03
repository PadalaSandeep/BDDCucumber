package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="D:\\Automation\\BDDCucumber\\scenario.feature",
		glue= {"stepDefination"},
		plugin = {"html:reports/HTML1" ,"json:reports/report.jason ", "pretty:reports/report.pretty"},
		monochrome = true
		)
public class Runner {

}
