const controller = new AbortController();
async function getData() {
    try {
        const data = await fetch('https://httpstat.us/200?sleep=5000', { signal: controller.signal })
            .then(res=>console.log(res));
    } catch (error) {
        console.log(error);
    }
}
await getData();

setTimeout(() => controller.abort(), 3000)