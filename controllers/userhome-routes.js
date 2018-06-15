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

router.post("/upload", upload.single("file"), (request, response, next) => {
    var extension = path.extname(request.file.originalname).toLowerCase();
    var temporaryFile = request.file.path;
    var newFile = path.join("public/assets/uploads/", request.file.filename + extension);

    // response.redirect('/userhome');
    if (extension === ".png") {
        fs.rename(temporaryFile, newFile, error => {
            if (error) return handleError(error, response);
            response.redirect('/userhome');
        })
    }

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

