const {sequelize,Sequelize} = require('./config')
module.exports =(sequelize, Sequelize)=>{
    const customers = sequelize.define('customer1',{
        name:{
            type:Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING
        }
       
    });
    return customers;
}