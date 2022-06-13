//process.env.NODE_ENV = 'test';
//process.env.NODE_ENV = 'local';
console.log("enviroment: "+process.env.NODE_ENV)
const { before } = require('mocha');
const Product = require('../models/productModel');


//clean up the database before and after each test
before((done) => { 
    Product.deleteMany({}, function(err) {});    
    done();
});

after((done) => {
    Product.deleteMany({}, function(err) {});    
    done();
});

