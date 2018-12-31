package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import static org.junit.Assert.assertEquals;

public class ContactsStepDefinition {

    WebDriver driver;

    @Given("^user is on home page$")
    public void user_is_on_home_page() {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\bolas\\Downloads\\" +
                "chromedriver_win32\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://www.freecrm.com/index.html");
    }

    @When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enters_and(String username, String password) {
        driver.findElement(By.name("username")).sendKeys(username);
        driver.findElement(By.name("password")).sendKeys(password);
    }

    @When("^user clicks on Login button$")
    public void user_clicks_on_Login_button() {
        driver.findElement(By.xpath("//input[@type='submit']")).submit();
        String pageTitle = driver.getTitle();
        assertEquals("CRMPRO", pageTitle);
    }

    @Then("^user clicks on New Contacts link$")
    public void user_clicks_on_New_Contacts_link() {
        driver.switchTo().frame("mainpanel");
        Actions action = new Actions(driver);
        action.moveToElement(driver.findElement(By.xpath("//a[contains(text(), 'Contacts')]"))).build().perform();
        driver.findElement(By.xpath("//a[contains(text(), 'New Contact')]")).click();
    }

    @Then("^user enters new contact detail \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enters_new_contact_detail_and_and(String firstname, String lastname, String position) {
        driver.findElement(By.id("first_name")).sendKeys(firstname);
        driver.findElement(By.id("surname")).sendKeys(lastname);
        driver.findElement(By.id("company_position")).sendKeys(position);
    }

    @Then("^user clicks on save$")
    public void user_clicks_on_save() {
        driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
    }

    @Then("^user closes browser$")
    public void user_closes_browser() {
        driver.quit();
    }
}
