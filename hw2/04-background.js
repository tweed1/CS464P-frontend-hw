
let intervalId;

// generate random HSLA colors
const getRandomColor = function getRandomColorFunction() {
	const h = Math.floor(Math.random() * 360);
	const s = Math.floor(Math.random() * 100);
	const l = Math.floor(Math.random() * 100);
	const a = (Math.random() * 0.5 + 0.3).toFixed(2);
	return `hsla(${h}, ${s}%, ${l}%, ${a})`;
};

// start color changing using setInterval()
const startBackgroundColorChange = function startBackgroundColorChangeFunction(
	interval
) {
	clearInterval(intervalId); // can i clear a null value
	intervalId = setInterval(() => {
		document.body.style.backgroundColor = getRandomColor();
	}, interval);
};

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

		startBackgroundColorChange(interval * 1000);
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
/* const handleWindowLoad = function handleWindowLoadFunction() {
 */	const button = document.getElementById("buttonSS");
	button.addEventListener("click", handleButtonClick);
/* }; */

// whats the point of this if everything needs to be done on start
/* window.addEventListener("load", handleWindowLoad);
 */


// todo does order of these function matter in terms of js standards
