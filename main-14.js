const obj = [];
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(((item) => item.json()))
    .then((res) => {
        for (let item of res) {
            obj.push({ id: item.id, title: item.title })
        }
    })
