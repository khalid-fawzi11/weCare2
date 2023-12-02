import {Schema,model} from "mongoose";

const nurseOrderSchema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
       
    phone:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    gender:{
        type:String,
        
    },
    company:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    costOfHour:{
        type:Number,
        required:true
    },
    costOfDay:{
        type:Number,
        required:true
    },
    subCategory:{
        type:Schema.ObjectId,
        required:true,
        ref:"subCategory"
       },
       phoneOfUser:{
        type:String,
        required:true,
       },
       addressOfUser:{
        type:String,
        required:true,
       },
},{timestamps:true})

export const nurseOrderModel=model('nurseOrder',nurseOrderSchema)
