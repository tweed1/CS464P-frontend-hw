// Add your code here
const userInput = document.getElementById("userInput");
const resultElem = document.getElementById("resultDisplay");
const searchEvent = document.getElementById("searchButton");
const cardTemplate = document.getElementById("cardTemplate");

const highlightMatchingText = function highlighMatchingTextFunction(
	textToHighlight,
	lookUp
) {
	const regex = new RegExp(`(${lookUp})`, "gi"); // global, case-insensitive
	return textToHighlight.replace(regex, `<mark class="bg-warning p-0 m-0">$1</mark>`);
};

const outputResults = function outputResultsFunction(userInput) {
	const searchValue = userInput.value.toLowerCase();

	// validate no input
	if (searchValue === "") {
		const noSearchValueMSG = document.createElement("p");
		noSearchValueMSG.className = "text-center text-danger";
		noSearchValueMSG.textContent = "No input";
		resultDisplay.appendChild(noSearchValueMSG);
		return;
	}

	// search and output results
	characters
		.filter((character) =>
			character.name.toLowerCase().includes(searchValue.toLowerCase())
		)
		.forEach((result) => {
			// to set up te grid
			const col = document.createElement("div");
			col.className = "col-12 col-sm-6 col-md-4 col-lg-3 d-flex";

			// each card
			const card = document.createElement("div");
			card.className = "card shadow flex-fill";

			// inside card
			const cardBody = document.createElement("div");
			cardBody.className = "card-body text-center";

			// title of card which is the search result name
			const title = document.createElement("h2");
			title.className = "card-title fs-5";
			title.innerHTML = highlightMatchingText(result.name, searchValue);

			// birth year text
			const text = document.createElement("p");
			text.className = "card-text text-muted";
			text.textContent = `Birth Year: ${result.birth_year}`;

			// adding the elements to the card
			cardBody.appendChild(title);
			cardBody.appendChild(text);
			card.appendChild(cardBody);
			col.appendChild(card);

			// append card to the main container
			resultDisplay.appendChild(col);
		});
};

const handleClick = function handleClickFunction(event) {
	resultElem.innerHTML = "";
	outputResults(userInput);
};

searchEvent.addEventListener("click", handleClick);
