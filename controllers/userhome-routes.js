var express = require('express')
var router = express.Router()
const path = require("path");
const fs = require("fs");
var db = require("../models");

const multer = require("multer");
const handleError = (error, response) => {
    response
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};
const upload = multer({ dest: "public/assets/uploads/" });

router.get('/userhome', function (request, response) {
    response.render('userhome')
})

//upload file
router.post("/upload",upload.single("imgfile"),
(request, response, next) => {
    // const tempPath = request.file.path;
    const targetPath = path.join(__dirname, "./uploads/image.png");
    console.log(request.path);
    console.log(request.file);


    if (path.extname(request.file.originalname).toLowerCase() === ".png") {
        fs.rename(request.file.path, targetPath, error => {
            if (error) return handleError(error, response);
            response
            .status(200)
            .contentType("text/plain")
            .end("File uploaded!");
        })
    }
    // else {
    //     fs.unlink(tempPath, error => {
    //         if (error) return handleError(error, response);
    //         response
    //         .status(403)
    //         .contentType("text/plain")
    //         .end("Only .png files are allowed!");
    //     })
    // }
});


module.exports = router;
