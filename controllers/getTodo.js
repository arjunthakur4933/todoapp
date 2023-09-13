const Todo=require("../models/Todo");

exports.getTodo=async(req,res)=>
{
    try{
        //fetch all todo item form database
        const todos= await Todo.find({});

        res.status(200).json({
            success:true,
            data:todos,
            message:"entire todo data fetched",
        })
        
    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:'server side error'
        })
       
}
}

exports.getTodoById= async(req,res)=>{
    try{
        const id=req.params.id;
        const todo=await Todo.findById({_id:id})
        if(!todo)
        {
            return res.status(404).json({
                success:false,
                message:'no data found'
            })
        }

        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} dtaa fetched successfully`
        })


    }

    catch(err){
        console.error(err);
        console.log(error)
        res.status(500).json({
          success:false,
          error:err.message,
          message:'server side errorr'   
        })
    }
}