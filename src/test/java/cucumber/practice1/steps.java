package cucumber.practice1;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class steps {

	@Given("^print one$")

	public void print_one()

	{
		System.out.println("One");
	}

	@Then("^print two$")
	public void print_two()

	{
		System.out.println("two");
	}

	/*@Then("^print three$")
	public void print_three()

	{
		System.out.println("three");
	}

	@And("^print four$")

	public void print_four()

	{
		System.out.println("four");
	}*/

}
