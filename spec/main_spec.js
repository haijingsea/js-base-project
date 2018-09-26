"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");

describe("main", function(){
    it("should return 'helloWord'", function(){
        expect(main()).to.equal('helloWord');
    });
});