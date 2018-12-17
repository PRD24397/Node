const array1 = ['Prayag desai', 'is', 'a student'];
array2 = [...array1];
// ... => spread opeator used for coppying objects and arrays
console.log(array2);

const person = {
    name: "Prayag Desai",
    age : 200,
    greeting : function () {
        console.log('Hello ' + this.name );
    }
} 

coppied_person = {...person};
console.log(coppied_person);

// rest operator

function returnArgs(...args){
    return args
}
console.log(returnArgs(1,2,3,4,5));
