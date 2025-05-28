// @ -1, 25 + 0, 0 @@
const arr = [
    {
        id: 1,
        catagory: "juice",
        name: "Olmali_sok"
    },
    {
        id: 2,
        catagory: "juice",
        name: "Ayron"
    },
    {
        id: 3,
        catagory: "toys",
        name: "toys"
    }
]
let obj = {}
for (let key of arr) {
    obj[key.name] = key
}
console.log(obj);


