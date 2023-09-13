const express=require('express');
const app=express();

// app.listen(3000,()=>
// {
//     console.log("App chal gaya");
// });


require("dotenv").config();
const PORT=process.env.PORT || 4000;

app.use(express.json());

const todoRoutes=require("./routes/todo");
app.use("/api/v1",todoRoutes);

app.listen(PORT,()=>
{
    console.log(`server started successfullly at ${PORT}`);
})

const dbConnect=require("./config/database");
dbConnect();

app.get("/",(req,res)=>
{
    res.send(`<h1>this is homepage</h1>`)
})