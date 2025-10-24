const text = document.getElementById("text");
const input = document.getElementById("userInput");

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

		if (compWord === searchWord.toLowerCase()) {
			return `<mark class="bg-warning mg-0 p-0">${word}</mark>`;
		} else {
			return word;
		}
	});

	text.innerHTML = newText.join("");
};

const handleKeyDown = function handleKeyDownFunction(event) {
	setTimeout(() => {
		const val = input.value.trim();
		highlight(val);
	}, 300);
};

input.addEventListener("keydown", handleKeyDown);
