package StepDefs;

import java.util.Map;
import java.util.Set;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SwagLogin {
	
	WebDriver driver = BaseClass.driver;
	
	
	
	@Given("I launch the swaglab application")
	public void i_launch_the_swaglab_application() throws InterruptedException {
		
		driver.get("https://www.saucedemo.com/");
		Thread.sleep(400);
	    
	}

	@When("I enter user {string} and {string}  and click on loginpage")
	public void i_enter_user_and_and_click_on_loginpage(String Username, String Password) {
	
		WebElement username = driver.findElement(By.id("user-name"));
		
		username.sendKeys(Username);
		
      WebElement password = driver.findElement(By.name("password"));
		
       password.sendKeys(Password);
	   
	}

	@Then("I should be landed on the homepage with successful login message")
	public void i_should_be_landed_on_the_homepage_with_successful_login_message() {
		
		WebElement loginlink = driver.findElement(By.id("login-button"));
		
		loginlink.click();
	}

	@Then("I should be landed on the homepage with unsuccessful login message as{string}")
	public void i_should_be_landed_on_the_homepage_with_unsuccessful_login_message_as(String ExpectedMgs ) {
		
        WebElement loginlink = driver.findElement(By.id("login-button"));
		
		loginlink.click();
		
		WebElement ErrorMgs = driver.findElement(By.xpath(" //h3 [@data-test=\"error\"]  "));
		
		String ActualMgs= ErrorMgs.getText();
		
		Assert.assertEquals(ExpectedMgs, ActualMgs);
	   
	}



}
