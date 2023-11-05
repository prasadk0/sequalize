const db = require('./config')
const Customer=db.customers;
//    const Customer=require('./customer.module')
function createCustomer(req,res){
if(!req.body.name || !req.body.email){
return res.status(400).send({
    message:"Bad data"
})}
const obj = {
    name:req.body.name,
    email:req.body.email}

    // res.send(obj)
Customer.create(obj).then(data=>{
    res.send(data)
}).catch(err=>{
    res.send(500).send(err)
})

// res.send("post")
}



function findAllCustomer(req,res){
    Customer.findAll().then(data=>{
        res.send(data);
    }).catch(error=>{
        res.send(error)
    })
}
function findCustomerByEmail(req,res){
    Customer.findByPk(req.body.id).then((data)=>{
        res.send(data)
    })
}
function UpdateCustomer(req,res){
    const newData = {
        name:req.body.name,
        email:req.body.email
    }
    Customer.update(newData,{where:{email:req.body.email}}).then(data=>
        res.send(data))
}
function deleteCustomer(req,res){
    Customer.destroy({where:{
        email:req.body.email
    }}).then(()=>{
        res.send("deleted")
    })
}
module.exports={
    createCustomer,
    findAllCustomer,
    findCustomerByEmail,
    UpdateCustomer,
    deleteCustomer
}