const express = require('express');
const router = express.Router();
const multiparty = require('connect-multiparty'),
multipartyMiddleware = multiparty();
const fs = require('fs');
const imagePath =   __dirname + '/../src/main/webapp/resources/assets/';

let upload = (req,res) => {
    console.log("DIRNAME", __dirname)
    let file = req.files.file;
    fs.readFile(file.path, function (err, data) {
    // set the correct path for the file not the temporary one from the API:
        file.path = imagePath + req.body.nombre + ".png";

        // copy the data from the req.files.file.path and paste it to file.path
        fs.writeFile(file.path, data, function (err) {
            if (err) {
                return console.warn(err);
            }
            console.log("The file: " + file.name + " was saved to " + file.path);
        });
     });
}

router.post('/api/upload', multipartyMiddleware, upload);

module.exports = router;