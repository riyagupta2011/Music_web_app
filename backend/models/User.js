const moongose=require("mongoose");
const User=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:false,
    },
    email:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    LikedSongs:{
      type:String,
     defaults:"",
    },
    LikedPlaylists:{
        type:String,
        defaults:"",
    },
    subscribedArtists:{
        type:String,
        defaults:"",
    }
});
const UserModel=mongoose.model("User",User);
module.exports=UserModel;
