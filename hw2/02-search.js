// Add your code here
const userInput = document.getElementById("userInput");
const resultElem = document.getElementById("resultDisplay");
const searchEvent = document.getElementById("searchButton");
const cardTemplate = document.getElementById("cardTemplate");

const highlightMatchingText = function highlighMatchingTextFunction (textToHighlight, lookUp) {
    const regex = new RegExp(`(${lookUp})`, "gi");
    return textToHighlight.replace(regex, `<mark>$1</mark>`);
}

const outputResults = function outputResultsFunction(filteredList) {
    resultElem.innerHTML = "";
    if (filteredList.length === 0) {
        resultElem.textContent = "No one matching that name found";
        //return ?
    }
    else {
        filteredList.forEach(characters => {
            const card = cardTemplate.firstElementChild.cloneNode(true);
            card.querySelector(".card-title").innerHTML = characters.name;
            card.querySelector(".birth-year").innerHTML = characters.birth_year;

            card.hidden = false;
            card.style.width = "200px"
            
            resultElem.appendChild(card);
            //card.classList.add("card", "p-2");
            //card.innerHTML = `${characters.name} - ${characters.birth_year}`;
            //resultElem.appendChild(elem);
        });
    }
}

const handleClick = function handleClickFunction (){
    const lookUp = userInput.value.toLowerCase();
    const filteredResults = characters.map(characters => {
        if(characters.name.toLowerCase().includes(lookUp))
            return {
                name: highlightMatchingText(characters.name, lookUp),
                height: characters.height,
                birth_year: characters.birth_year,
            };
        else 
            return null;
    })
    .filter(Boolean);

    outputResults(filteredResults);
}
searchEvent.addEventListener('click', handleClick);
