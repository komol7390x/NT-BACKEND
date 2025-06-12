const url = 'https://jsonplaceholder.typicode.com/users';
async function basaData() {
    const res = await fetch(url).then(res => res.json());
    console.log(res);

    // return res
}
function result() {
    const base = basaData()
    console.log(base);

    const wrapper = document.getElementById('wrapper');
    const container = document.createElement('div');
    const name = document.createElement('h1');
    const username = document.createElement('p');
    const email = document.createElement('p');
    const tel = document.createElement('h2');
    const web = document.createElement('h2');
    const companyName = document.createElement('p')
}
// result()
basaData()