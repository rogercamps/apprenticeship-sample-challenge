import express from 'express'

import albums from './albums'
import authentication from './authentication'
const routes = express.Router()

routes.use('/', authentication)
routes.use('/albums', albums)



export default routes
