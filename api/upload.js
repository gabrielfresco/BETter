const express = require('express');
const router = express.Router();
const multiparty = require('connect-multiparty'),
multipartyMiddleware = multiparty();
const fs = require('fs');
const imagePath = '/home/rodebian/Desktop/UTN/supervisada/BETter/src/main/webapp/resources/assets/';
let upload = (req,res) => {
    console.log("LLEGA", req.files)
    
}

router.post('/api/upload', multipartyMiddleware, upload);

module.exports = router;