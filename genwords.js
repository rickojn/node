const fs = require('fs');

function generateRandomString() {
  const vowels = 'aeiou';
  const consonants = 'cdk';
  const maxLength = Math.floor(Math.random() *6) + 2;

  let string = '';
  let isVowel = Math.random() < 0.5;

  while (string.length < maxLength) {
    if (isVowel) {
      string += vowels[Math.floor(Math.random() * vowels.length)];
      isVowel = false;
    } else {
      string += consonants[Math.floor(Math.random() * consonants.length)];
      isVowel = true;
    }
  }

  return string;
}

function generateFile(fileName, numStrings) {
    let uniqueStrings = new Set();
    let content = '';
  
    while (uniqueStrings.size < numStrings) {
      const randomString = generateRandomString();
      uniqueStrings.add(randomString);
    }
  
    uniqueStrings.forEach((str) => {
      content += str + '\n';
    });
  
    fs.writeFileSync(fileName, content.trim());
}

const fileName = 'output.txt';
const numStrings = 32000;

generateFile(fileName, numStrings);
console.log(`File "${fileName}" with ${numStrings} strings has been generated.`);
