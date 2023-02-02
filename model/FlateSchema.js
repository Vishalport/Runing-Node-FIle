const {Schema,model, SchemaTypeOptions, default: mongoose} = require('mongoose')

var Flat = new Schema({
    project: { type: Schema.ObjectId, ref: "Project" }, 
    address:String,
    userID: String,
    floor: Number,
    size: String,
    type: String,
    flat_number: String,
    price: Number,
   });

module.exports = model('Flat',Flat)
