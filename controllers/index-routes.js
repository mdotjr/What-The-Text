var express = require('express')
var router = express.Router()

var db = require("../models");

// var passport = require('passport')
//   , LocalStrategy = require('passport-local').Strategy;

// passport.use(new LocalStrategy(
//     function(username, password, done) {
//         User.findOne({ username: username }, function (err, user) {
//             if (err) { return done(err); }
//             if (!user) {
//             return done(null, false, { message: 'Incorrect username.' });
//         }
//         if (!user.validPassword(password)) {
//             return done(null, false, { message: 'Incorrect password.' });
//         }
//         return done(null, user);
//         })
//     }
// ));

// router.get('/userhome', function (request, response) {
//     response.render('userhome')
// })
// ROUTES GO HERE

router.get('/', function (request, response) {
    response.render('index')
})

router.post('/api/register', (request, response) => {
    console.log(request.body);
    db.User.create(request.body).then((dbUser) => {
        response.json(dbUser);
    })
})

module.exports = router;
