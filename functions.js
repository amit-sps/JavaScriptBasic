// *************#Functions


// *Normal Function

function Fun1(){
    console.log("Normal Function!")
}
Fun1()
// *parameterise Function
function Fun2(name,city){
    console.log("parameterise function")
    console.log(`My name is ${name} from ${city}`)
}
Fun2("amit","ahmednagar")

// *function for returning value!
// function for return square of a given  number

function square(n){
    return n*n;
}
console.log(`square of 4 is ${square(4)}`)
console.log(`square of 9 is ${square(9)}`)