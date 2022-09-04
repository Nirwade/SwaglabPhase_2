package StepDefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SwagProduct {
	
	WebDriver driver = BaseClass.driver;
	

	
	
	@When("I land on product page")
	public void i_land_on_product_page() { 
		
		
		String ExpTitle = "PRODUCTS";
		WebElement ProdTitle = driver.findElement(By.xpath("//span[@Class='title']"));
		String Acul= ProdTitle.getText();
		
		Assert.assertEquals(ExpTitle, Acul);
		
		System.out.println("lands on product page");
		

	 
		 
		 
	}	    
		               // product xpath: //div[@class='inventory_item_name']

		


	@Then("I validate its price values along with product name")
	public void i_validate_its_price_values_along_with_product_name(io.cucumber.datatable.DataTable dataTable) {
		
		
		//div[text()='Sauce Labs Backpack']/following::div[@class='inventory_item_price'][1]"
		
	   
	   WebElement Prduct = driver.findElement(By.xpath("//div[@class='inventory_item_name']"));
		String ActualMsg = Prduct.getText();  
		
		WebElement price = driver.findElement(By.xpath("//div[@class='inventory_item_price'][1]  "));
		    String ActulMgs = (price.getText());
	   
	   int row = dataTable.height();
	   for (int i=0; i<row; i++) {
		   
		   String product = (dataTable.cell(i, 0));
		   String price1 = (dataTable.cell(i, 1));
		   
		   
		   Assert.assertEquals(ActualMsg, product);
		   Assert.assertEquals(price1, ActulMgs);
		   
		   System.out.println("verified the price and product values");
	   }
	   
	    
	  
	    
	}

	
		
			
		
	}




