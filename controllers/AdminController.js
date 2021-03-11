const { Article }=require("../models/ArticleModel")

class AdminController{
    AdminView(req,res){
        res.render("admin")
    }

    async getAllArticles(req,res){
        let Articles=await Article.find()
        res.render("adminArticle",{articles:Articles})

    }

    createArticleView(req,res){
        res.render("ArticleCreator")
    }
    async addNewArticle(req,res){
        console.log("file",req.file)
        let newArticle=new Article({
            title:req.body.title,
            description:req.body.description,
            content:req.body.content,
            image:req.file.filename
        })

        let savedArticle=await newArticle.save()
        res.redirect("/admin/articles")


    }
    async deleteArticle(req,res){
  
        let Articles=await Article.deleteOne({_id:req.params.id})
        res.redirect("/admin/articles")

    }


}

module.exports=new AdminController()