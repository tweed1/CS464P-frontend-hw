let intervalId;

// generate random HSLA colors, referenced from Gemini
const getRandomColor = function getRandomColorFunction() {
	const h = Math.floor(Math.random() * 360);
	const s = Math.floor(Math.random() * 100);
	const l = Math.floor(Math.random() * 100);
	const a = (Math.random() * 0.5 + 0.3).toFixed(2);
	return `hsla(${h}, ${s}%, ${l}%, ${a})`;
};

/* start color changing using setInterval(). the interval is multiplied by
    1000 since it reads as milliseconds. Every interval the background color
    updated by getting a random color and updating the body element */
const startBackgroundColorChange = function startBackgroundColorChangeFunction(
	interval
) {
	clearInterval(intervalId); // can i clear a null value
	intervalId = setInterval(() => {
		document.body.style.backgroundColor = getRandomColor();
        
	}, interval * 1000); //needs to be in milliseconds 
};

/* manages the button interaction. by checking the button text content
    different actions are taken to either start or stop the interval and
    setting a new button value */
const handleButtonClick = function handleButtonClickFunction() {
	const input = document.getElementById("interval");
	const button = document.getElementById("buttonSS");

	if (button.textContent === "Start") {
		const interval = input.value;
		if (interval === "" || interval < 1) {
			errorMessageDisplay.innerHTML = ""; // clear previous error messages
			const badInputValueMSG = document.createElement("p");
			badInputValueMSG.className = "text-center text-danger";
			badInputValueMSG.textContent = "No input";
			errorMessageDisplay.appendChild(badInputValueMSG);
			return;
		}
		errorMessageDisplay.innerHTML = ""; // clear display

		startBackgroundColorChange(interval);
		//change the button to stop while that runs
		button.textContent = "Stop";
		button.classList.replace("btn-primary", "btn-danger");
	} else {
		clearInterval(intervalId);
		intervalId = null;
		button.textContent = "Start";
		button.classList.replace("btn-danger", "btn-primary");
		document.body.style.backgroundColor = ""; // reset background
	}
};

// runs after the window loads
const handleWindowLoad = function handleWindowLoadFunction() {

    startBackgroundColorChange(3); // kickoff with a 3 second background change

	const button = document.getElementById("buttonSS");
	button.addEventListener("click", handleButtonClick);
};

// starts on a 3 sec interval with the stop button
window.addEventListener("load", handleWindowLoad);




