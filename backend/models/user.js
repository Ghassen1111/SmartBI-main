//inport mongoose module
const mongoose = require('mongoose');

//craeat shema
const userSchema =mongoose.Schema({
// destenation de image// le path
avatar:String,
name:String,
firstName:String,
lastName:String,
address:String,
tel:Number,
sexe:String,
email:String,
pwd:String,
contrats:String,
salaire:Number,
category:String,
post:String,
country:String,
nameEntreprise:String,
entrepriseId:String,
employeurId:String,
status:String,
role:String,

});
const user =mongoose.model("User",userSchema);
module.exports=user;