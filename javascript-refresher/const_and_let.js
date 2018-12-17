const name = "Prayag Desai";
let hobby = "reading";
var age  = 21;

name = "Parth";
hobby = "cricket";


// const cannot be assigned new value this leads to error
// let can be assigned new value 

function information(username, userhobby, userage){
    return("username is " + username + "user hobby is" + userhobby + "user age is " + userage);
}

console.log(information(name, hobby, age));