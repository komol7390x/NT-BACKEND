let arr1 = [1, 2, 3];
arr1=arr1.map((x) => x * x);
console.log(arr1);
// -----------------------------------
let arr2 = [5,10, 15, 20, 25];
arr4=arr2.filter(val => val >= 20);
console.log(arr4);
// -----------------------------------
let obj = [
    { ism: "Ali", yosh: 20 },
    {ism:"Vali",yosh:25}
]
let res1 = [...obj].find(key =>key.yosh>20)
console.log(res1);
// -----------------------------------
let arr3 = ["olma", "anor", "olcha","banan"];
if (arr3.includes("olma")) {
    console.log("Olma bor");
}
// -----------------------------------
console.log(arr3.indexOf("banan"));
// -----------------------------------
console.log(arr2.filter(x=>x%2));
// -----------------------------------
console.log(arr3.map(x=>x.toUpperCase()));
// -----------------------------------
