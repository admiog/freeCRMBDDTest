package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
        features = "C:\\Users\\bolas\\IdeaProjects\\freeCRMBDDTest\\src\\main\\java\\Features",
        glue = {"stepDefinitions"},
        format = {"pretty", "html:test-output"},
        monochrome = true,
        strict = true,
        dryRun = false
        )

public class TestRunner {
}
