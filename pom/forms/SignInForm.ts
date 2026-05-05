import {Locator} from '@playwright/test'
import { BaseForms } from './BaseForms';

export class SighInForm extends BaseForms{

private readonly emailField: Locator = this.page.getByRole('textbox', { name: 'Email' });
private readonly passwordField: Locator = this.page.getByRole('textbox', { name: 'Password' });
private readonly loginButton: Locator = this.page.getByRole('button', { name: 'Login' });
public readonly emptyEmailMessage :Locator = this.page.getByText('Email required');  
public readonly emptyPasswordMessage: Locator = this.page.getByText('Password required'); 
public readonly incorrectEmailMessage: Locator = this.page.getByText('Email is incorrect');
public readonly wrongSingInCredentials: Locator = this.page.getByText('Wrong email or password');

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