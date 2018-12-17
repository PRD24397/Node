const person = {
    name: "Prayag Desai",
    age : 200,
    greeting : function () {
        console.log('Hello ' + this.name );
    }

person.greeting();

// you cannot use arrow function in functions of objects

// another way to write the above function is 

const person1 = {
    name: "Prayag Desai",
    age : 200,
    greeting() {
        console.log('Hello ' + this.name );
    }
}

person1.greeting();
