const elem = document.querySelector("input");
const outputElem = document.getElementById("answer");

const handleInput = function handleInputFunction(event) {
  
    const value = event.target.value;
  //console.log("current value: ", value);
  //const str_value = value.toString(); // is this check important?
  const reversed = value.split("").reverse().join("");
  const isPalindrome = (value === reversed);

  if (value === "") {
    outputElem.textContent = `Please enter a number`;
    outputElem.style.color = `purple`;
  }
  else if (value < 0) {
    outputElem.textContent = `${value} is not a valid entry`;
    outputElem.style.color = `orange`;
  }
  else if (isPalindrome) {
    outputElem.textContent = `${value} is a palindrome`;
    outputElem.style.color = `green`;
  }
  else {
    outputElem.textContent = `${value} is NOT a palindrome`;
    outputElem.style.color = `red`;
  }
};

elem.addEventListener("input", handleInput);
