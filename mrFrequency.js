var mrFrequency = function () {
	var mrF = this;
	mrF.charObject = { "Character" : null, "Code" : 0, "Count" : 0 };
	mrF.stdObject = { "Name" : null, "Letters"  : new Array() };
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
	mrF.selected = mrF.standards[0];
	mrF.getAnalysis = function (text, allCharacters) {
		var result = JSON.parse(JSON.stringify(mrF.selected.Letters)); //new Array();
	
		if (!Array.isArray(text)) {
			text = new Array(text)
		}
		
		for (let t of text) {
			for (let i = 0; i < t.length; i++) {
				let ch = t.charAt(i);
				let bigChar = ch.toUpperCase();
				if (result.some(x => x.Character.toUpperCase() === bigChar)) {
					let c = result.find(x => x.Character.toUpperCase() === bigChar);
					c.Count++;
				}
				/*
				else {
					let theCode = bigChar.charCodeAt(0);
					// || theCode === 197 || theCode === 198 || theCode === 216
					if (!allCharacters || (theCode >= 65 && theCode <= 90)) {
						result.push(
							{ 
								"Character" : bigChar, 
								"Count" : 1,
								"Code" : theCode
							}
						);
					}
				}
				*/
			}
		}
		console.log(result);
		return result;
	};
	mrF.encodeText = function (text, caesar) {
		
		var charList = mrF.selected.Letters.map(x => x.Character);
		var cryptList = function (charList, caesar) {
			if (typeof caesar === "number") {
				return charList;
			}
			else {
				return charList;
			}
		};
		
		for (let i = 0; i < text.length; i++) {
			
		}

	};
	mrF.decodeText = function (text) {
	
	};

};