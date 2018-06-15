//  ROUTES TO HANDLE    REQUEST                     RESPONSE
//  main landing        app.get('/'                 render main landing page

//  user's home         app.get('/home/:userId'     render user's home page

//  upload text         app.get('/create'           render appropriate html page

//  upload text         app.post('/create'          post data to server, redirect to user's home

//  view-comment        app.get('/comment/:id       render view-comment page

//  view-comment        app.post('/comment/:id      post data to server, redirect to user's home

//  view-comment       *app.delete('/comment/:id    delete data from server, redirect to user's home
//                                                  * delete button displayed if text belongs to user

//  logging out         app.put('/:userId/logout'   update user login data, logged_in = false

// var path = require("path");

var express = require('express')
var router = express.Router()

var db = require("../models");

// ////////////////////////////////////

// ROUTES GO HERE
router.get('/', function (request, response) {
    response.sendFile(__dirname, "../public/index.html");
    
})

router.post('/api/register', (request, response) => {
    console.log(request.body);
    db.User.create(request.body).then((dbUser) => {
        response.json(dbUser);
    })
})





// read more at: https://expressjs.com/en/guide/routing.html#express-router
// our middleware (body-parser) is defined in server.js

// ////////////////////////////////////

module.exports = router