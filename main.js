// TASK-1
function greet() {
    console.log(`Salom ${this.name}`);
}
const user1 = {
    name: "Jamshid",
    age:29
}
const user2 = {
    name: "Javohir",
    age:27
}
const user3 = {
    name: "Adham",
    age:19
}
// greet.call(user1)
// greet.call(user2)
// greet.call(user3)
// ---------------------------------------------
function showInfo() {
    console.log(this.name,this.age);
}
// showInfo.apply(user1)
// showInfo.apply(user2)
// showInfo.apply(user3)
// ---------------------------------------------
function getFullName() {
    return `ISM: ${this.name}, YOSH: ${this.age} `
}
let getEmployeeName = getFullName.bind(user2);
console.log(getEmployeeName());

user1.name.replace()