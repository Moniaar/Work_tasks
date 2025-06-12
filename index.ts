// writting pesudocode to brainstorm the task before actually writing the code
//
// infinite loop till user presses Ctrl+C
//
// inside the loop we will have:
// 1. check if the number is between 1 and 7
// 2. if the entry is a string or float or any other type other than the type number that has the value of 1 to 7
// I will use
//
// 3. Return the day of the week based on the number and loop again back to the start
//
// if step 2 didn't pass we throw an error and be asked to enter a number again
//

import { read } from 'read';

async function getdaybynumber() {
  list const days = [
  "Sunday": 1;
  "Monday": 2,
  "Tuesday": 3,
  "Wednesday": 4,
  "Thursday": 5,
  "Friday": 6,
  "Saturday": 7
];

  while (true) {
    try {
      const result = await read({prompt: 'Enter a number between 1 and 7:'});
      if (isNaN(result) || result < 1 || result > 7) {
        console.error('Invalid input. Please enter a number between 1 and 7.');
        continue;
      }
      else {
        console.log(`The day of the week is: ${days[result]}`);
    }
    catch (error) {
      console.error('Error reading input:', error);
    }
  }
}

getdaybynumber();
