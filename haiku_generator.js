//stucture is an array of arrays
//syllablesArr is an array of arrays
//containing words filtered by syllable count

var formattedData = require('./haiku.js');

//allow user to manipulate structure from CLI
//var structure = JSON.parse(process.argv[2]);

//OR: generate (superficially) random structure
function getHaikuStructure(){
	var structure = [];
	var line1and3 = [[2,3],[3,2],[5]];
	var line2 = [[3,4],[4,3],[5,2],[2,5],[2,2,3],[2,3,2],[3,2,2],[7],[7]];

	structure.push(getRandomElement(line2));
	structure.push(getRandomElement(line1and3));
	structure.unshift(getRandomElement(line1and3));

	return structure;
}

var getRandomElement = function(arr){
		return arr[Math.floor(Math.random()*arr.length)];
	}

var structure = getHaikuStructure();



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

console.log(createHaiku(structure, formattedData));





