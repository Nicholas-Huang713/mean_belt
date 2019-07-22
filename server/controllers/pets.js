const mongoose = require('mongoose');
const Pets = mongoose.model('Pets');

module.exports = {
  getAll:(req,res)=>{
    Pets.find({},(err,data)=>{
      if(err){
        res.json({message:'Error',data:err});
      }else{
        res.json({message:'Success',data:data});
      }
    });
  },
  getOne:(req,res)=>{
    Pets.findById({_id:req.params.id},(err,data)=>{
      if(err){
        res.json({message:'Error',data:err});
      }else{
        res.json({message:'Success',data:data});
      }
    });
  },
  new:(req,res)=>{
    Pets.create(req.body,(err,data)=>{
      if(err){
        console.log({message:"Error",data: err});
        res.json({message:'Error',data:err});
      }else{
        res.json({message:'Success',data:data});
      }
    });
  },
  updateOne:(req,res)=>{
    Pets.findByIdAndUpdate({_id:req.params.id},req.body,{runValidators:true},(err,data)=>{
      if(err){
        res.json({message:'Error',data:err});
      }else{
        res.json({message:'Success',data:data});
      }
    });
  },
  destroy:(req,res)=>{
    Pets.findByIdAndRemove({_id:req.params.id},(err,data)=>{
      if(err){
        res.json({message:'Error',data:err});
      }else{
        res.json({message:'Success',data:data});
      }
    });
  }
};