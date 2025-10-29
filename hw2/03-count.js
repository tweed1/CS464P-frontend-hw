const text = document.getElementById("text");
const input = document.getElementById("userInput");

/* searches the given paragraph and returns the paragraph with
    matching words highlighted */
const highlight = function highlighFunction(searchWord) {
	const divText = text.textContent; // paragraph provided

	if (!searchWord) {
		text.innerHTML = divText;
		return;
	}

	const arr = divText.split(/([\s+.,\/#!$%\^&\*;:{}=\-_`~()—?])/);

	console.table(arr);

	const newText = arr.map((word) => {
		const compWord = word.toLowerCase(); 

        /* compare the lowercase version of the searched word and current word 
            if it matches, style and return the original word
            */
		if (compWord === searchWord.toLowerCase()) {
			return `<mark class="bg-warning mg-0 p-0">${word}</mark>`;
		} else {
			return word;
		}
	});

	text.innerHTML = newText.join(""); // join and display results 
};

/* when keydown occurs attempts to temper the delays with searching 
    and displaying the entire paragraph and calls the highlight() function */
const handleKeyDown = function handleKeyDownFunction(event) {
    // setTimeout to try and delay search reloads
	setTimeout(() => {
		const val = input.value.trim();
		highlight(val);
	}, 300);
};

input.addEventListener("keydown", handleKeyDown);
