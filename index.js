const express = require("express")
const dotenv   = require("dotenv")
const mongoose = require("mongoose")
const   employerHeader = require("./employers")

const   emp_Contacts = require("./emloyeescontact")

const dbConnect = require("./db")

const app = express()

dotenv.config()

app.use(express.json())

PORT = process.env.PORT || 6000

dbConnect()

app.listen(PORT,()=>{
console.log(`this server now runs on PORT:${PORT}`)
})

//test request&response
app.get("/",(req,res)=>{

    res.json("time to learn deep java script")
})


app.put("/",(req,res)=>{
    const {name,work}=req.body
    res.json(work)
})


//POST Request #1:Create a /add-user POST route that saves a user to the database.
// Ensure that name is required and at least 3 characters long.

app.post("/add-user",async(req,res)=>{
const   {empFirstName,empSurName,empDept,empID,empJobRole,empAge}=req.body
if(!empFirstName){
    return res.json({message:"Please enter firstname"})
}
if(!empSurName){
    return res.json({message:"Please enter surname"})
}
if(!empDept){
    return res.json({message:"Please enter  Department"})
}
if(!empID){
    return res.json({message:"Please enter Identity number"})
}
const idExist = await employerHeader.findOne({empID})
if(idExist){
    return  res.json({message:"This ID already Exist, Kindly Check"})
}
if(!empJobRole){
    return res.json({message:"Please enter department role"})
}
if(!empAge){
    return res.json({message:"Please enter your age"})
}
const newEmployee = new employerHeader({empFirstName,empSurName,empDept,empID,empJobRole,empAge})

const   firstEmpName = {empFirstName}

await   newEmployee.save()

return res.status(200).json({message:"Welcome on Board",firstEmpName})
});


// POST Request #2:
// Create a /update-email 
// POST route that updates a user's email by name. 
// Validate that email is required and correctly formatted.

// app.post("/update-email",async(req,res)=>{
//     const {empFirstName,empEmail,empAddress,empPhone} = req.body ||{};

//     const newEmployeeContacts = new emp_Contacts({empFirstName,empEmail,empAddress,empPhone})
    
//     await  newEmployeeContacts.save()

//     if(!confirmFirstname){
//       return res.json({message:"User does not exist.Please find login page to start fresh registration"})  
//     }
// })




// POST Request #3:
// Create a /add-users POST route that accepts an array 
// of user objects and saves them to the database. 
// Validate that age is between 18 and 99.


app.post("/add-user",async(req,res)=>{
    const   {empFirstName,empSurName,empDept,empID,empJobRole,empAge}=req.body
    if(!empFirstName){
        return res.json({message:"Please enter firstname"})
    }
    if(!empSurName){
        return res.json({message:"Please enter surname"})
    }
    if(!empDept){
        return res.json({message:"Please enter  Department"})
    }
    if(!empID){
        return res.json({message:"Please enter Identity number"})
    }
    const idExist = await employerHeader.findOne({empID})
    if(idExist){
        return  res.json({message:"This ID already Exist, Kindly Check"})
    }
    if(!empJobRole){
        return res.json({message:"Please enter department role"})
    }

    if(empAge < 18){
        return res.json({message:"Please you are under age"})
    }
    const newEmployee = new employerHeader({empFirstName,empSurName,empDept,empID,empJobRole,empAge})
    
    const   firstEmpName = {empFirstName}
    
    await   newEmployee.save()
    
    return res.status(200).json({message:"Welcome on Board",firstEmpName})
    });

    // Payload Validation:
    // For the /add-users route, return a
    //  400 status code with an error message 
    //  if any user object fails validation.
    app.post("/add-user",async(req,res)=>{
        const   {empFirstName,empSurName,empDept,empID,empJobRole,empAge}=req.body
        if(!empFirstName){
            return res.json({message:"Please enter firstname"})
        }
        if(!empSurName){
            return res.status(400).json({message:"Please enter surname"})
        }
        if(!empDept){
            return res.status(400).json({message:"Please enter  Department"})
        }
        if(!empID){
            return res.status(400).json({message:"Please enter Identity number"})
        }
        const idExist = await employerHeader.findOne({empID})
        if(idExist){
            return  res.status(400).json({message:"This ID already Exist, Kindly Check"})
        }
        if(!empJobRole){
            return res.status(400).json({message:"Please enter department role"})
        }
    
        if(!empAge){
            return res.json({message:"Please you are under age"})
        }
        const newEmployee = new employerHeader({empFirstName,empSurName,empDept,empID,empJobRole,empAge})
        
        const   firstEmpName = {empFirstName}
        
        await   newEmployee.save()
        
        return res.status(200).json({message:"Welcome on Board",firstEmpName})
        });
    