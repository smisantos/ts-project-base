import { Router } from 'express'

const routes = Router()

// Home Route
routes.get('/', (request, response) => {
  return response.send('Express + TypeScript Server')
})

export default routes
