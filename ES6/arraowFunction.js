
var add = (first,second) => {
    return first + second; 
} 

var add = (first,second) => first + second;

var addAndMultiple = (first,second) => ({ add: first + second, multiply: first * second});

function addNumber(num) {
    return function(value) {
        return num + value;
    };
}

var addNumber = num => value => num+value;