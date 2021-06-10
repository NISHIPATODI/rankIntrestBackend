const express = require("express");
const router  = express.Router();
const UserAuthController=require("../controllers/index").UserAuthController;
const PostController=require("../controllers/index").PostController;

const VerifyUserJWT=require("../middleware/jwt").VerifyUserJWT;

//CHECK ROUTES
router.get("/check",VerifyUserJWT,(req,res)=>{
    console.log("Value fetched from token userid, accHash, email")
    console.log(req.user.id);
    console.log(req.user.accHash);
    console.log(req.user.email);

res.send("Welcome ! Everything is perfectly setUp")
});

router.post("/checkHeroku",(req,res)=>{
    console.log(req.body.first);
    
    res.send("Welcome ! Heroku deployement is perfectly done")
});


//AUTHENTICATION routes
router.post('/signup',UserAuthController.SignUp);
router.post('/login',UserAuthController.Login);
router.post('/pricategory',VerifyUserJWT,UserAuthController.CategoryPri);
router.post('/uploadimage',VerifyUserJWT,UserAuthController.UploadImage);

router.post('/changeuserpassword',VerifyUserJWT,UserAuthController.ChangePassword);

router.post('/insertpost',VerifyUserJWT,PostController.InsertPost);
router.post('/insertlike',VerifyUserJWT,PostController.InsertLike);
router.post('/insertcomment',VerifyUserJWT,PostController.InsertComment);

router.post('/searchuser',PostController.SearchUser);

router.get('/profileposts',VerifyUserJWT,PostController.profilePosts);
router.post('/categoryposts',VerifyUserJWT,PostController.CategoryPosts);
router.get('/allposts',PostController.AllPosts);


router.post('/addcategory',VerifyUserJWT,PostController.AddCategory);
router.get('/usercategories',VerifyUserJWT,PostController.UserCategories);



module.exports = router;