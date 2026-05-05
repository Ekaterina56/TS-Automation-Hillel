import {Locator} from '@playwright/test'
import { BasePage } from '../pages/BasePage';

export class SignUpForm extends BasePage {
    private readonly signUpNameField: Locator = this.page.locator('#signupName');
    private readonly signUpLastName: Locator = this.page.locator('#signupLastName');
    private readonly signUpEmailField: Locator = this.page.locator('#signupEmail')
    private readonly signUpPasswordField: Locator = this.page.locator("#signupPassword")
    private readonly signUpRepeatPasswordField: Locator = this.page.locator("#signupRepeatPassword")
    private readonly signUpButton: Locator =this.page.locator ('div.modal-footer .btn-primary');
    public readonly viewSignUpForm: Locator = this.page.locator(".modal-title");


    async enterSingUpName(name: string) {
        await this.signUpNameField.fill(name);
    }

    async enterSignUpLastName (lastName: string){
        await this.signUpLastName.fill(lastName);
    }

     async enterSingUpEmail(email: string) {
        await this.signUpEmailField.fill(email);
    }

      async enterSignUpPassword(password: string) {
        await this.signUpPasswordField.fill(password);
    }

    async enterSingUpPepeatPassword(password: string) {
        await this.signUpRepeatPasswordField.fill(password);
    }
    
    async clickOnSignUpButton(){
        await this.signUpButton.click();
    }
    
    async enterSingUpValidCredentials (name: string, lastName: string, email: string, password: string, repeatPassword: string) {
        await this.enterSingUpName(name);
        await this.enterSignUpLastName(lastName);
        await this.enterSingUpEmail(email);
        await this.enterSignUpPassword(password);
        await this.enterSingUpPepeatPassword(password);
        await this.clickOnSignUpButton();

}
 async openSignUpForm (){
    await this.viewSignUpForm.toBeVisible()
 }

}