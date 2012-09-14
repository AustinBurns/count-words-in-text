var Words = function(){
	var finalWords = {};
	this.countWords = function(text){
		text = text.replace(/[\\\/()";:?,.-]/g, "").replace(/\s{2,}/g, " ").toLowerCase().trim(); //take out the punctuation that doesn't matter plus more than one space. trim only works for newer browsers
		var words = text.split(" ");
		if(text === " ")
			document.write("Please enter at least one word.");
		else{
			while(words.length >= 1){	
				var len = finalWords.length,
					word = words[0];
				regex = new RegExp('\\b' + word + '\\b', "gi");//use the RegEx object to be able to pass in the variable
				while(words.indexOf(word) !== -1 && text.match(regex) !== null){//test for both the word being in the array and the word not being part of another word
					if(finalWords[word] === undefined)
						finalWords[word] = 1;
					else
						finalWords[word]++;
					words.splice(words.indexOf(word), 1);//delete the word from the array to find a new index of the word if there are more
				}
				document.write(word + " = " + finalWords[word] + "<br/>");
			}
		}
	};
};

var text = "Anyway, I keep picturing all these little kids playing some game in this big field of rye and all. Thousands of little kids, and nobody's around - nobody big, I mean - except me. And I'm standing on the edge of some crazy cliff. What I have to do, I have to catch everybody if they start to go over the cliff - I mean if they're running and they don't look where they're going I have to come out from somewhere and catch them. That's all I do all day. I'd just be the catcher in the rye and all. I know it's crazy, but that's the only thing I'd really like to be. ";

var test = new Words();

test.countWords(text);
document.write("<br/>");
text = "http://www.austinburns.com"

test.countWords(text);
document.write("<br/>");
text = "did did not didn't"

test.countWords(text);