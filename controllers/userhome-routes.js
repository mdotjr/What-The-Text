var express = require('express')
var router = express.Router()
const path = require("path");
const fs = require("fs");
var db = require("../models");

router.get('/userhome', function (request, response) {
    response.render('userhome')
});

var multer = require("multer");
var handleError = (error, response) => {
    response
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};
var upload = multer({ dest: "public/assets/uploads/" });

router.post("/upload", upload.single("file"),(request, response, next) => {
    var imgFile = request.file.originalname;
    var tempPath = request.file.path;
    // const targetPath = path.join(__dirname, "./uploads/", imgFile);
    const targetPath = path.join("public/assets/uploads/", imgFile);
    console.log(request.file);
    response.redirect('/userhome');
    // if (path.extname(request.file.originalname).toLowerCase() === ".png") {
    //     fs.rename(tempPath, targetPath, error => {
    //         if (error) return handleError(error, response);
    //             response
    //             .status(200)
    //             .contentType("text/plain")
    //             .end(function() {
    //                 send("File uploaded successfully");
    //             });
    //     })
    // }
    
            // } else {
            //     fs.unlink(tempPath, err => {
            //         if (error) return handleError(error, response);
            //         response
            //         .status(403)
            //         .contentType("text/plain")
            //         .end("Only .png files are allowed!")
            //     })
            // }
        // })
    // }
});


module.exports = router;

    // console.log(targetPath);  // /Users/tim/Coding/Repos/What-The-Text/controllers/uploads/text_img1.png
    // console.log(__dirname);   // /Users/tim/Coding/Repos/What-The-Text/controllers
    // console.log(request.file.originalname);  // text_img1.png

