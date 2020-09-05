const express = require('express');
const Router = express.Router();
const InfoModel = require('../model/InfoModel');


Router.get('/',(req,res)=>{

    InfoModel.find({},(err,response)=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to get employees",
                msgError : true
            }});
        else{
            res.status(200).json({response});
        }
            
    });
});


Router.post('/',(req,res)=>{
    const infoModel = new InfoModel(req.body);
    infoModel.save((err,document)=>{
        if(err){
            res.status(500).json({message:{
                msgBody : "Unable to add employee",
                msgError : true
            }});
        }
        else{
            res.status(200).json({message:{
                msgBody: "Successfully Added Employee",
                msgError : false
            }});
        }
    });
});


Router.delete('/:id',(req,res)=>{
    InfoModel.findByIdAndDelete(req.params.id,err=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to Delete Employee",
                msgError : true
            }});  
        else
            res.status(200).json({message:{
                msgBody: "Successfully Deleted Employee",
                msgError : false
            }});     
    });
});

 
Router.put('/:id',(req,res)=>{
    InfoModel.findOneAndUpdate({_id : req.params.id},req.body,{runValidators: true},(err,response)=>{
        if(err)
            res.status(500).json({message:{
                msgBody : "Unable to Update Employee",
                msgError : true
            }});
        else
        res.status(200).json({message:{
            msgBody: "Successfully Updated Employee",
            msgError : false
        }});   
    });
});

module.exports = Router;