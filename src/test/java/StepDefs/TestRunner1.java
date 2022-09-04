package StepDefs;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions (

plugin= {"html:target/html-cucumber", "json:target/cucumber.json"},

features="src/test/java/features" ,

tags = {"@Sanity"} ,          	//cmd to run specific tags from command line : mvn test -Dcucumber.options="--tags @Sanity"


glue= {"StepDefs"}                         

)

public class TestRunner1 {
	
	

}
