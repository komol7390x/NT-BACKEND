function introduce() {
    console.log(`Men ${this.name}, yoshim ${this.age}, kasbim ${this.job}.`);
}
const person = {
    name: "Shahzod",
    age: "19",
    job: 'tutor'
};
introduce.call(person)
