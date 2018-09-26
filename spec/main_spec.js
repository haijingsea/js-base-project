"use strict";
var _ = require("lodash");
var chai = require("chai");
var mocha = require("mocha");
var expect = chai.expect;

var main = require("../lib/main.js");

describe("main", function(){
    it("should return 'helloWord'", function(){
        expect(main()).to.equal('helloWord');
    });
});