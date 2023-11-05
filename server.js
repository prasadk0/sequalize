const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const db = require("./config");
db.sequelize.sync();
const controller = require("./db.controller");
app.post("/customer/new", function (req, res) {
  controller.createCustomer(req, res);
});
app.get("/customers", function (req, res) {
  controller.findAllCustomer(req, res);
});
app.get("/customers/", function (req, res) {
  controller.findCustomerByEmail(req, res);
});
app.put("/customers/update", function (req, res) {
  controller.UpdateCustomer(req, res);
});

app.delete("/customers/delete/", function (req, res) {
  controller.deleteCustomer(req, res);
});
app.get("/", (req, res) => {
  res.send("Home page");
});
app.listen(8000, () => {
  console.log("server started");
});
