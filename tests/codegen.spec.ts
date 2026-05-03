import test, { expect } from "@playwright/test";
import {HomePage} from "../pom/pages/HomePage";
import { SighInForm } from "../pom/forms/SignInForm";
import { GaragePage } from "../pom/pages/GaragePage";
import { testUser1 } from "../test-data/validusers";
import { generateRandomEmail, generateRandomPassword, generateWrongEmailFormat } from "../utils/data/credentials";


test.describe('CodeGen Sign In', () => {
let homePage: HomePage;
let signInForm: SighInForm;
let garagePage: GaragePage

    test.beforeEach(async ({page})=> {
         homePage = new HomePage(page);
         signInForm = new SighInForm (page)
         garagePage = new GaragePage(page)
        await homePage.openPage();
        await homePage.openSignInForm();
    })

    test('Successful Sign in', async () => {
    //   await page.getByRole('textbox', { name: 'Email' }).fill('nekatit56@gmail.com');
    //   await page.getByRole('textbox', { name: 'Password' }).fill('Kate12345678');
    //   await page.getByRole('button', { name: 'Login' }).click();
        await signInForm.sighInWithCredentials(testUser1.email, testUser1.password)
        await expect(garagePage.pageHeading).toContainText('Garage');
});

    

     test('Sing in with empty email field', async () => {
        //  await page.getByRole('textbox', { name: 'Email' }).click();
        await signInForm.triggerErrorOnField ('email')
        //  await page.getByRole('textbox', { name: 'Password' }).click();
        //  await expect(page.getByText('Email required')).toBeVisible();
        await expect (signInForm.emptyEmailMessage).toBeVisible();
        
    })

       test('Sing in with empty password field', async () => {
            // await page.getByRole('textbox', { name: 'Password' }).click(); 
            // await page.getByRole('textbox', { name: 'Email' }).fill('test@test.com');
            await signInForm.triggerErrorOnField ('password')
            // await expect(page.getByText('Password required')).toBeVisible();
            await expect (signInForm.emptyPasswordMessage).toBeVisible();
        
    })

        test('Sing in with incorrect email', async () => {
        
            // await page.getByRole('textbox', { name: 'Email' }).fill('test');
            // await page.getByRole('textbox', { name: 'Password' }).click();

            await signInForm.enterEmail(generateWrongEmailFormat());
            await signInForm.triggerErrorOnField('email')
            // await expect(page.getByText('Email is incorrect')).toBeVisible();
            await expect (signInForm.incorrectEmailMessage).toBeVisible();
            
        
    })

        test('Sing in with wrong credentials', async () => {
        
            // await page.getByRole('textbox', { name: 'Email' }).fill('test@test.com');
            // await page.getByRole('textbox', { name: 'Password' }).fill('12345678');
            await signInForm.sighInWithCredentials(generateRandomEmail(), generateRandomPassword())
            // await page.getByRole('button', { name: 'Login' }).click();
            await signInForm.clickOnLoginButton();
            await expect(signInForm.wrongSingInCredentials).toBeVisible();
        
    })


})



