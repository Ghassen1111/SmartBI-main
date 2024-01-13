//inport mongoose module
const mongoose = require('mongoose');

//craeat shema
const tacheSchema = mongoose.Schema({
    yourId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "your"
    },
    myId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "my"
    },
    tache: String,
    date:String,
    status:String,

});
const tache = mongoose.model("Tache", tacheSchema);
module.exports = tache;