const {Schema,model, SchemaTypeOptions, default: mongoose} = require('mongoose')

var Project = new Schema({
    name: String,
    userID : String,
    location: {
        type: {
          type: String,
          default: "address"
        },
        address: {
          type: [String],
          default: ["0","0", "0"]
        }
    },

});
 
module.exports = model('Project',Project)
