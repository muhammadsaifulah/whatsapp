const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    f_name: {
        type: String,
        required:[true,'please enter name']
    },
    
    l_name: {
        type: String,
        required:[true,'please enter last name']
    },
    f_name: {
        type: String,
        required:[true,'please enter name']
    },
    f_name: {
        type: String,
        required:[true,'please enter name']
    },
    f_name: {
        type: String,
        required:[true,'please enter name']
    },
    
    f_name: {
        type: String,
        required:[true,'please enter name']
    },
    email: {
        type: String,
        required:[true,'plesae enter email']
    },
    password:{
        type: String,
        required:[true,'please enter password']
    },
    dob : {
        type: Date,
        required:[true,'please enter DOB']
    },
    gender : {
        type:String,
        required: [true,'please enter gender']
    },
    image: {
        type: String,
        required: false,
        default: 'null'
    },
    about :{
        type: String,
        required:false,
        default:'hey there i am using whatsapp🤞'
    },
    status:{
        type: Array,
        default:[],
        required:false
    },
    chatTheme: {
type:String,
required:false,
default: 'null'
    },
    active : {
        type:Boolean,
        default: 0,
    }

    

},{
    timestamps:true
})

module.exports = mongoose.model('user',userSchema);