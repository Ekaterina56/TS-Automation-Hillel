import test, { expect } from "@playwright/test";

test.describe('Auto-retrying Assertions', () => {

     test.beforeEach(async ({page})=> {
         await page.goto("")
     
     })

     test('toBeVisible', async ({page}) => {

        await page.locator ('.header_signin').click()
        await expect(page.locator('h4.modal-title')).toBeVisible();


     })


      test('toHaveText', async ({page}) => {

        await page.locator ('.header_signin').click()
        await expect(page.locator('.modal-title')).toHaveText('Log in');


     })

        test('toContainText', async ({page}) => {

        await page.locator ('.header_signin').click()
        await expect(page.locator('.modal-title')).toContainText('Log');


     })

        test('toHaveValue', async ({page}) => {
            await page.locator ('.header_signin').click()
            await page.locator ('#signinEmail').fill('test@test.com')
            await expect (page.locator('#signinEmail')).toHaveValue('test@test.com')


     })

       test('toHaveCSS', async ({page}) => {
            await expect(page.locator('.hero-descriptor_btn')).toHaveCSS('background-color', 'rgb(2, 117, 216)')
     

     })

    //  test('toBeChecked', async ({page}) => {
    //     await page.goto('https://www.tutorialspoint.com/selenium/practice/check-box.php');
    //     await page.locator('#c_bs_1').check();
    //     await expect (page.locator('#c_bs_1')).toBeChecked();
    //     await page.locator('#c_bs_1').uncheck();
    //     await expect (page.locator('#c_bs_1')).not.toBeChecked();
         
    //  })

      test('toHaveCount', async ({page}) => {
      await expect(page.locator('.socials_icon')).toHaveCount(5)
     

     })

      test('toHaveUrl', async ({page}) => {
      await expect(page).toHaveURL('https://qauto.forstudy.space/')
     

     })


})

test.describe('Non-retrying Assertions', () => {

    //  test.beforeEach(async ({page})=> {
    //      await page.goto("")
     
    //  })

     test('toBe', () => {

        const result = 10 + 10;
        expect(result).toBe(20)

     })


    })

    test('signInVisible', async ({page}) => {
        await page.goto('');
        await page.getByRole ('button', {name: "Sign In"}).highlight();
        await expect (page.getByRole ('button', {name: "Sign In"})).toBeVisible();
    })

       test('headerHasText', async ({page}) => {
        await page.goto('');
        await page.locator ('.hero-descriptor_title').highlight();
        await expect (page.locator ('h1.hero-descriptor_title')).toHaveText('Do more!');
    })

       test('altCount', async ({page}) => {
        await page.goto('');
        await page.getByAltText('Instructions').highlight();
        await expect (page.getByAltText('Instructions')).toHaveCount(2);
    })