var chai = require('chai');
var assert = chai.assert;
var func = require('../js/funciones');

describe('Preubas SA', function () {
    
    describe('Prueba primo', function (){
        it('numero', function (){
            var num = 5;
            fcn = func.funcionpr(5);
            assert.equal(fcn,true);  
        })
    })
})