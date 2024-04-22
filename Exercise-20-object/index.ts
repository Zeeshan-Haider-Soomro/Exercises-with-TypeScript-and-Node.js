// write a program that creates objects containing these items.

let person_name :string = 'Zeeshan';
const personName_Array :string[] = ["person", "vehical", "drinks"];

// datatype of person object
interface person {
    age:number,
    name:string,
    nationality:string,
    student:boolean
}
// person object
let person:person ={ 
    age:23,
    name: "Zeeshan",
    nationality: "pakistan",
    student: true
}
// print person
console.log(person);

// datatype of car object
interface car {
    maker:string,
    color:string,
    automatic:boolean
}

// car object
let car = {
    maker: "toyota",
    color: "white",
    automatic: true
}
console.log(car);

// datatype of drink object
interface drink {
    brand:string,
    flavour:string,
    price: number
}

// drink object
let drink ={
    brand: "pakola",
    flavour: "lycee",
    price: 250
}

console.log(drink);





















































