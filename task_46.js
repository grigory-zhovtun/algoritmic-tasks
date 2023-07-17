"use strict";

// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.
// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

function centuryFromYear(year) {
    const parsedYear = parseInt(year, 10);

    // Calculate the century
    const century = Math.ceil(parsedYear / 100);

    // Determine the suffix for the century
    let suffix;
    const lastDigit = century % 10;
    if (lastDigit === 1 && century !== 11) {
        suffix = 'st';
    } else if (lastDigit === 2 && century !== 12) {
        suffix = 'nd';
    } else if (lastDigit === 3 && century !== 13) {
        suffix = 'rd';
    } else {
        suffix = 'th';
    }

    // Construct the result string
    const result = century + suffix;

    return result;
}

console.log(centuryFromYear(3500))