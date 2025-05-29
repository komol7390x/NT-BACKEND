calc = (a, b) => ({ A: n => a * n, B:n=>b*n})
const { A: x, B: y } = calc(4, 3)
console.log(x(3)+y(2)) //18
