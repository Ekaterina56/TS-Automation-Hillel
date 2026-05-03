import {Locator} from '@playwright/test'
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    private readonly signInButton: Locator = this.page.getByRole('button', { name: 'Sign In' });
    

    async openPage() {
        await super.navigate('/')
    }


    async openSignInForm () {
        await this.signInButton.click()
    }
}