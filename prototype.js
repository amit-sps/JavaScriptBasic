function Student(name) {
    this.name = name;
    this.gender = 'M';
}
Student.prototype.sayHii=function(){
    return `hii ${this.name}`
}

var studObj = new Student("amit");

console.log(studObj.sayHii())