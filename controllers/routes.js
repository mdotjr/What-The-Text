//  ROUTES TO HANDLE    REQUEST                     RESPONSE
//  main landing        app.get('/'                 render main landing page

//  user's home         app.get('/:userId'          render user's home page

//  upload text         app.get('/newText'          render appropriate html page

//  upload text         app.post('/newText'         post data to server, redirect to user's home

//  view-comment        app.get('/thisText/:id      render view-comment page

//  view-comment        app.post('/thisText/:id     post data to server, redirect to user's home

//  view-comment       *app.delete('/thisText/:id   delete data from server, redirect to user's home
//                                                  * delete button displayed if text belongs to user

//  logging out         app.put('/:userId/logout'   update user login data, logged_in = false


const express = require('express')
const router = express.Router()

// ////////////////////////////////////

// ROUTES GO HERE
router.get('/', function (request, response) {
    response.send('What the text?! Home Page')
})
// read more at: https://expressjs.com/en/guide/routing.html#express-router
// our middleware (body-parser) is defined in server.js

// ////////////////////////////////////

module.exports = router