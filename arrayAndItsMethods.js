// ***************#Array
let array1=["data1","data2","data3","data4"]

// ********Methods
// 1.at methods returns the data at given index
console.log(array1.at(2))
// 2.concat method returns the new array by adding another array or vgiven value
console.log(array1.concat("amit","sumit","pramit"))
let anotheArray=["data5","data6","data7"]
console.log(array1.concat(anotheArray))
// 3.Find Index methods returns the index number of data if available else -1
console.log(array1.findIndex((d)=>d=="data3"))
// 4.Push
array1.push("amit")
console.log(array1)
// 5.Pop
array1.pop()
console.log(array1)
// 6.forEach
console.log("ForEach Method")
array1.forEach((d,i,a)=>{console.log(`data: ${d}  index: ${i}  array: ${a}`)})
// 7.Map
console.log("Map Method")
array1.map((d,i,a)=>{console.log(`data: ${d}  index: ${i}  array: ${a}`)})

// 8.filter

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
  
//   Filtering data having salary>40
console.log(data.filter((d)=>d.salary>40000))
// 9.Reduce

// calculating total salary of each employe
console.log("reduce method")
console.log(`total Salary:  ${data.reduce((prev,crnt)=>prev+crnt.salary,0)}`)