import test from "@playwright/test";


test.beforeEach(async ({page})=> {
    await page.goto("")

})

test("Site access", async({page}) =>{

})

test("Page locator -Xpath", async({page}) =>{
    page.locator("//h1"),
    page.locator ("//button")
})

test("Page locator -CSS", async ({page}) =>{
     const title =  page.locator('h1');
     const titleCss = page.locator('css=h1');
     const button = page.locator('.btn-primary');
     await button.click()
})

test('getByRole', async ({page}) => {
 page.getByRole('button')
})

test('getByText', async ({page}) => {
 page.getByText('Do more!')
})

test('getByPlaceholder', async ({page}) => {
 page.getByPlaceholder('Enter your name')
})

test('getByAltText', async ({page}) => {
 page.getByAltText('Instructions')
})

test('getByLabel', async ({page}) => {
 page.getByLabel('Email')
})

test('getByTitle', async ({page}) => {
 page.getByTitle('')
})

test('getByTestId', async ({page}) => {
 page.getByTestId('test')
})

test("testGetByRole", async ({page}) =>{
     await page.getByRole('button', {name : 'Sing in'}).highlight()
})

test("testGetByTextHome", async ({page}) =>{
     await page.getByText('Home').highlight()
})

test("testGetByTextAbout", async ({page}) =>{
     await page.getByText('About').highlight()
})

test("testGetByTextContacts", async ({page}) =>{
     await page.getByText('Contacts').highlight()
})