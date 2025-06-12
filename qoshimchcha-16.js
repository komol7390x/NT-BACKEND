const authorUrl = 'https://684967eb45f4c0f5ee714471.mockapi.io/products/komol7390x/LoginPassword';
const productUrl = 'https://684967eb45f4c0f5ee714471.mockapi.io/products/komol7390x/product';

const shifr = {a: 'cZf',b: 'Xkq',c: 'pDh',d: 'LmY',e: 'qJo',f: 'BaE',g: 'zWn',h: 'nVg',i: 'JtR',
    j: 'yAx', k: 'fLi', l: 'Ryb', m: 'MkU', n: 'oQz', o: 'tCv', p: 'HsA', q: 'dIe', r: 'KvM',
    s: 'xPu', t: 'UgT',u: 'AwR', v: 'qNb', w: 'SeX', x: 'WjK', y: 'bLq', z: 'Nyo',
    0: 'eTR',1: 'Wkz',2: 'fAb',3: 'QyJ',4: 'uXm',5: 'Bpo',6: 'nKs',7: 'ZqL',8: 'Ghv',9: 'YcD'
}
//   console.log(shifr);
  

async function register(login,pass) {
    const newPass = encode(pass);
    const product=addId()
    const obj = {
        username: login,
        password: newPass,
        product:product
    }
    await fetch(authorUrl, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body:JSON.stringify(obj)
    })
    
}
async function addId(id) {
    
}
async function showId(id) {
    
}
async function encode(pass) {
    
}
async function decode(oldPass,newPass) {
    
}

// register("Komol", '7390x');
