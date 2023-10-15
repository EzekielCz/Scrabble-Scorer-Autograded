// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt(userWord) {
   console.log("Let's play some scrabble! Enter a word: ");
  userWord = input.question("Please enter a word: ");
  // score = oldScrabbleScorer(userWord);
  // console.log(score);
  return userWord;
};
//initialPrompt();


function simpleScorer(word){
  console.log(word.length);
  return word.length
};
//simpleScorer("rum");


function vowelBonusScorer(word){
  let vowels = ["a","e","i","o","u"];
  let score = 0;
  //let consants =[]
  for(i = 0; i < word.length; i++){
    if (vowels.includes(word[i].toLowerCase())){
      score += 3;
    } else {
      score ++; 
  }
  }
  console.log(score);
  return score;
};
//vowelBonusScorer("RUM");

function scrabbleScorer(word) {
  // console.log(newPointStructure);
  let score = 0;
  for (let i=0; i <word.length; i++ ){
    for (keys in newPointStructure){
      if(word[i].toLowerCase() === keys){
        score += newPointStructure[keys]
      }
  //score += newPointStructure[word[i].toUpperCase()]
    }
  }
return score;
};

//console.log(typeof(oldScrabbleScorer));

const scoringAlgorithms = [{
  scorerFunction: simpleScorer,
  name: "simpleScore",
  description:"Each letter is worth 1 point.",
}, {
  scorerFunction: vowelBonusScorer,
  name: "vowelBonusScore",
  description: "Vowels are 3 pts, consonants are 1 pt.",
},
  { 
    scorerFunction: scrabbleScorer,
    name:"scrabbleScorer",
    description:"The traditional scoring algorithm.",
  }
  ];

  /*function scorerPrompt(word) {
    console.log();
    for (let i = 0; i < scoringAlgorithms.length; i++) {
      console.log(`${i + 1}. ${scoringAlgorithms[i].name} -> ${scoringAlgorithms[i].description}`);
    }
    userInput = Number(input.question("Please enter the number to select a scoring guide : ")) - 1;
    console.log("You chose : " + scoringAlgorithms[userInput].name + "\n");
    return scoringAlgorithms[userInput].function(word);
  }
  
  function runProgram() {
    word = initialPrompt();
    console.log("Your score is : " + scorerPrompt(word));
  }*/
  
function scorerPrompt() {
  userInput = Number(input.question(" Please pick a scoring guide by picking either 0, 1 or 2: "));
    console.log(" You choose " + scoringAlgorithms[userInput].name)
  //console.log(scoringAlgorithms[userInput].function(word));
   return scoringAlgorithms[userInput];
     
}
//scorerPrompt("rum");

function transform(objectArray) {
let revisedPointStructure = {}; //creating revised point structure using old point structure. the keys are supposed to be the letters, the values are supposed to be numbers.
  for (numbers in objectArray){
    for(let i=0; i < objectArray[numbers].length; i++){
      revisedPointStructure[objectArray[numbers][i].toLowerCase()] = Number(numbers);
}
  }
return revisedPointStructure;
};

//oldPointStructure[1][0]    
// revisedPointStructure[oldPointStructure[1][0]] = 1;

let newPointStructure = transform(oldPointStructure);

function runProgram() {
  let totalScore = 0;
  //  scorerPrompt(initialPrompt());
   console.log(scorerPrompt().function(initialPrompt()));
  /*word = initialPrompt();
   console.log(scorerPrompt(word));*/

   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
