import test from "@playwright/test";


test.describe('Actions with elements', () => {

    test.beforeEach(async ({page})=> {
    await page.goto("")

});
    test('click', async ({ page}) => {
       await page.getByText('Sign In').click();

    });

     test('text', async ({ page}) => {
       await page.getByText('Sign In').click();
       await page.locator('#signinEmail').fill('test@test.com')
       await page.locator('#signinPassword').pressSequentially('test1test', {delay: 100})

    });

      test('press', async ({ page}) => {
       await page.getByText('Sign In').click();
       await page.locator('#signinEmail').fill('test@test.com')
       await page.locator('#signinEmail').press('Tab')
    

    });
    // test('check, unCheck, isChecked', async ({page}) => {
    //     await page.goto('https://www.tutorialspoint.com/selenium/practice/check-box.php');
    //     await page.locator('#c_bs_1').check();
    //     console.log(await page.locator('#c_bs_1').isChecked())
    //     console.log(await page.locator('#c_bs_2').isChecked());
    //     await page.locator('#c_bs_1').uncheck();
    //     console.log(await page.locator('#c_bs_1').isChecked())

    // })

    test('focus, blur', async ({page}) => {

        await page.getByText('Sign Up').click();
        await page.locator('#signupLastName').focus();
        await page.locator('#signupLastName').blur();
    });

      test('scrollInto', async ({page}) => {

        await page.locator('.contacts_socials').scrollIntoViewIfNeeded();
    });

    
    test('dropDown', async ({page}) => {
       await page.getByText('Sign In').click();
       await page.locator('#signinEmail').fill('nekatit56@gmail.com');
       await page.locator('#signinPassword').fill('Kate12345678');
       await page.getByText('Login').click();
       await page.getByText('Add car').click();
       await page.locator ('#addCarBrand').selectOption('Fiat')
       await page.locator ('#addCarModel').selectOption('Ducato')
       await page.locator ('#addCarMileage').fill('500')
       await page.locator('.modal-footer .btn-primary').click()
      
    })

    });

test.describe('Actions with page', () => {
     test('page goto', async ({page}) => {
       await  page.goto('/panel/garage')
     })
    
    })