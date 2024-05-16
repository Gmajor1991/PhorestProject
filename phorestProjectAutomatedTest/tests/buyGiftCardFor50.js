
const { Builder, By } = require("selenium-webdriver");
//const puppeteer = require('puppeteer'); //This is a browser library that allows screenshots to be taken and saved.

async function example() {
    // Launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        // Navigate to the Phorest gift card purchase page
        await driver.get("https://gift-cards.phorest.com/salons/demous#");

        // Find the radio button element by xpath
        //THIS IS THROWING A "no such element: Unable to locate element" ERROR MESSAGE, CAUSING THE PROGRAM TO CRASH.
        //const option50RadioBtn = await driver.findElement(By.xpath('//*[@id="option50"]'));
        const radio = document.querySelector("#option50");
        radio.click();

        // Click the radio button
        await option50RadioBtn.click();

        // Find the email address input element by data-target attribute
        const emailInput = await driver.findElement(By.css('input[data-target="email.purchaserEmailInput"]'));

        // Input the email address
        await emailInput.sendKeys("grahamtester@sharklasers.com");

        //Find the firstName field
        const firstNameInput = await driver.findElement(By.css('[data-target="name.purchaserFirstNameInput"]'));
        //Input the first name
        await firstNameInput.sendKeys("Derek");
        
        //Find the lastName field
        const lastNameInput = await driver.findElement(By.css('[data-target="name.purchaserLastNameInput"]'));
        //Input the last name
        await lastNameInput.sendKeys("Testington");

        //Wait for 2 seconds
        await new Promise(resolve => setTimeout(resolve, 2000));

        //Find the "Checkout" button
        const checkoutButton = document.querySelector('button[data-target="checkout.checkoutButton"]');

        //Select the "Checkout" button, and wait for one second
        await checkoutButton.click();
        await new Promise(resolve => setTimeout(resolve, 1000));

        //Take a screenshot, and save it to the "automatedTestEvidence" folder.
        //await page.screenshot({ path: 'C:\Users\graha\Documents\PhorestProject\PhorestProject\automatedTestEvidence\screenshot.png' }); //IS THIS THE CORRECT FILE PATH AND FILE NAME FOR A NEW SCREENSHOT?

        //Find and select the "Confirm Details" button
        const confirmButton = document.querySelector('button[data-action="confirm#confirmAction"]');
        await confirmButton.click();

        //Wait for 2 seconds
        await new Promise(resolve => setTimeout(resolve, 2000));

        //Find the card number input
        const cardNumberInput = document.querySelector('input[name="cardnumber"][aria-label="Credit or debit card number"]');
        //Input the correct card number
        await cardNumberInput.sendKeys("4111111111111111");
        
        //Wait for one second
        await new Promise(resolve => setTimeout(resolve, 1000));

        //Find the date input, and enter the correct expiry date
        const dateInput = document.querySelector('input[name="exp-date"][aria-label="Credit or debit card expiration date"]');
        await dateInput.sendKeys("1224");

        //Wait for one second
        await new Promise(resolve => setTimeout(resolve, 1000));

        //Find the date input, and enter the correct expiry date
        const cvcInput = document.querySelector('input[name="cvc"][aria-label="Credit or debit card CVC/CVV"]');
        await cvcInput.sendKeys("999");

        //Find the "Submit" button
        const submitButton = document.querySelector('button[data-action="stripe-purchase#confirmPayment"]');
        await submitButton.click();

        //Wait for three seconds
        await new Promise(resolve => setTimeout(resolve, 3000));

        //Take a screenshot, and save it to the "automatedTestEvidence" folder.
        //await page.screenshot({ path: 'C:\Users\graha\Documents\PhorestProject\PhorestProject\automatedTestEvidence\screenshot.png' }); //IS THIS THE CORRECT FILE PATH AND FILE NAME FOR A NEW SCREENSHOT?
        
        // Wait for 2 seconds
        await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        // Close browser
        await driver.quit();
    } 
}
example();


/*
const { Builder, By } = require("selenium-webdriver");

async function example() {
    // Launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        // Navigate to the Phorest gift card purchase page
        await driver.get("https://gift-cards.phorest.com/salons/demous#");

        // Find the radio button element by xpath
        const option50RadioBtn = await driver.findElement(By.xpath('//*[@id="option50"]'));

        // Click the radio button
        await option50RadioBtn.click();

        // Find the email address input element by data-target attribute
        const emailInput = await driver.findElement(By.css('input[data-target="email.purchaserEmailInput"]'));

        // Input the email address
        await emailInput.sendKeys("grahamtester@sharklasers.com");

        //Find the firstName field
        const firstNameInput = await driver.findElement(By.css('[data-target="name.purchaserFirstNameInput"]'));
        //Input the first name
        await firstNameInput.sendKeys("Derek");

        //Find the lastName field
        const lastNameInput = await driver.findElement(By.css('[data-target="name.purchaserLastNameInput"]'));
        //Input the last name
        await lastNameInput.sendKeys("Testington");

        
    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        // Close browser
        //await driver.quit();
    }
}
example();
*/
