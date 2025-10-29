const form = document.querySelector("#myform");

/* when a form is submitted grab all those input and output them into
    a modal. the modal can 'close' or 'confirm'. confirm closed the 
    modal and clears the form */
const onSubmit = function handleInputFunction(event) {
	event.preventDefault();

	const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
	const nameOutput = document.getElementById("nameOutput");

	const emailOutput = document.getElementById("emailOutput");
	const registrationOutput = document.getElementById("registeredCourses");
	const coursesSelected = document.getElementById("coursesOutput");
	const notesOutput = document.getElementById("notesOutput");

	const name = document.getElementById("nameInput").value;
	const email = document.getElementById("emailInput").value;
	const registrationStatus =
		document.getElementById("registrationSelect").value;
	const notes = document.getElementById("largeTextBox").value;

	const courses = Array.from(
		document.querySelectorAll(".form-check-input:checked")
	).map((input) => input.value); // asked the internet fo this

	nameOutput.textContent = `Name: ${name}`;
	emailOutput.textContent = `Email: ${email}`;
	registrationOutput.textContent = `You are: ${registrationStatus}`;
	coursesSelected.textContent = `Your courses: ${courses}`;
	notesOutput.textContent = `Notes: ${notes}`;

	modal.show();
};

form.addEventListener("submit", onSubmit);

// clear form when click 'confirm' in the modal
const confirmAndClear = document.getElementById("confirmAndClear");
confirmAndClear.addEventListener("click", () => {
	form.reset();
});
