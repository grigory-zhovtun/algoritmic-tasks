function reverseWords(str: string): string {
  
  let result: string = "";

  const arr = str.split(" ").map(word => {
    result += word.split("").reverse().join("") + " ";
  })

  return result.substring(0, result.length-1);
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."))