//stucture is an array of arrays
//syllablesArr is an array of arrays
//containing words filtered by syllable count

var formattedData = require('./haiku.js');

//allow user to manipulate structure from CLI
var structure = JSON.parse(process.argv[2]);

function createHaiku(structure, syllablesArr){
	var haiku = [];

	structure.forEach(function(line){
		var words = [];

		line.forEach(function addWord(syllables){
			var randWord = getRandomElement(syllablesArr[syllables]);
			
			if (randWord.match(/['|\d]/) === null) {
				words.push(randWord);
			} else {
				return addWord(syllables);
			}
		});

		haiku.push(words.join(' '));
	});

	return haiku.join('\n');
}

var getRandomElement = function(arr){
		return arr[Math.floor(Math.random()*arr.length)];
	}

console.log(createHaiku(structure, formattedData));





