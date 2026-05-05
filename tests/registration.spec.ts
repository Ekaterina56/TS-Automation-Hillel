import test, { expect } from "@playwright/test";
import { SignUpForm } from "../pom/forms/SignUpForm";
import { HomePage } from "../pom/pages/HomePage";
import { GaragePage } from "../pom/pages/GaragePage";

 let email: string;
 let signUpForm: SignUpForm
 let homePage: HomePage
 let garagePage: GaragePage

test.describe('Sing Up', async () => {

    email = `aqa-test+${Date.now()}@gmail.com`

    test.beforeEach(async ({page})=> {
         signUpForm  = new SignUpForm (page)
         homePage = new HomePage (page)
         garagePage = new GaragePage(page)

         await homePage.openPage()
         await homePage.openSignUpForm()

        // await page.goto("")

        // await page.locator('.hero-descriptor_btn').click();
        // await expect (page.locator(".modal-title")).toBeVisible();
        await expect (signUpForm.viewSignUpForm).toBeVisible();
    
    })

  

    test ('Successful Sing Up', async ({page}) => {
        // await page.locator('#signupName').click();
        // await page.locator('#signupName').fill('Katerynatest');
        // await page.locator('#signupLastName').click();
        // await page.locator('#signupLastName').fill('Martynovatest');
        // await page.locator('#signupEmail').click();
        // await page.locator('#signupEmail').fill(email);
        // await page.locator("#signupPassword").click();
        // await page.locator("#signupPassword").fill ('Kate12345678');
        // await page.locator("#signupRepeatPassword").click();
        // await page.locator("#signupRepeatPassword").fill('Kate12345678');
        // await page.locator ('div.modal-footer .btn-primary').click()
        await signUpForm.enterSingUpValidCredentials ('Kateryna', 'TestTest', 'test@testest.com', 'Kate1245678','Kate12345678')
        await expect(signUpForm.openGaragePage).toBeVisible();

    });

      test (' Sing Up with cyrillic Name ', async ({page}) => {
        await page.locator('#signupName').click();
        await page.locator('#signupName').fill('Рпаотр');
        await page.locator('#signupLastName').click();
        await expect (page.getByText ("Name is invalid")).toBeVisible();

    });

        test ('Sing Up with empty Name', async ({page}) => {
        await page.locator('#signupName').click();
        await page.locator('#signupLastName').click();
        await page.locator('#signupLastName').fill('Martynovatest');
        await page.locator('#signupEmail').click();
        await page.locator('#signupEmail').fill(email);
        await page.locator("#signupPassword").click();
        await page.locator("#signupPassword").fill ('Kate12345678');
        await page.locator("#signupRepeatPassword").click();
        await page.locator("#signupRepeatPassword").fill('Kate12345678');
        await expect (page.getByText ("Name required")).toBeVisible();

    });

       test (' Sing Up with Name less than 2 ', async ({page}) => {
        await page.locator('#signupName').click();
        await page.locator('#signupName').fill('T');
        await page.locator('#signupLastName').click();
        await expect (page.getByText ("Name has to be from 2 to 20 characters long")).toBeVisible();

    });

      test (' Sing Up with Name more than 2o ', async ({page}) => {
        await page.locator('#signupName').click();
        await page.locator('#signupName').fill('hjkloiuytfdservbnmklll');
        await page.locator('#signupLastName').click();
        await expect (page.getByText ("Name has to be from 2 to 20 characters long")).toBeVisible();

    });

     test (' Sing Up border color is red ', async ({page}) => {
        await page.locator('#signupName').click();
        await page.locator('#signupName').fill('hjkloiuytfdservbnmklll');
        await page.locator('#signupLastName').click();
        await expect (page.locator ("#signupName")).toHaveCSS('border-color', 'rgb(220, 53, 69)');

    });

    test ('Sign Up with empty Last name', async ({page}) => {
        await page.locator('#signupName').click();
        await page.locator('#signupName').fill('Katerynatest');
        await page.locator('#signupLastName').click();
        await page.locator('#signupEmail').click();
        await page.locator('#signupEmail').fill(email);
        await page.locator("#signupPassword").click();
        await page.locator("#signupPassword").fill ('Kate12345678');
        await page.locator("#signupRepeatPassword").click();
        await page.locator("#signupRepeatPassword").fill('Kate12345678');
       await expect (page.getByText ("Last name required")).toBeVisible();

    });

        test ('User already exists', async ({page}) => {
        await page.locator('#signupName').click();
        await page.locator('#signupName').fill('Katerynatest');
        await page.locator('#signupLastName').click();
        await page.locator('#signupLastName').fill('Martynovatest');
        await page.locator('#signupEmail').click();
        await page.locator('#signupEmail').fill('nekatit56@gmail.com');
        await page.locator("#signupPassword").click();
        await page.locator("#signupPassword").fill ('Kate12345678');
        await page.locator("#signupRepeatPassword").click();
        await page.locator("#signupRepeatPassword").fill('Kate12345678');
        await page.locator ('div.modal-footer .btn-primary').click()
        await expect(page.locator('.alert-danger')).toHaveText('User already exists');

    });

    

    
})
