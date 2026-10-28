// Cookie message: hide it after the visitor clicks Accept, and remember the choice
var cookies = document.getElementById("cookies");
var accept = document.getElementById("cookie-accept");

if (localStorage.getItem("cookiesAccepted")) {
	cookies.classList.add("hidden");
}

accept.addEventListener("click", function () {
	cookies.classList.add("hidden");
	localStorage.setItem("cookiesAccepted", "yes");
});

// Contact form: send the form without leaving the page, then show the green SUBMITTED button
var form = document.querySelector("form");

if (form) {
	form.addEventListener("submit", function (event) {
		event.preventDefault();
		var button = form.querySelector("input[type=submit]");

		fetch(form.action, {
			method: "POST",
			mode: "no-cors",
			body: new URLSearchParams(new FormData(form))
		}).then(function () {
			button.value = "SUBMITTED ✓";
			button.classList.add("submitted");
		}).catch(function () {
			button.value = "Try again";
		});
	});
}
