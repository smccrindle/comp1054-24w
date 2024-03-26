const details = document.querySelectorAll("details");

details.forEach((detail) => {
	detail.addEventListener("toggle", (event) => {
		if (event.target.open) {
			// The browser just added the "open" attribute, so this <details> element was closed
			details.forEach((detail) => {
				// If this <details> element is not the one that was just clicked, close it
				if (detail !== event.target) {
					detail.removeAttribute("open");
				}
			});
		}
	});
});

// This experiment based on https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details