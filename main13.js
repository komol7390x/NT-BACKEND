const h1 = document.createElement('h1');
for (let i = 0; i < 3; i++){
    const p = document.createElement('button');
    p.textContent = `TASK ${i + 1}`
    p.style.marginLeft = "10px"
    p.style.color = 'red'
    p.style.backgroundColor = 'white';
    p.style.border = '1px solid black';
    p.style.borderRadius = '3px';
    p.style.width = '80px';
    p.style.height = '25px';
    p.style.fontSize='15px'
    h1.appendChild(p);
}
document.body.appendChild(h1)
