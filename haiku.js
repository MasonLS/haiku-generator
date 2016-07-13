var fs = require('fs');
var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
	return fs.readFileSync(file).toString();
}
//returns an array of arrays, where words are assigned to indices of their
//syllable count
function formatData(data){
	var syllablesArr = [];
	var lines = data.toString().split("\n"), lineSplit, syllables;	

	lines.forEach(function(line){
		lineSplit = line.split("  ");
		
		if (lineSplit[1] !== undefined){
			syllables = countSyllables(lineSplit[1]);

			if (syllablesArr[syllables] === undefined) {
				syllablesArr[syllables] = [lineSplit[0]];
			} else {
				syllablesArr[syllables].push(lineSplit[0]);
			}
		}
	});

	return syllablesArr;
}

function countSyllables(phonemes){
	var count = phonemes.match(/\d/g);
	
	if (count !== null){
		return count.length;
	}
}

module.exports = formatData(cmudictFile);




