class User{
    constructor(name,email,city){
        this.name=name;
        this.email=email;
        this.city=city;
    }
    printData(){
        console.log(`Name: ${this.name} Email: ${this.email}  City: ${this.city}`)
    }
}

const User1=new User("Amit","example1@gmail.com","nagar")
User1.printData()
const User2=new User("Aditya","example2@gmail.com","pune")
User2.printData()