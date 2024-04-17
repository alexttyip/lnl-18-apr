export {};

type UserResponse = {
  name: string;
  favouriteNumbers: number[];
};

const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

// We're saying to TS "Trust me, `json` is of shape `UserResponse`"
const json = (await response.json()) as UserResponse;

// TS will now provide type-checking and intellisense based on the specified type
const name = json.name;
const favouriteNumbers = json.favouriteNumbers;

console.log(name);
console.log(favouriteNumbers[0]);
