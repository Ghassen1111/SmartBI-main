//inport mongoose module
const mongoose = require('mongoose');

//craeat shema
const productSchema =mongoose.Schema({
// destenation de image// le path
avatar:String,
name:String,
qty:Number,
prixReal:Number,
prix:Number,
category:String,
description:String,
employeurId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employeur"
},
entrepriseId:String,
status:String,

});
const product =mongoose.model("Product",productSchema);
module.exports=product;
