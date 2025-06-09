function introduce() {
    console.log(`Men ${this.name}, yoshim ${this.age}, kasbim ${this.job}.`);
}
const person = {
    name: "Shahzod",
    age: "19",
    job: 'tutor'
};
// introduce.call(person)
// ---------------------------------

function afterNYears(obj, year) {
    for (let val in obj) {
        obj[val]+=year
    }
    return obj
}
console.log(afterNYears({
    "Joel": 32,
    "Fred": 44,
    "Reginald": 65,
    "Susan": 33,
    "Julian": 13
}, 2));

// ---------------------------------
function checkPass(str="") {
    let str2 = str.split(" ");
    let res = [];
    let str1=""
    for (let i = 0; i < str2.length; i++){
        if (str2[i].length > 3) {
            str1 = `${str2[i][0]}${str2[i].length - 2}${str2[i].at(-1)}`
            res.push(str1);
            continue
        }
        res.push(str2[i])
    }
    res=res.join(" ")
    return res
}
// ---------------------------------

function checkPass2(str="") {
    let str2 = str.split(" ").map(x=> x.length>3?`${x[0]}${x.length-2}${x.at(-1)}`:x).join(" ")
    return str2
}
// ----------------------------------
const input = "Every developer likes to mix kubernetes and javascript";
console.log(checkPass(input));
console.log(checkPass2(input));


