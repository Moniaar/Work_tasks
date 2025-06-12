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
  // assigned the days of the week to an object with keys as numbers
  const days: { [key: number]: string } = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday'
  };

  while (true) {
    try {
      const result = await read({ prompt: 'Enter a number between 1 and 7: ' });
      // handling exit condition for the user if they want to stop
      if (result.toLowerCase() === 'exit') {
        console.log('Exiting program...');
        process.exit(0);
      }
      // Convert the input to a number for it to be checked
      // handling edge cases where the input is not a number
      const daynumber = Number(result);
      if (isNaN(daynumber) || daynumber < 1 || daynumber > 7) {
        console.error('Invalid input. Please enter a number between 1 and 7.');
        continue;
      } else {
        console.log(`The day of the week is: ${days[daynumber]}`);
      }
    } catch (error) {
      console.error('Error reading input:', error);
    }
  }
}


getdaybynumber();
