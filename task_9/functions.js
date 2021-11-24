window.onload = function () {
	let list = document.querySelector(".work-to-do ul")
	let inputArea = document.querySelector("input[type='text']")
	let addListElementBtn = document.querySelector(".work-to-do button");

	function showTime() {
		var now = new Date();

		let time = now.getHours();
		let am_pm = "AM";
		if (time > 12) {
			time -= 12;
			am_pm = "PM";
		}
		time += ":" + now.getMinutes() + ":" + now.getSeconds() + " " + am_pm;

		document.getElementsByClassName("time")[0].innerHTML = time;
		document.getElementsByClassName("date")[0].innerHTML = now.toDateString();

	}

	function createListElement() {
		let newElem = document.createElement("li");
		newElem.append(inputArea.value);

		let deleteBtn = document.createElement("div");
		deleteBtn.classList.add("delete-btn");
		deleteBtn.addEventListener("click", function(event) {
			deleteBtn.parentElement.remove();
			event.stopPropagation();
		});

		list.appendChild(newElem).append(deleteBtn);
		inputArea.value = "";

	}

	showTime();
	setInterval(showTime, 1000);

	inputArea.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			addListElementBtn.click();
		}
	  });
	  addListElementBtn.addEventListener("click", createListElement);
}

