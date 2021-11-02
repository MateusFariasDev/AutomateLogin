import { Router, Request, Response } from 'express'

const HomeController = Router()

HomeController.get('/', async (request: Request, response: Response) => {
  response.json({ message: 'Hello World!' })
})

export default HomeController