var buttons = document.querySelectorAll(".expand");

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function() {
		var details = this.nextElementSibling;
		if (details.style.display === "block") {
			details.style.display = "none";
			this.innerHTML = "展开";
		} else {
			details.style.display = "block";
			this.innerHTML = "收起";
		}
	});
}
