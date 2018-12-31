package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.junit.Assert.*;

public class LoginStepDefinition {

    WebDriver driver;

    @Given("^User is already on login page$")
    public void user_is_already_on_login_page() {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\bolas\\Downloads\\" +
                "chromedriver_win32\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://www.freecrm.com/index.html");
    }

    @When("^title of login page is Free CRM$")
    public void title_of_login_page_is_Free_CRM() {
        String title = driver.getTitle();
        System.out.println(title);
        assertEquals("Title mismatch", "#1 Free CRM software in the cloud for sales and service", title);
    }

    @Then("^User enters \"(.*)\" and \"(.*)\"$")
    public void user_enters_valid_username_and_password(String username, String password) {
        driver.findElement(By.name("username")).sendKeys(username);
        driver.findElement(By.name("password")).sendKeys(password);
    }

    @Then("^User clicks the login button$")
    public void user_clicks_the_login_button() {
        driver.findElement(By.xpath("//input[@type='submit']")).submit();
    }

    @Then("^User is on home page$")
    public void user_is_on_home_page() {
        String homepageTitle = driver.getTitle();
        assertEquals("CRMPRO", homepageTitle);
    }

    @Then("^close the browser$")
    public void close_the_browser(){
        driver.quit();
    }
}
