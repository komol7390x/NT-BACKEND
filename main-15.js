var singleNumber = function (nums) {
    let map1=new Map()
    for (let item of nums) {
        map1.set(item, map1.has(item) ? map1.get(item) + 1 : 1);
    }
    console.log(map1);
    for (let [key, val] of map1) {
        if (val == 1) {
            return key
        }
    }
};
singleNumber([2, 2, 1])