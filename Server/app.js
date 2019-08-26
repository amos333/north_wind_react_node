var express    = require("express");
var mysql      = require('mysql');
const cors = require('cors');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'amos',
  password : 'amosnetta1',
  database : 'northwind'
});

var app = express();
app.use(cors());

connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... nn");    
    } else {
        console.log("Error connecting database ... nn");    
    }
});

app.get("/getAllCustomers",function(req,res){
    getAllCustomers(function (err, customersResult){ 
        //you might want to do something is err is not null...      
        res.status(200).json({ 'title': 'SQL test',
                         'result': customersResult});
 
     });
});

function getAllCustomers(callback) {    
    connection.query("SELECT * FROM customers",
        function (err, rows) {
            //here we return the results of the query
            callback(err, rows); 
        }
    );    
}


app.get("/getOrdersForCustomer",function(req,res){
    GetOrdersForCustomer(function (err, customersResult){ 
        //you might want to do something is err is not null...      
        res.status(200).json({ 'title': req.query.id,
                         'result': customersResult});
 
     }, req.query.id);
});

function GetOrdersForCustomer(callback, customerID) {    
    connection.query("SELECT * FROM orders WHERE CustomerID='" + customerID + "'",
        function (err, rows) {
            console.log(err);
            //here we return the results of the query
            callback(err, rows); 
        }
    );    
}

app.get("/getOrderDetails",function(req,res){
    GetOrderDetails(function (err, ordersResult){ 
        //you might want to do something is err is not null...      
        res.status(200).json({ 'title': req.query.id,
                         'result': ordersResult});
 
     }, req.query.id);
});

function GetOrderDetails(callback, orderID) {    
    connection.query("SELECT * FROM `order details` WHERE OrderID='" + orderID + "'",
        function (err, rows) {
            console.log(err);
            callback(err, rows); 
        }
    );    
}
app.listen(3001);