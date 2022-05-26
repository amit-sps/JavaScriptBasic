console.log("**********#Callback Function")
let printName=(Name)=>{
    console.log(Name)
}
let callback=()=>{
    console.log("end")
}
let greet=(Name,printName,callback)=>{
    console.log("Good Morning!")
    printName(Name)
    callback()
}
greet("Amit",printName,callback)