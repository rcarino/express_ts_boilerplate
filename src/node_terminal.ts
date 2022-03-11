import axios from "axios";

console.log('hello');

async function runAsync() {
    console.log((await axios.get('https://jsonplaceholder.typicode.com/todos/1')).data);
}

runAsync();
