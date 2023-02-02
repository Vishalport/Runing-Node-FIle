const {Schema,model, SchemaTypeOptions, default: mongoose} = require('mongoose')
const chats = new Schema({
    name : {
        type : String
    },
    senderID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    receiverID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    message : { 
        type : String,
    }
},{timestamps: true})

module.exports = model('chats',chats)
