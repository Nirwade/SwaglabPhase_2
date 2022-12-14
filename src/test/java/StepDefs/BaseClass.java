package StepDefs;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class BaseClass {
	
	public static WebDriver driver;
	
	@Before
	public void SetUp() {
		
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");

		System.setProperty("webdriver.gecko.driver", "geckodriver.exe");		
		driver = new ChromeDriver();
		
		 driver.manage().window().maximize();
		 driver.manage().timeouts().implicitlyWait(4000,TimeUnit.MILLISECONDS);
	}

	@After
	public void TearDown() {
		
		driver.close();
	}
}
