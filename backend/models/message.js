//inport mongoose module
const mongoose = require('mongoose');

//craeat shema
const messageSchema =mongoose.Schema({
message:String,
myId:String,
yourId:String,
date:Date,

});
const message =mongoose.model("Message",messageSchema);
module.exports=message;