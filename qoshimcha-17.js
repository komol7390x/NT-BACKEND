var differenceOfSums = function (n, m) {
    let numArr = [];
    let sum = 0
    let inter=0
    for (let i = 1; i <= n; i++){
        if (i % m == 0) {
            inter+=i
        } else {
            sum += i
        }
    }
    sum-=inter
    return sum
};
// console.log(differenceOfSums(5, 1));
// ----------------------------------------------
var findWordsContaining = function (words, x) {
    let arr = [];
    for (let i = 0; i < words.length; i++){
        if (words[i].includes(x)) {
            arr.push(i)
        }
    }
    return arr
};
words = ["abc", "bcd", "aaaa", "cbc"], x = "a"
const res = findWordsContaining(words, x);
// console.log(res);
// ----------------------------------------------
var triangleType = function (nums) {
    [a, b, c] = nums
    console.log(a,b,c);
    if (a == b && b == c && a==c) {
        return 'equilateral'  
    } else if ((a == b || b == c || a == c) &&(a + b > c && a + c > b && b + c > a)) {
        return "isosceles"
    } else if (a + b > c && a + c > b && b + c > a)
    {
        return 'scalene' 
    } else {
        return 'none'
    }
    
};
console.log(triangleType([3, 3, 3]));
console.log(triangleType([3, 4, 5]));
console.log(triangleType([3, 4, 4]));
console.log(triangleType([3,5,9]));
