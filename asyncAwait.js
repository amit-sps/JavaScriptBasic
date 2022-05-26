const axios=require("axios")
console.log("Async Await")

let getData=async()=>{
    try{
        const {data}= await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(data)

    } catch(err) {

    }
}
getData();