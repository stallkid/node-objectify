'use strict';

let expect = require('chai').expect;
let index = require('../index');

describe('#objectify', function () {
    it('should objectify an array', function () {
        let name = 'primeiro';
        let array = [1,2,3];
        let result = index.objectify(name, array);
        expect(result).to.deep.equal({'primeiro': [[1,2,3]]});
    });
    it('should objectify two arrays', function () {
        let name = 'primeiro';
        let arrayOne = [1, 2, 3];
        let arrayTwo = [1, 2, 3];
        let result = index.objectify(name, arrayOne, arrayTwo);
        expect(result).to.deep.equal({ 'primeiro': [[1, 2, 3], [1,2,3]] });
    });
    it('should objectify tree arrays', function () {
        let name = 'primeiro';
        let arrayOne = [1, 2, 3];
        let arrayTwo = [1, 2, 3];
        let arrayTree = ['1','2','3'];
        let result = index.objectify(name, arrayOne, arrayTwo, arrayTree);
        expect(result).to.deep.equal({ 'primeiro': [[1, 2, 3], [1, 2, 3], ['1', '2', '3']] });
    });
});

describe('#Merge Arrays', function () {
    it('should merge two arrays into one object', function () {
        let arrOne = [1, 2, 3, 4];
        let arrTwo = ['one', 'two'];
        let result = index.mergeArrayToObject(arrOne, arrTwo);
        expect(result).to.deep.equal({ 'object': [[1, 2, 3, 4], ['one', 'two']] });
    });
    it('should merge tree arrays into one object', function () {
        let arrOne = [1, 2, 3, 4];
        let arrTwo = ['one', 'two'];
        let arrTree = ['one',2 , 'tree'];
        let result = index.mergeArrayToObject(arrOne, arrTwo, arrTree);
        expect(result).to.deep.equal({ 'object': [[1, 2, 3, 4], ['one', 'two'], ['one', 2, 'tree']] });
    });
    it('should merge four arrays into one object', function () {
        let arrOne = [1, 2, 3, 4];
        let arrTwo = ['one', 'two'];
        let arrTree = ['one', 2, 'tree'];
        let arrFour = [1, 'two', 3, 'four'];
        let result = index.mergeArrayToObject(arrOne, arrTwo, arrTree, arrFour);
        expect(result).to.deep.equal({ 'object': [[1, 2, 3, 4], ['one', 'two'], ['one', 2, 'tree'], [1, 'two', 3, 'four']] });
    });
});
