var x = 0;
var y =0;
 
var obj = {x,y}; 
var randomKeyString = 'other';
var combined = {
    ['one' + randomKeyString]: 'some value',
};

var obj2 = {
    x,
    methodA() {console.log('method A');},
    methodB() {return 0;},
};

var list = [0,1];
var [
    item1,
    item2,
    item3 = -1,
] = list;
[item2, item1] = [ item1, item2];
var obj = {
    key1 : 'one',
    key2: 'two',
};
var {
    key1: newKey1,
    key2,
    key3 = 'default key3 value',
} = obj;