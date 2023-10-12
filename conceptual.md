### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
try --> then
async/await

- What is a Promise?
a function to be fulfilled once the code is done running

- What are the differences between an async function and a regular function?
async functions have an await and have to fulfill a promise to run

- What is the difference between Node.js and Express.js?
Node is the script whereas Express is like a library that node can use

- What is the error-first callback pattern?
catch/then

- What is middleware?
software that is between an operating system and the applications running on it

- What does the `next` function do?
it uses middleware to run and executes the code after all the functions are finished

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
urls are incorect
the return is incorrect
there's no await function

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
