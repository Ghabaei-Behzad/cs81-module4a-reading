/**
 * Weekly reading log and tracker--
 * Data Structure is an array of objects. Each object contains a string (day), a string (book title),
 * and a number (minutes).
 * new entries will be pushed to readingLog
 */

const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

/**
 * Summary: Adds a new reading session object to the global readingLog array.
 * Inputs: day (string), book (string), minutes (number).
 * Output: There is no output (modifies the array in place).
 * entry to the log
 */
function addReadBook(day, book, minutes) {
  // 1. Creates a new object literal using the parameters provided to the function
  const newEntry = { day, book, minutes };
  // 2. Uses the .push() method to append the new session to the end of the data array.
  readingLog.push(newEntry);
}

/**
 * Summary: Iterations are through the log to calculate the sum of all reading time.
 * Input: log (array of objects).
 * Output: total (number) representing the total minutes.
 * Returns total minutes spent reading all week
 */
function totalReadingMinutes(log) {
  // 3. Initializes a counter to store the running sum.
  let total = 0;
  // 4. A 'for...of' loop is used to visit every object inside the log array.
  for (let entry of log) {
  // 5.  Access the 'minutes' property of the current object and adds it to total.
    total += entry.minutes;
  }
  return total;
}

/** 
 * Summary: Determines which book title appears most frequently in the log.
 * Input: log (array of objects).
 * Output: returns maxBook (string) representing the title of the most read book.
 * Returns the book read most frequently.
*/
function mostReadBook(log) {
  // 6. We use an object as a 'frequency map' to count occurences of each book.
  const bookCounts = {};
  for (let entry of log) {
  // 7. Logic check: If book isn't in the map, start at 1, otherwise increment.
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }

  let maxBook = null;
  let maxCount = 0;
  // 8. This 'for...in' loop iterates over the keys of the frequency map object.
  for (let book in bookCounts) {
  // 9. Comparison: Updates maxBook if the current book's count is higher than the previous max.
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}

// Prints a summary of minutes read per day
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));
