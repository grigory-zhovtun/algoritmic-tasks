function translatePigLatin(str) {

    const vowel = /^[aeiouy]+/
    const consonant = /^[bcdfghjklmnpqrstvwxyz]+/

    if (vowel.test(str)) {
        return str + 'way'
    } else if (consonant.test(str)) {
        return str.replace(consonant, '') + str.match(consonant) + 'ay';
    }
}

console.log(translatePigLatin("consonant"));

/**
 * Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first 
consonant or consonant cluster, move it to the end of 
the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. 
Input strings are guaranteed to be English words in all lowercase.

 */