'use strict';

let expect = require('chai').expect;
let index = require('../index');

describe('#objectify', function () {
    it('should objectify an array', function () {
        let name = 'first';
        let array = [1,2,3];
        let result = index.nameObjectify(name, array);
        expect(result).to.deep.equal({'first': [[1,2,3]]});
    });
    it('should objectify two arrays', function () {
        let name = 'first';
        let arrayOne = [1, 2, 3];
        let arrayTwo = [1, 2, 3];
        let result = index.nameObjectify(name, arrayOne, arrayTwo);
        expect(result).to.deep.equal({ 'first': [[1, 2, 3], [1,2,3]] });
    });
    it('should objectify three arrays', function () {
        let name = 'first';
        let arrayOne = [1, 2, 3];
        let arrayTwo = [1, 2, 3];
        let arrayTree = ['1','2','3'];
        let result = index.nameObjectify(name, arrayOne, arrayTwo, arrayTree);
        expect(result).to.deep.equal({ 'first': [[1, 2, 3], [1, 2, 3], ['1', '2', '3']] });
    });
});

describe('#Merge Arrays', function () {
    it('should merge two arrays into one object', function () {
        let arrOne = [1, 2, 3, 4];
        let arrTwo = ['one', 'two'];
        let result = index.mergeArrayInObject(arrOne, arrTwo);
        expect(result).to.deep.equal({ 'object': [[1, 2, 3, 4], ['one', 'two']] });
    });
    it('should merge three arrays into one object', function () {
        let arrOne = [1, 2, 3, 4];
        let arrTwo = ['one', 'two'];
        let arrTree = ['one',2 , 'three'];
        let result = index.mergeArrayInObject(arrOne, arrTwo, arrTree);
        expect(result).to.deep.equal({ 'object': [[1, 2, 3, 4], ['one', 'two'], ['one', 2, 'three']] });
    });
    it('should merge four arrays into one object', function () {
        let arrOne = [1, 2, 3, 4];
        let arrTwo = ['one', 'two'];
        let arrTree = ['one', 2, 'three'];
        let arrFour = [1, 'two', 3, 'four'];
        let result = index.mergeArrayInObject(arrOne, arrTwo, arrTree, arrFour);
        expect(result).to.deep.equal({ 'object': [[1, 2, 3, 4], ['one', 'two'], ['one', 2, 'three'], [1, 'two', 3, 'four']] });
    });
});

describe('#Merge to Object', function () {
    it('should bring one array as object', function () {
        let arrOne = [1, 2, 'three', 'four'];
        let result = index.mergeToObject(arrOne);
        expect(result).to.deep.equal({ 'object' : {'0': {'0': 1, '1': 2, '2': 'three', '3': 'four' }}});
    });
    it('should bring two arrays as object', function () {
        let arrOne = [1, 2, 'three', 'four'];
        let arrTwo = ['foo', 'bar'];
        let result = index.mergeToObject(arrOne,arrTwo);
        expect(result).to.deep.equal({ 'object': { '0': { '0': 1, '1': 2, '2': 'three', '3': 'four' }, '1': {'0': 'foo', '1': 'bar'}}});
    });
    it('should bring three arrays as object', function () {
        let arrOne = ['awesome', 2, 'element', 4];
        let arrTwo = ['foo', 'bar'];
        let arrTree = ['john', 2, 'doe'];
        let result = index.mergeToObject(arrOne,arrTwo,arrTree);
        expect(result).to.deep.equal( {'object': { '0': { '0': 'awesome', '1': 2, '2': 'element', '3': 4 }, '1': { '0': 'foo', '1': 'bar' }, '2': { '0': 'john', '1': 2, '2': 'doe' }}});
    });
});
