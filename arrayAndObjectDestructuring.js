console.log("****************#Arary and Object Destructuring")

// # Array Destructuring
// without rest operator
let array=["Amit","Nagar","Maharashtra"]
let [name,city,state]=array
console.log(name,city,state)
// with rest operator

let friends=["Amit","Aditya","Omkar","Pankaj","Anurag"]
let [friend1,friend2,friend3,...rest]=friends

console.log(`f1: ${friend1}  f2: ${friend2} f3: ${friend3} rest: ${rest}`)

// # Object Destructuring

let obj={fname:"Amit",lname:"Thakur",city:"nagar",state:"maharashtra"}
let {fname:FirstName,lname:LastName,city:citys,...restop}=obj
console.log(FirstName, LastName , citys ,restop)