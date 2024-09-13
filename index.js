

console.log('-----------------------------------');
console.log('%cPart 1: Fizz Buzz', 'font-size: 16px');
console.log('-----------------------------------');


// Loop through all numbers from 1 to 100.
for (let i = 1; i <= 100; i++) {
    // If a number is divisible by both 3 and 5, log “Fizz Buzz.” 
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } 
    // If a number is divisible by 3, log “Fizz.”
    else
        if (i % 3 === 0) {
            console.log("Fizz");
        // If a number is divisible by 5, log “Buzz.”
        } else
            if (i % 5 === 0) {
                console.log("Buzz");
            // If a number is not divisible by either 3 or 5, log the number.
            } else {
                console.log(i);
            }
}

console.log('-----------------------------------');
console.log('%cPart 2: Prime Time', 'font-size: 16px');
console.log('-----------------------------------');

// Declare an arbitrary number, n.
const n = 10; 
let num = n;
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
    for (let num = n; num <= 100; num++) {
        let isPrime = true;

        if (num <= 1) {
            isPrime = false;
        } else if (num <= 3) {
            isPrime = true;
        } else if (num % 2 === 0 || num % 3 === 0) {
            isPrime = false;
        } else {
            for (let i = 5; i * i <= num; i += 6) {
                if (num % i === 0 || num % (i + 2) === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
// As soon as you find the prime number, log that number and exit the loop.
        if (isPrime) {
            console.log(num);
            break;
            // Change "break" to "continue" to display all numbers 1..100
            // Exit the for loop once we find the prime number
        }
}


console.log('-----------------------------------');
console.log('%cPart 3: Prime Time', 'font-size: 16px');
console.log('-----------------------------------');


// CSV data
const data = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// Declare variables
// Amount of rows
const rows = [];
// Current row
let currentRow = [];
// Current selected cell
let temp = '';

// Process each character
// Start cycle from 1 to last symbol of Data


for (let i = 0; i < data.length; i++) {
    const char = data[i];
    // If the character is a new row - "\n"
    if (char === '\n') {
        if (temp.length > 0) {
            // add temp (the current cell value) to currentRow
            currentRow[currentRow.length] = temp;  
            temp = '';
        }
        // add currentRow to rows
        rows[rows.length] = currentRow;
        // reset currentRow for the next row

        currentRow = [];
// If it's comma (",")
    } else if (char === ',') {
        if (temp.length > 0) {
// add to temp в currentRow 
            currentRow[currentRow.length] = temp;  
// reset "temp"
            temp = '';
        }
    } else {
// If it's neither comma nor backslash add it to temp
        temp += char;
    }
}

// Add the last element to rows
if (temp.length > 0) {
    currentRow[currentRow.length] = temp;  
}
if (currentRow.length > 0) {
    rows[rows.length] = currentRow;  
}

// Determine the maximum width of each column or everything will be screwed
const columnWidths = [];
for (let i = 0; i < rows[0].length; i++) {
    let maxWidth = 0;
    for (let j = 0; j < rows.length; j++) {
        if (rows[j][i].length > maxWidth) {
            maxWidth = rows[j][i].length;
        }
    }
    columnWidths[i] = maxWidth;
}

// Print the header row
let headerRow = '';
for (let i = 0; i < rows[0].length; i++) {
    headerRow += rows[0][i];
    const padding = columnWidths[i] - rows[0][i].length + 2; // Adding space for border
    for (let j = 0; j < padding; j++) {
        headerRow += ' ';
    }
    if (i < rows[0].length - 1) {
        headerRow += '|';
    }
}
console.log(headerRow);

// Print the separator row
let separatorRow = '';
for (let i = 0; i < columnWidths.length; i++) {
    separatorRow += '-'.repeat(columnWidths[i] + 2); // Adding padding for column border
    if (i < columnWidths.length - 1) {
        separatorRow += '+';
    }
}
console.log(separatorRow);

// Print all data rows
for (let i = 1; i < rows.length; i++) {
    let dataRow = '';
    for (let j = 0; j < rows[i].length; j++) {
        dataRow += rows[i][j];
        const padding = columnWidths[j] - rows[i][j].length + 2; // Adding space for border
        for (let k = 0; k < padding; k++) {
            dataRow += ' ';
        }
        if (j < rows[i].length - 1) {
            dataRow += '|';
        }
    }
    console.log(dataRow);
}
