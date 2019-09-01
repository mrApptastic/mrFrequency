var mrFrequency = function () {
	var mrF = this;
	/* Language Standards */
	mrF.standards = [
		{ 
			Name : "English",
			Letters : [
				{ Character : 'A', Frequency : 8.167, Count : 0 },
				{ Character : 'B', Frequency : 1.492, Count : 0 },
				{ Character : 'C', Frequency : 2.782, Count : 0 },	
				{ Character : 'D', Frequency : 4.253, Count : 0 },
				{ Character : 'E', Frequency : 12.702, Count : 0 },
				{ Character : 'F', Frequency : 2.228, Count : 0 },
				{ Character : 'G', Frequency : 2.015, Count : 0 },
				{ Character : 'H', Frequency : 6.094, Count : 0 },
				{ Character : 'I', Frequency : 6.966, Count : 0 },
				{ Character : 'J', Frequency : 0.153, Count : 0 },
				{ Character : 'K', Frequency : 0.772, Count : 0 },	
				{ Character : 'L', Frequency : 4.025, Count : 0 },	
				{ Character : 'M', Frequency : 2.406, Count : 0 },	
				{ Character : 'N', Frequency : 6.749, Count : 0 },	
				{ Character : 'O', Frequency : 7.507, Count : 0 },	
				{ Character : 'P', Frequency : 1.929 , Count : 0 },	
				{ Character : 'Q', Frequency : 0.095, Count : 0 },	
				{ Character : 'R', Frequency : 5.987, Count : 0 },	
				{ Character : 'S', Frequency : 6.327 , Count : 0 },	
				{ Character : 'T', Frequency : 9.056, Count : 0 },	
				{ Character : 'U', Frequency : 2.758, Count : 0 },	
				{ Character : 'V', Frequency : 0.978, Count : 0 },	
				{ Character : 'W', Frequency : 2.360, Count : 0 },	
				{ Character : 'X', Frequency : 0.150, Count : 0 },	
				{ Character : 'Y', Frequency : 1.974, Count : 0 },	
				{ Character : 'Z', Frequency : 0.074, Count : 0 }					
			]
		}
	];
	/* Set first standard as selected */
	mrF.selectedStandard = mrF.standards[0];
	/* Main method for receiving a frequency analysis based on selected standard */
	mrF.getFrequencyAnalysis = function (text) {
		var result = JSON.parse(JSON.stringify(mrF.selectedStandard.Letters));
		
		/* Convert text string to array of chars */
		if (!Array.isArray(text)) {
			text = new Array(text)
		}
		
		for (let t of text) {
			for (let i = 0; i < t.length; i++) {
				let ch = t.charAt(i);
				let bigChar = ch.toUpperCase();
				/* Increment count if character exists within the selected standard */
				if (result.some(x => x.Character.toUpperCase() === bigChar)) {
					let c = result.find(x => x.Character.toUpperCase() === bigChar);
					c.Count++;
				}
			}
		}
		return result;
	};
	/* Main method for encoding a text. 
	   If the caesar param is set to a number 'Caesar's Cipher' will be used. 
	   Otherwise the substitution will be random */
	mrF.encodeText = function (text, caesar) {		
		function getCryptList (charList, caesar) {
			let oldArr = new Array().concat(charList);
			let newArr = new Array();
		
			if (typeof caesar === "number") {
				let diff = caesar;

				while (diff > 0) {
					oldArr.push(oldArr.splice(0, 1)[0]);
					diff--;
				}

				while (diff < 0) {
					oldArr.unshift(oldArr.splice(oldArr.length - 1, 1)[0]);
					diff++;
				}

				newArr = newArr.concat(oldArr);
			}
			else {
				while (newArr.length < charList.length) {
					let rand = Math.floor(Math.random() * oldArr.length);
					let letter = oldArr[rand];
					if (newArr.indexOf(letter) === -1) {
						oldArr.splice(rand, 1);
						newArr.push(letter);
					}
				}
			}

			return newArr;
		}

		var charList = mrF.selectedStandard.Letters.map(x => x.Character);
		var cryptList = getCryptList(charList, caesar);
		var newText = new Array();
		
		for (let i = 0; i < text.length; i++) {
			let index = charList.findIndex(x => x === text[i].toUpperCase());

			if (index > -1) {
				newText.push(cryptList[index]);
			}
		}

		return newText.join("");

	};
	/* Decode a text which supposedly has been encrypted using substitution. 
	   Works best with huge text bases :-) */
	mrF.decodeText = function (text) {
		var oldText = new Array();
		var charArray = mrF.getFrequencyAnalysis(text);

		var languageChars = charArray.sort(function(x, y) {
			return y.Frequency - x.Frequency;
		});

		var textChars = charArray.sort(function(x, y) {
			return x.Count - y.Count;
		});

		for (let i = 0; i < text.length; i++) {
			let index = textChars.findIndex(x => x.Character === text[i].toUpperCase());
			if (index > -1) {
				oldText.push(languageChars[index].Character);
			}
		}

		return oldText.join("");
	};

};