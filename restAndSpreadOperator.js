console.log("***************#Rest and Spread Operator")


// ... is used for both Rest and Spread operator
let Players=["MSD","Rohit","Virat"]
let players2=["Rahul","virendra"]
                        //  Rest...
const fevPlayer=(player1,...rest)=>{
    console.log(player1)
    console.log(rest)
}
        //   spread
fevPlayer(...Players,...players2)