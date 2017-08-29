const expect = require('chai').expect;
let app1 = require('../app/app.js').Phone;
let app2 = require('../app/app.js').Samsung;

describe("Phone", function() {
    let mobile;
    //beforeEach function is executed before all the test cases
    //I am using it to create an instance of Phone class.

    beforeEach(function() {
        mobile = new app1();
    });
    // First test
    it("has 2 batteries", function() {
        expect(mobile.Battery).to.be.equal(2);
    });
    // Second test
    it("has 3 buttons", function() {
        expect(mobile.Buttons).to.be.equal(3);
    });
  

});

describe("Samsung product", function() {
    var Samsung;
    beforeEach(function() {
        Samsung = new app2();
    });
    // Fourth test
    it("has a battery", function() {
        expect(Samsung.Battery).to.be.equal(2);
    });
    // Fifth test
    it("has 3 buttons", function() {
        expect(Samsung.Buttons).to.be.equal(3);
    });
    // Sixth test

    it("you can buy a phone", function() {
        expect(Samsung.productPrice("simple")).to.be.equal(50000);
    });
    // Sevent test
    it("is an instance of its parent class Phone", function() {
        expect(Samsung instanceof app1).to.be.equal(true)
    });

 });