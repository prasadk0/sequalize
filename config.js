// const Sequelize = require('sequelize');
// const dbname='customer'
// const dbuser="root";
// const dbpassword=""
// const sequelize = new Sequelize(dbname, dbuser, dbpassword, {
//   host: 'localhost',
//   port:'3306',
//   dialect: 'mysql',
// });
// const db= {}


// db.Sequelize=Sequelize;
// db.sequelize=sequelize;
// //Model tables
// db.customers = require('./customer.module')(sequelize,Sequelize);
// module.exports=db;

const Sequelize = require('sequelize');
const dbname = 'customer';
const dbuser = 'postgres'; // Replace with your PostgreSQL username
const dbpassword = 'prasad'; // Replace with your PostgreSQL password
const sequelize = new Sequelize(dbname, dbuser, dbpassword, {
  host: 'localhost',
  port: 5434, // Default PostgreSQL port
  dialect: 'postgres', // Use PostgreSQL as the dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Model tables
db.customers = require('./customer.module')(sequelize, Sequelize);

module.exports = db;



