'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//tirar duvida com professor.
const pigLatin = (word) => {
  let acertar = word.toLowerCase().trim();
  let position = positionFirstVowel(acertar);
  let newWord = acertar;

  if (position == 0) {
    newWord = acertar + "yay";
    return newWord;
  } else if (position > 0) {
    let part1 = acertar.substring(0, position);
    let part2 = acertar.substring(position);
    //substring se usa para separar a palavra, tem q colocar as 2 partes, onde comeca e termina
    //ex: "Hello"  text.substring(1, 4) ; resultado "ell"
    newWord = part2 + part1 + "ay";
    return newWord;
  } else if ((position == -1)) {
    newWord = acertar + "ay";
    return newWord;
  }

  //se a primeira letra for vogal, colocar "yay" no final da palavra. ex: eletanteyay
  //se comecar comecar com consoante, pega a primeira letra, coloca no final e coloca AY, EX: BARCO = ARCOBAY
  //se nao tiver vogal nenhuma coloca AY no final ex  PST, PSTAY
  //pegar as consoantes iniciais,mover para o final e adicionar AY, EX: STRING = INGSTRAY
};

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}
//coloquei aqui 
let positionFirstVowel = (acertar) => {
  let aIdx = acertar.indexOf("a");
  let eIdx = acertar.indexOf("e");
  let iIdx = acertar.indexOf("i");
  let oIdx = acertar.indexOf("o");
  let uIdx = acertar.indexOf("u");
  let len = acertar.length;

  let answer = -1;

  if (aIdx == -1) {
  } else if (aIdx != -1 && answer == -1) {
    answer = aIdx;
  }
  if (eIdx == -1) {
  } else if (eIdx != -1 && answer == -1) {
    answer = eIdx;
  } else if (eIdx != -1 && answer >= eIdx) {
    answer = eIdx;
  }

  if (iIdx == -1) {
  } else if (iIdx != -1 && answer == -1) {
    answer = iIdx;
  } else if (iIdx != -1 && answer >= iIdx) {
    answer = iIdx;
  }

  if (oIdx == -1) {
  } else if (oIdx !== -1 && answer == -1) {
    answer = oIdx;
  } else if (oIdx !== -1 && answer >= oIdx) {
    answer = oIdx;
  }

  if (uIdx == -1) {
  } else if (uIdx !== -1 && answer == -1) {
    answer = uIdx;
  } else if (uIdx !== -1 && answer >= uIdx) {
    answer = uIdx;
  }
  return answer;
};





// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
