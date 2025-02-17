const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
    {
        name:{  type:String,
            required:[true,'must provide name'],
            trim:true,
            maxlengh:[20, 'max name must be 20chars ']


        },completed:{ type: Boolean, deafult:false 
    }}
)
module.exports = mongoose.model('  Task',TaskSchema)