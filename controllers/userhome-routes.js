// var express = require('express')
// var router = express.Router()


const path = require("path");
const fs = require("fs");
var db = require("../models");

var router = function(app) {

app.get('/userhome', function (request, response) {
    response.render('userhome')
});

app.get('/text/:id', function (request, response) {
    response.render('submit')
});

app.get('/api/text/:id', function(request, response) {
    var textId = request.params.id;
    db.Text.findById(textId)
    .then(function(result) {
        console.log(result);
        response.json(result);
    })
});

app.put('/api/text/:id', function(request, response) {
    var textId = request.params.id;
    db.Text.update(request.body,
    {   where: {
            id: request.params.id
        }
    })
    .then(function(dbText) {
        response.json(dbText);
    })
    
});

app.post('/submit', function (request, response) {
    response.render('submit')
});


var multer = require("multer");
var handleError = (error, response) => {
    response
    .status(500)
    .contentType("text/plain")
    .end("Something went terribly wrong...");
};
var upload = multer({ dest: "public/assets/uploads/" });

app.post("/upload", upload.single("file"), (request, response, next) => {
    var extension = path.extname(request.file.originalname).toLowerCase();
    var tempFilePath = request.file.path;
    var newFilePath = path.join("public/assets/uploads/", request.file.filename + extension);
    console.log(JSON.stringify(request.user));
    

    if (extension === ".png") {
        fs.rename(tempFilePath, newFilePath, error => {
            if (error) return handleError(error, response);
            db.Text.create({
                image: '/assets/uploads/'+request.file.filename + extension,
                userId: request.user.id
            })
            .then(function(text){
                response.redirect('/text/' + text.id)
            });
                    
        })
    }
});

}
module.exports = router;