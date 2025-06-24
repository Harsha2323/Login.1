const {test,expect}=require('@playwright/test')
const path = require('path')


test('Login page',async({page})=>{
await page.goto('https://v3-lts-eetestsystem.tooljet.com/login/qa-automation?redirectTo=/')
await page.locator('#email').fill('test1@tooljet.com')
await page.locator('#password').fill('password')
await page.locator("//span[@class='button-text']").click()
await expect(page.locator("(//button[normalize-space()='Create an app'])")).toBeVisible()
await page.locator("(//button[normalize-space()='Create an app'])").click()
const RandomValue = 'demo-' + Date.now(); 
await page.locator("//input[@placeholder='Enter app name']").fill(RandomValue)
await page.locator("//button[@type='submit']").click()
await page.locator("(//input[@type='text'])[1]").fill(RandomValue)
})
