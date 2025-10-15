const elem = document.querySelector("input");
const outputElem = document.querySelector("section div div");

const handleInput = function handleInputFunction(event) {
  const value = event.target.value;
  console.log("current value: ", value);
  const str = value.toString();
  const reversed = str.split("").reverse().join("");
  const isPalindrome = str === reversed;

  if (isPalindrome) {
    outputElem.textContent = `${value} is a palindrome`;
    outputElem.style.color = `green`;
  }
  else {
    outputElem.textContent = `${value} is NOT a palindrome`;
    outputElem.style.color = `red`;
  }
};

elem.addEventListener("input", handleInput);
