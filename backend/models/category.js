//inport mongoose module
const mongoose = require('mongoose');

//craeat shema
const categorySchema =mongoose.Schema({
entrepriseId:String,    
category:String,

});
const category =mongoose.model("Category",categorySchema);
module.exports=category;