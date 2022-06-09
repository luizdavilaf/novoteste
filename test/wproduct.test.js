const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const server = require("../server");
const ProductModel = require('../models/productModel');
chai.use(chaiHttp);

chai.request(server);
console.log(process.env.NODE_ENV);
it("should verify that we have 0 products in the DB", (done) => {
  chai.request(server)
    .get("/products")
    .end((err, res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body.data).to.be.an("array");
      expect(res.body.data.length).to.be.equal(0);
      done();
    });
});

it("POST a valid product", (done) => {
  let product = {
    title: "Test Product",
    description: "Test Product Description",
    price: 100,
    category: "categoria1",
  };
  chai.request(server)
    .post("/products")
    .send(product)
    .end((err, res) => {
      expect(res.status).to.be.equal(200);
      done();
    });
});

it("should NOT POST a product without a price", (done) => {
  let product = {
    title: "Test Product 1 ",
    description: "Test Product Description",
    category: "lol",
    
  };
  chai.request(server)  
    .post("/products")
    .send(product)
    .end((err, res) => {
      expect(res.status).to.be.equal(500);
      done();
    });
});

it("should NOT POST a product without a category", (done) => {
  let product = {
    title: "Test Product 1 ",
    description: "Test Product Description",
    price: 100,
  };
  chai.request(server)
    .post("/products")
    .send(product)
    .end((err, res) => {
      expect(res.status).to.be.equal(500);
      done();
    });
});

it("should NOT POST a product without a title", (done) => {
  let product = {
    category: "lol",
    description: "Test Product Description",
    price: 100,
  };
  chai.request(server)
    .post("/products")
    .send(product)
    .end((err, res) => {
      expect(res.status).to.be.equal(500);
      done();
    });
});

it("search of more than one product", (done) => {
  //sending 2nd product
  let product = {
    title: "Test Product 2",
    description: "Test Product Description",
    price: 100,
    category: "categoria2",
  };
  chai.request(server)
    .post("/products")
    .send(product)
    .end((err, res) => {
      expect(res.status).to.be.equal(200);
    });

  //verifying 2 products
  chai.request(server)
    .get("/products")
    .end((err, res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body.data).to.be.an("array");
      expect(res.body.data.length).to.be.equal(2);
      
    });
    done();
});


it("search by category", (done) => {
    let category = "categoria2"    
    chai.request(server)
    .get('/products/search?category='+category)
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body.data).to.be.an("array");
        expect(res.body.data.length).to.be.equal(1);
        done();
      });
  });


  it("search by title", (done) => {
    let title = "Test Product"    
    chai.request(server)
    .get('/products/search?title='+title)
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body.data).to.be.an("array");
        expect(res.body.data.length).to.be.equal(2);
        done();
      });
  });


  
  it("search by id", (done) => {
    //pegando um produto e id
    chai.request(server)
    .get("/products")
    .end((err, res) => {
        let product5 = (res.body.data[0])  
        let id = (res.body.data[0]._id)        
        expect(res.status).to.be.equal(200);
        expect(res.body.data).to.be.an("array");
        
        //comparando com a busca pelo id
        chai.request(server)        
            .get('/products/'+id)
            .end((err, res) => {
            let productTest = (res.body.data)  
            expect(product5.title).to.be.equal(productTest.title);
            expect(product5.description).to.be.equal(productTest.description);            
            expect(product5.price).to.be.equal(productTest.price);
            expect(product5.category).to.be.equal(productTest.category);
            done();  
        });             
    });
  });

  it("edit fields of a product", (done) => {
    //pegando um produto e id
    chai.request(server)
    .get("/products")
    .end((err, res) => {
        let product6 = (res.body.data[0])  
        let id = (res.body.data[0]._id)        
        expect(res.status).to.be.equal(200);
        expect(res.body.data).to.be.an("array");

        //setando alterações
        let testProduct2 = {
            title: "Product changed",
            description: "Description changed",
            price: 999,
            category: "categoria99",
        };
        

        //enviando alterações
        chai.request(server)        
        .put('/products/'+id)
        .send(testProduct2)
        .end((err, res) => {
            expect(res.status).to.be.equal(200);
            let productResult = (res.body.data)
            // comparando se está diferente do produto buscado anteriormente            
            expect(product6.title).not.to.be.equal(productResult.title);
            expect(product6.description).not.to.be.equal(productResult.description);            
            expect(product6.price).not.to.be.equal(productResult.price);
            expect(product6.category).not.to.be.equal(productResult.category);
            done();
        });             
    });
  });

  it("delete by id", (done) => {
    //pegando um produto do banco e o seu id
    chai.request(server)
    .get("/products")
    .end((err, res) => {          
        let id = (res.body.data[0]._id)        
        expect(res.status).to.be.equal(200);
        expect(res.body.data).to.be.an("array");
        
        //deletando com a busca pelo id
        chai.request(server)        
            .delete('/products/'+id)
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                expect(res.body.data[0]).to.be.eql(undefined)
                done();  
        });             
    });
  });


  



/*.post(productController.setCategory) */
