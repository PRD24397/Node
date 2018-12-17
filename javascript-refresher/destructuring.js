// object destructuring


const person = {
    name: "Prayag Desai",
    age : 200,
    greeting : function () {
        console.log('Hello ' + this.name );
    }
}

// to access the value of naeme we do in plain vanilla es6

const extractName = (person) => {
    return person.name;
}

console.log(extractName(person));

// using object destructuring 

const extractName1 = ( { name }) => {
    return name;
}
console.log(extractName(person));

// arrays destructing

hobbies = ['swimming','tennis','weight-lifting'];
const [hobby1,hobby2] = hobbies;
console.log(hobby1,hobby2);