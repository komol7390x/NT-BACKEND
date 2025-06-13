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
console.log(differenceOfSums(5, 1));
