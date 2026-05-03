import {Locator, Page} from '@playwright/test'

export class SighInForm {

private readonly page: Page;
private readonly emailField: Locator;
private readonly passwordField: Locator;
private readonly loginButton: Locator;
public readonly emptyEmailMessage :Locator;  
public readonly emptyPasswordMessage: Locator; 
public readonly incorrectEmailMessage: Locator;
public readonly wrongSingInCredentials: Locator;

    constructor(page: Page) {
        this.page = page
        this.emailField = page.getByRole('textbox', { name: 'Email' });
        this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.emptyEmailMessage = page.getByText('Email required');
        this.emptyPasswordMessage = page.getByText('Password required');
        this.incorrectEmailMessage = page.getByText('Email is incorrect');
        this.wrongSingInCredentials = page.getByText('Wrong email or password');

        
    }

    async sighInWithCredentials (email: string, password: string) {
        //   await this.emailField.fill(email);
        await this.enterEmail(email);
        //   await this.passwordField.fill (password);
        await this.enterPassword(password);
        //   await this.loginButton.click();
        await this.clickOnLoginButton();
    }

    async enterEmail(email: string){
        await this.emailField.fill(email);
    }

    async enterPassword(password: string){
        await this.passwordField.fill (password);

    }

    async clickOnLoginButton (){
         await this.loginButton.click();
    }

    async triggerErrorOnField (nameField :string) {
        let field: Locator;
         if (nameField === 'email'){
            field = this.emailField
         } else if (nameField === 'password') {
            field = this.passwordField

         } else throw new Error ('Wrong field name')

         await field.focus();
         await field.blur();
         

    }

}