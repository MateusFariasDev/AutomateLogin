import { Router, Request, Response } from 'express'
import puppeteer from 'puppeteer'

const LoginAutomateController = Router()

LoginAutomateController.post('/', async (request: Request, response: Response) => {

  const { username, password, url } = request.body
  
  try {

    const browser = await puppeteer.launch({ headless: false, slowMo: 10, devtools: false, defaultViewport: null, args: ['--start-maximized']  })
    const page = await browser.newPage()
    await page.goto(url)
    await page.waitForSelector('#user_login')
    await page.type('input#user_login', username)
    await page.type('input#user_password', password)
    await page.keyboard.press('Enter')

    return response.json('Login enviado com sucesso!')

  } catch (error) {
    throw error
  }

})

export default LoginAutomateController