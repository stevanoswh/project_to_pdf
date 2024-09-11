// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Create an array of random colors
const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

// Define a function that returns a random greeting
function getRandomGreeting() {
  const greetings = ['Hello', 'Hi', 'Hey', 'Howdy', 'Greetings'];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

// Log some random output
console.log(`${getRandomGreeting()}! Your lucky number is ${randomNumber} and your color of the day is ${randomColor}.`);

// Generate a random boolean
const randomBoolean = Math.random() < 0.5;

// Create an object with random properties
const randomObject = {
  id: Math.random().toString(36).substr(2, 9),
  isActive: randomBoolean,
  score: Math.floor(Math.random() * 1000)
};

console.log('Random object:', randomObject);
