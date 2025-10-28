const form = document.querySelector("#myform");

const modalBody = document.querySelector(".modal-body");
const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
const confirmAndClear = document.getElementById("confirmAndClear");

const handleInput = function handleInputFunction(event) {
	event.preventDefault();

	const nameOutput = document.getElementById("nameOutput");
	const emailOutput = document.getElementById("emailOutput");
	const registrationOutput = document.getElementById("registeredCourses");
	const coursesSelected = document.getElementById("coursesOutput");
	const notesOutput = document.getElementById("notesOutput");

	// document.addEventListener("DOMContentLoaded", () => {
	//   ?should line 1-4 be in a separate event listened for when the page loads?

	const name = document.getElementById("nameInput").value;
	const email = document.getElementById("emailInput").value;
	const registrationStatus =document.getElementById("registrationSelect").value;
	const notes = document.getElementById("largeTextBox").value;

	// const coursesSelected = document.querySelector(".form-check-input:checked")
	const courses = Array.from(
		document.querySelectorAll(".form-check-input:checked")
	).map((input) => input.value); // asked the internet fo this

	nameOutput.textContent = `Name: ${name}`;
	emailOutput.textContent = `Email: ${email}`;
	registrationOutput.textContent = `You are: ${registrationStatus}`;
	coursesSelected.textContent = `Your courses: ${courses}`;
	notesOutput.textContent = `Notes: ${notes}`;

	modal.show();

	// clear form when click 'confirm' in the modal
	confirmAndClear.addEventListener("click", () => {
		form.reset();
	});
};

form.addEventListener("submit", handleInput);
