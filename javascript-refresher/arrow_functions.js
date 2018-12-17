var name = "Prayag Desai";
var hobby = "reading";
var age  = 21;

const information = (username, userhobby, userage) => {
    return("username is  " + username + "user hobby is" + userhobby + "user age is " + userage);
}

console.log(information(name, hobby, age));

const add = (a, b) => {
    return (a + b);
}
console.log(add(1, 2));

// this can also be written as 

const add1 = (a, b) => a+b;
console.log(add1(1,4));

// for a single argument no need to place bracket for argument

const addOne = a => a+1
console.log(addOne(100));

// for no argument place empty paranthesis
const add12 = () => 100+100
console.log(add12())