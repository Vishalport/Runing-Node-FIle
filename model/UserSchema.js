const {Schema,model, SchemaTypeOptions, default: mongoose} = require('mongoose')

var UserSchema = new Schema({
    email: String,
    f_name: String,
    l_name: String,
    city: String,
    phoneNo: Number,
    shortList: {
        project : [{type : mongoose.Schema.Types.ObjectId, ref : 'Project'}],
        flat : [{type : mongoose.Schema.Types.ObjectId,ref : 'Flat'},]
    },
    // project : {
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : 'Project'
    // },
    // flat : {
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : 'Flat'
    // },

});
 
module.exports = model('UserSchema',UserSchema)
