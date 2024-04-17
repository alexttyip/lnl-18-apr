export {};

type UserResponse = {
  name: string;
  favouriteNumbers: number[];
};

const validateUserResponse = (res: unknown): res is UserResponse => {
  return (
    typeof (res as UserResponse).name === "string" &&
    Array.isArray((res as UserResponse).favouriteNumbers)
  );
};

const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

// `json` is implicitly `any`
const json = await response.json();

if (validateUserResponse(json)) {
  // All good! The type of json is narrowed to `UserResponse`
  // TS will now provide type-checking and intellisense based on the type
  const { name, favouriteNumbers } = json;

  console.log(name);
  console.log(favouriteNumbers[0]);
} else {
  console.log("uh oh");
}
