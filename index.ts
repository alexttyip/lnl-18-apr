export {};

const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

// `json` is implicitly `any`
const json = await response.json();

// that means TS cannot verify the shape of the object
const name = json.name;

console.log(name);
