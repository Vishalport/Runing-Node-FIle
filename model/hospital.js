const {Schema,model, SchemaTypeOptions} = require('mongoose')

const Hospital = new Schema({
    Name : {
        type : String,
    },
    open_Time : {
        type : Number,
        default : 9
    },
    close_Time : {
        type : Number,
        default : 21
    },
    covid : {
        type : Boolean,
        default : true
    },
    Dose : {
        type : Number,
        default : 5
    },
    city : {
        type : String,
    },
    pin : {
        type : String,
    },
    location: {
        type: {
          type: String,
          default: "Point"
        },
        coordinates: {
          type: [Number],
          default: [0, 0]
        }
    },

},{timestamps: true});

module.exports = model('Hospital',Hospital)
