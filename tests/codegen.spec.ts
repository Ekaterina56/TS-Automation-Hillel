import test, { expect } from "@playwright/test";
import {HomePage} from "../pom/pages/HomePage";

test.describe('CodeGen Sign In', () => {
let homePage: HomePage
    test.beforeEach(async ({page})=> {
        await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
        await page.getByRole('button', { name: 'Sign In' }).click();
        const homePage = new HomePage(page)
        await homePage.openSignInForm();
    })

    test('Successful Sign in', async ({page}) => {
      await page.getByRole('textbox', { name: 'Email' }).fill('nekatit56@gmail.com');
      await page.getByRole('textbox', { name: 'Password' }).fill('Kate12345678');
      await page.getByRole('button', { name: 'Login' }).click();
      await expect(page.getByRole('heading', { name: 'Garage' })).toBeVisible();
});

    

     test('Sing in with empty email field', async ({page}) => {
         await page.getByRole('textbox', { name: 'Email' }).click();
         await page.getByRole('textbox', { name: 'Password' }).click();
         await expect(page.getByText('Email required')).toBeVisible();
        
    })

       test('Sing in with empty password field', async ({page}) => {
            await page.getByRole('textbox', { name: 'Password' }).click(); 
            await page.getByRole('textbox', { name: 'Email' }).fill('test@test.com');
            await expect(page.getByText('Password required')).toBeVisible();
        
    })

        test('Sing in with incorrect email', async ({page}) => {
        
            await page.getByRole('textbox', { name: 'Email' }).fill('test');
            await page.getByRole('textbox', { name: 'Password' }).click();
            await expect(page.getByText('Email is incorrect')).toBeVisible();
            await page.getByText('Email is incorrect').click();
        
    })

        test('Sing in with wrong credentials', async ({page}) => {
        
            await page.getByRole('textbox', { name: 'Email' }).fill('test@test.com');
            await page.getByRole('textbox', { name: 'Password' }).fill('12345678');
            await page.getByRole('button', { name: 'Login' }).click();
            await expect(page.getByText('Wrong email or password')).toBeVisible();
        
    })

})



