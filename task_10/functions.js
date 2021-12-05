function generateCaptcha() {
	let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let text = "";
	for (let i = 0; i < 6; i++) {
		text += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
	}
	document.getElementById("captcha_text").innerHTML = text;
}

function showCheckBtn() {
	if (document.querySelector("#task1 input").value != "") {
		document.getElementById("check_captcha_btn").style.display = "block";
	}
	else {
		document.getElementById("check_captcha_btn").style.display = "none";
	}
}

function checkCaptcha() {
	if (document.getElementById("captcha_text").innerHTML == document.querySelector("#task1 input").value) {
		document.querySelector("#task1 .correct").style.display = "block";
		document.querySelector("#task1 .wrong").style.display = "none";
		setTimeout(function() {
			document.querySelector("#task1 .correct").style.display = "none";
			generateCaptcha();
			document.querySelector("#task1 input").value = "";
		}, 3000);
	}
	else {
		document.querySelector("#task1 .wrong").style.display = "block";
	}
}

function showTimeForSession() {
	let sessionTime = new Date("January	10, 2022");
	let now = new Date();
	let msPerDay = 24 * 60 * 60 * 1000;
	let msPerHour = 60 * 60 * 1000;
	let msPerMinute = 60 * 1000;
	let msPerSecond = 1000;
	msLeft = sessionTime.getTime() - now.getTime();
	let daysLeft = Math.floor(msLeft / msPerDay);
	msLeft -= daysLeft * msPerDay;
	let hoursLeft = Math.floor(msLeft / msPerHour);
	msLeft -= hoursLeft * msPerHour;
	let minutesLeft = Math.floor(msLeft / msPerMinute);
	msLeft -= minutesLeft * msPerMinute;
	let secondsLeft = Math.floor(msLeft / msPerSecond);
	let timeFields = document.querySelectorAll("#session_timer div span");
	timeFields[0].innerHTML = daysLeft;
	timeFields[1].innerHTML = hoursLeft;
	timeFields[2].innerHTML = minutesLeft;
	timeFields[3].innerHTML = secondsLeft;
}

var containerHeight = 0;
var containerWidth = 0;
function showKnuth() {
	let container = document.getElementById("task4");
	if (containerHeight == 0) {
		containerHeight = container.getBoundingClientRect().height;
		containerWidth = container.getBoundingClientRect().width;
	}
	container.style.height = containerHeight+'px';
	container.style.width = containerWidth+'px';

	container.classList.toggle("fullKnuth");
}

function closeSearchArea() {
	document.getElementById("search-area").style.display = "none";
	document.getElementsByClassName("cross")[0].style.display = "none";
}
function loupeClicked() {
	let loupeBtn = document.getElementsByClassName("loupe")[0];
	let inputArea = document.getElementById("search-area");
	let crossBtn = document.getElementsByClassName("cross")[0];
	if (inputArea.style.getPropertyValue("display") == "none") {
		inputArea.style.display = "block";
		crossBtn.style.display = "block";
		crossBtn.addEventListener("click", function() {
			inputArea.value = "";
		});
		document.getElementById("task3").addEventListener("mouseleave", function() {
			closeSearchArea();
		});
	}
	else {
		closeSearchArea();
	}
}

function showSocialCounter() {
	let time = 5000;
	let counters = document.querySelectorAll('#task5 div span');

	for (let i = 0; i < counters.length; i++) {
		let maximum = Math.ceil(counters[i].getAttribute("maximum"));
		let current = Math.ceil(counters[i].innerHTML);
		if (current < maximum) {
			let speed = maximum / time;
			counters[i].innerHTML = Math.ceil(current + speed);
			setTimeout(showSocialCounter, 100);
		}
		else {
			counters[i].innerHTML = counters[i].getAttribute("maximum");
		}
	}
}

function checkLoginForm() {
	let email = document.getElementById('mail');
	let password = document.getElementById('password');
	let submitBtn = document.querySelector('#task6 button');

	function renewAnimation() {
		email.style.animation = "none";
		password.style.animation = "none";
	}

	submitBtn.addEventListener("click", function() {
		if (email.checkValidity()==false) {
			email.style.animation = "shake 1s linear";
			email.style.boxShadow = "3px 5px 0 rgb(255, 0, 98)";
			setTimeout(renewAnimation, 1000);
			return false;
		} else {
			email.style.boxShadow = "3px 5px 0 rgb(187, 255, 0)";
		}
		if (password.checkValidity()==false) {
			password.style.animation = "shake 1s linear";
			password.style.boxShadow = "3px 5px 0 rgb(255, 0, 98)";
			setTimeout(renewAnimation, 1000);
			return false;
		} else {
			password.style.boxShadow = "3px 5px 0 rgb(187, 255, 0)";
		}
	});
}

function submitReview(i) {
	document.querySelector(".stars").style.display = "none";
	document.querySelectorAll("#comment p")[i].style.display = "none";
	document.getElementById("user-review").style.display= "NONE";
	document.getElementById("user-review").value = "";
	document.getElementById("submit-review-btn").style.display = "none";
	document.getElementById("change-review-btn").style.display= "block";
	document.getElementById("thanks").style.display= "block";

	document.getElementById("change-review-btn").addEventListener("click", function(){
		document.querySelector(".stars").style.display="block";
		document.querySelector(".stars").classList.remove("painted");
		document.getElementById("change-review-btn").style.display= "none";
		document.getElementById("thanks").style.display= "none";
	});
}

function paintStars() {
	let starContainer = document.querySelector(".stars");
	let stars = document.querySelectorAll(".stars div");
	let comments = document.querySelectorAll("#comment p");
	for (let i = 0; i < stars.length; i++) {
		stars[i].addEventListener("mouseover", function() {
			if (!(starContainer.classList.contains("painted"))) {
				for (let j = 0; j < i + 1; j++) {
					stars[j].style.backgroundImage = 'url("star.png")';
				}
				for (let j = i + 1; j < 5; j++) {
					stars[j].style.backgroundImage = 'url("star-2.png")';
				}
			}
		});
		stars[i].addEventListener("mouseleave", function() {
			if (!(starContainer.classList.contains("painted"))) {
				for (let j = 0; j < 5; j++) {
					stars[j].style.backgroundImage = 'url("star-2.png")';
				}
			}
		});
		stars[i].addEventListener("click", function() {
			if (!(starContainer.classList.contains("painted"))) {
				starContainer.classList.add("painted");
				comments[i].style.display= "block";
				document.getElementById("user-review").style.display= "block";
				document.getElementById("submit-review-btn").style.display = "block";
				document.getElementById("submit-review-btn").addEventListener("click", function() {
					submitReview(i);
				});
			}
		});
	}
}

function showModal() {
	document.getElementById("modal").style.display="flex";
	document.getElementById("modal-background").addEventListener("click", function() {
		document.getElementById("modal").style.display="none";
	});
}

window.onload = function () {
	generateCaptcha();
	showTimeForSession();
	setInterval(showTimeForSession, 1000);

	let captchaInputArea = document.querySelector("#task1 input");
	captchaInputArea.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			checkCaptcha();
		}
	});

	let container = document.getElementById("task4");
	container.addEventListener("mouseenter", function() {
		if (containerHeight == 0) {
			container.style.height = "100%";
			container.style.width = "100%";
		} else {
			container.style.height = containerHeight+'px';
			container.style.width = containerWidth+'px';
		}
	});

	container.addEventListener("mouseleave", function() {
		container.style.width = "308px";
		container.style.height = "308px";
	});

	showSocialCounter();
	checkLoginForm();
}

