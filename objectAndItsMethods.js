console.log("************Learing Objects And it Methods***********")

let obj1= {
    name:"Amit Thakur",
    address: "Nagar",
    printData(){
        console.log(`Hii, I'm ${this.name} from ${this.address}`)
    }
}
let anotherObject={
    state: "Maharashtra",
    email: "amitthakur.softprodigy@gmail.com"
}
obj1.printData()

// 1.Object.keys:-geting all the keys from object.............
console.log(Object.keys(obj1))
// 2.Object.value:- geting all the value from object.............
console.log(Object.values(obj1))
// 3.Object.entires:-creates a nested array of the key/value pairs of an object.
console.log(Object.entries(obj1))
// 3.Object.assign:-Merge data from one object to another object
let newObject=Object.assign(obj1,anotherObject)
console.log(newObject)
//  4.Merge objects using the spread operator
 console.log("Spread Operator")
 let myobj1={name: "Amit Thakur"}
 let myObj2={Address: "Nagar"}
 let newObject2={...myobj1 , ...myObj2};
console.log(newObject2)
//  5.Freeze
const user = {
	username: 'Amit',
	password: 'Amit Thakur',
    address: {
        city: "Nagar",
        state: "maharashtra"
    }
};
console.log("freeze")
Object.freeze(user)
user.address.city="pune"
user.address.pincode=414001
console.log(user)
//  5.seal
console.log("Seal")
const user2 = {
	username: 'Amit',
	password: 'Amit Thakur',
    address: {
        city: "Nagar",
        state: "maharashtra"
    }
};

Object.seal(user2)
user2.address.city="patna"
user2.address.state="bihar"
user2.address.pincode=414001
delete user2.username
console.log(user2)

