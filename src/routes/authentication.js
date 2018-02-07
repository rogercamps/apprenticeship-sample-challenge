import express from 'express'

import {
  signUp,
  signIn,
  checkUserByEmail,
} from '../actions'

const router = express.Router()

router.get('/', (req, res) => res.redirect('/albums'))

router.get('/sign-up', (req, res, next) => {
  res.render('authentication/sign-up')
})

router.post('/sign-up', (req,res, next) => {
  const { name, last, email } = req.body
  console.log(last);
  checkUserByEmail(email)
    .then( existingUser => {
      if( existingUser ) {
        res.send("user already exists")
      } else {
        signUp(name, last, email)
          .then( newUser  => {
            res.redirect('/')
          })
      }
    })
})




export default router
