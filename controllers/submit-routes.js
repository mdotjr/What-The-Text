var express = require('express')
var router = express.Router()
const path = require("path");
const fs = require("fs");
var db = require("../models");

router.get('/submit', function (request, response) {
    response.render('submit')
});

// router.post('/upload', function (request, response) {
//     response.render('submit')
// });

// var multer = require("multer");
// var handleError = (error, response) => {
//     response
//     .status(500)
//     .contentType("text/plain")
//     .end("Oops! Something went wrong!");
// };
// var upload = multer({ dest: "public/assets/uploads/" });

// router.post("/upload", upload.single("file"), (request, response, next) => {
//     var extension = path.extname(request.file.originalname).toLowerCase();
//     var tempFilePath = request.file.path;
//     var newFilePath = path.join("public/assets/uploads/", request.file.filename + extension);
//     var fileName = request.file.filename + extension;
//     console.log(newFilePath);
//     console.log(fileName);
//     if (extension === ".png") {
//         fs.rename(tempFilePath, newFilePath, error => {
//             if (error) return handleError(error, response);
//             response.redirect('/userhome');
//         })
//     }
// });


// module.exports = router;
