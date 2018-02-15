package cucumber.practice1;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(

      features="src/test/java/cucumber/practice1/first.feature",

      format={"pretty","html:target/Reports"}

      )

public class RunnerClass {

}