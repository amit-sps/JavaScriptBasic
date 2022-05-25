// Variable Declaration
// With Var
var rollWithVar=123;
var nameWithVar="amit";
var addressWithVar="nagar"
console.log(`RollWithVar: ${rollWithVar} NameWithVar: ${nameWithVar} AddressWithVar: ${addressWithVar}`)
// With Let
let rollWithLet=123;
let nameWithLet="amit";
let addressWithLet="nagar"
console.log(`RollWithLet: ${rollWithLet} NameWithLet: ${nameWithLet} AddressWithLet: ${addressWithLet}`)
// With Const
const rollWithConst=123;
const nameWithConst="amit";
const addressWithConst="nagar"
console.log(`RollWithConst: ${rollWithConst} NameWithConst: ${nameWithConst} AddressWithConst: ${addressWithConst}`)
// Scope of Variable:-Local & Global
let globalVariable="GlobalVariable"
let fun=()=>{
    let localVar="Local Variable"
    console.log(localVar)
    console.log(globalVariable)
}
fun();
// Difference B/W Let, Const & Var
// Let & Const has block level scope
// We can't change const value

// ********#Data Types in Javascript
//1. Number
let num=123
console.log(typeof(num))
// 2. String
let str="amit thakur"
console.log(typeof(str))
// 3.Boolean
let bool1=false;
let bool2=true;
console.log(typeof(bool1))
console.log(typeof(bool2))

// 4.Null
let Null=null;
console.log(typeof(Null))

// 5.Undefine

let un;
console.log(typeof(un))

// 6.Bigint
let big=267268927298902898291820120180639926896929726929762792n;
console.log(typeof(big));
// 7.Object 

let obj1=[];
let obj2={};
console.log(typeof(obj1));
console.log(typeof(obj2));
