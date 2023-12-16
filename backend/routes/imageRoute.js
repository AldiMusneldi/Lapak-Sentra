const express = require('express');
const routes = express();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,__dirname + "/../storage/kosts");
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});
const uploads = multer({storage:storage});

routes.post('/uploads',uploads.array("files") ,(req,res)=>{
    const image = req.files;
    console.log(req.body);
    console.log(image);
    res.json({data:image, status:"success"});
});


module.exports = routes;