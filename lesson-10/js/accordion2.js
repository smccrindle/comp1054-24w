const details = document.querySelectorAll("details");

details.forEach((detail) => {
	detail.addEventListener("toggle", (event) => {
		if (event.target.open) {
			/* the element was toggled open */
			console.log("This one was closed.");
			closeOthers(event.target);
		} else {
			/* the element was toggled closed */
			console.log("This one was open.");
		}
	});
});

// Function to close all the other DETAILS elements (passing in the one that was toggled)
function closeOthers (openDetailElement) {
	details.forEach((detail) => {
		if (detail !== openDetailElement) {
			detail.removeAttribute("open");
		}
	});
}

// This experiement based on https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details