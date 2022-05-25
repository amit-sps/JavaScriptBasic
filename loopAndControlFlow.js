// *************#Loops

// 1. For Loop
// printing square of  each number from 1 to 10 using for loop
console.log("Using for Loop");
for (let i = 1; i <= 10; i++) {
  console.log(`${i}^2 = ${i * i}`);
}

// 2.While Loop
// printing square of  each number from 1 to 10 using while loop
console.log("Using  While Loop");
let i = 1;
while (i <= 10) {
  console.log(`${i}^2 = ${i * i}`);
  i++;
}
// 3.Do While Loop
// printing square of  each number from 1 to 10 using do while loop
console.log("Using do While Loop");
let j = 1;
do {
  console.log(`${j}^2 = ${j * j}`);
  j++;
} while (j <= 10);

// *************#Controll Flow

let data = [
  {
    name: "amit",
    state: "maharashtra",
    age: 21,
    salary: 40000,
    gender:"male"
  },
  {
    name: "aditya",
    state: "bihar",
    age: 10,
    salary: 30000,
    gender:"male"
  },
  {
    name: "omkar",
    state: "maharashtra",
    age: 22,
    salary: 50000,
    gender:"male"
  },
  {
    name: "anurag",
    state: "bihar",
    age: 15,
    salary: 35000,
    gender:"male"
  },
  {
    name: "Anshika",
    state: "maharashtra",
    age: 15,
    salary: 35000,
    gender:"female"
  },
  {
    name: "Pritiii",
    state: "UP",
    age: 15,
    salary: 45000,
    gender:"female"
  }
];

// 1.If
// Printing name from data if age>18
console.log("if controll flow")
data.forEach((d) => {
  if (d.age > 18) {
    console.log(d.name);
  }
});

// 2.If else
// checking even or odd number from 1 to 10 using if else
console.log("if else controll flow")
for(let i=1;i<=10;i++){
    if(i%2==0)
    console.log(`${i} is an even number`)
    else
    console.log(`${i} isn't even number`)
}
// 3.Switch 
// Printing gender of employe from data usin switch
console.log("Switch controll flow")
data.forEach((d)=>{
    switch(d.gender){
        case "male":
            console.log(`${d.name} is male`)
            return;
        case "female":
            console.log(`${d.name} is female`)
            return;
    }
})

