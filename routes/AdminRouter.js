const express = require('express');
const path=require("path")
const multer=require("multer")
const { AdminView, getAllArticles,createArticleView,  addNewArticle,deleteArticle} =require("../controllers/AdminController")
const router = express.Router();


const Storage=multer.diskStorage({
    destination:function(req,file, cb){
        cb(null,path.join(__dirname,"..","/public/images") )
    },
    filename:function(req,file, cb){
        cb(null,Date.now()+file.originalname) 
    }
})


const upload=multer({
    storage:Storage,
    limit:4*1024*1024,
  
})
/* admin view */
router.get('/',AdminView);

router.get('/articles',getAllArticles);

router.get("/articles/articleCreate", createArticleView)

router.post("/articles/articleCreate",upload.single("articleImg"), addNewArticle)

router.get("/articles/delete/:id", deleteArticle)


module.exports = router;
