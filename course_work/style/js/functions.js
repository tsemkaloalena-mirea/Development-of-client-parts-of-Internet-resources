function changeGalleryImage() {
    nImage++;
    if (nImage >= inputs.length) {
        nImage = 0;
    }
    inputs[nImage].click();
}

function changeDotColor(n, event) {
    nImage = n;
    let dots = document.getElementsByClassName("slider_dots")[0].children;
    for (let j = 0; j < dots.length; j++) {
        if (n == j) {
            dots[j].style.background = "rgb(222, 174, 68)";
        }
        else {
            dots[j].style.background = "#fff";
        }
    }
    clearInterval(galleryTimer);
    galleryTimer = setInterval(changeGalleryImage, 5000);
}

function showTimeForSale() {
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
	let timeFields = document.querySelectorAll("#sale_timer div span");
	timeFields[0].innerHTML = daysLeft;
	timeFields[1].innerHTML = hoursLeft;
	timeFields[2].innerHTML = minutesLeft;
	timeFields[3].innerHTML = secondsLeft;
}


function menuButtonClicked(x) {
	x.classList.toggle("change");
	
	if (document.querySelector(".menu ul").style.getPropertyValue("display") == "flex") {
		document.querySelector(".menu ul").style.display = "none";
	} else {
		document.querySelector(".menu ul").style.display = "flex";
	}
}

function changeProductCard(n, event) {
	var productCard = document.getElementsByClassName("product_card")[n];
	productCard.classList.toggle("product_card_full_img");
}

function loadProducts(productsType) {
	let products;
	// !!!!!!!!!!!!!!!!! другие типы
	if (productsType == "paints") {
		products = paints;
	}
	let catalogGallery = document.getElementsByClassName("catalog_gallery")[0];
	for (let i = 0; i < products.length; i++) {
		let newProduct = document.createElement("div");
		newProduct.classList.add("product_card");
		newProduct.addEventListener("mouseenter", changeProductCard.bind(event, i));
		newProduct.addEventListener("mouseleave", changeProductCard.bind(event, i));
		newProduct.addEventListener("click", showModal.bind(event, productsType, i));
		
		let productImage = document.createElement("img");
		productImage.setAttribute("src", "style/images/catalog/" + productsType + "/" + products[i].image);

		let productName = document.createElement("div");
		productName.classList.add("product_name");
		productName.append(products[i].name);

		let productPrice = document.createElement("div");
		productPrice.classList.add("product_price");
		productPrice.append(products[i].price + "₩");

		newProduct.appendChild(productImage);
		newProduct.appendChild(productName);
		newProduct.appendChild(productPrice);
		catalogGallery.appendChild(newProduct);
	}
}

function fixCardsHeight() {
	let productCards = document.getElementsByClassName("product_card");
	for (let i = 0; i < productCards.length; i++) {
		productCards[i].style.height = productCards[i].getBoundingClientRect().height+'px';
	}
}

function showModal(productsType, i, event) {
	let products;
	// !!!!!!!!!!! ДРУГИЕ ТИПЫ
	if (productsType == "paints") {
		products = paints;
	}
	let nameField = document.querySelector("#product_description_name");
	let priceField = document.querySelector("#product_description_price span");
	let quantityField = document.querySelector("#product_description_quantity span");
	let manufacturerField = document.querySelectorAll("#product_description_info>p>span")[0];
	let countryField = document.querySelectorAll("#product_description_info>p>span")[1];
	let volumeField = document.querySelectorAll("#product_description_info>p>span")[2];
	let descriptionField = document.getElementById("product_description_text");
	let imageField = document.querySelector("#product_description img");
	
	nameField.innerHTML = products[i].name;
	priceField.innerHTML = products[i].price + "₩";
	quantityField.innerHTML = products[i].quantity;
	manufacturerField.innerHTML = products[i].manufacturer;
	countryField.innerHTML = products[i].country;
	volumeField.innerHTML = products[i].volume;
	descriptionField.innerHTML = products[i].description;
	imageField.setAttribute("src", "style/images/catalog/" + productsType + "/" + products[i].image);

	document.getElementById("modal").style.display="flex";
	document.body.style.overflow = "hidden";
}

function closeModal() {
	document.getElementById("modal").style.display="none";
	document.body.style.overflow = "";
}

function loupeClicked() {
	let container = document.getElementById("search_area_container");
	let loupeBtn = document.getElementsByClassName("loupe")[0];
	let inputArea = document.getElementById("search_area");
	let crossBtn = document.getElementsByClassName("cross")[0];

	function closeSearchArea() {
		document.getElementById("search_area").style.display = "none";
		document.getElementsByClassName("cross")[0].style.display = "none";
		container.style.maxWidth = "";
		container.style.width = "min-content";
	}

	if (window.getComputedStyle(inputArea).display == "none") {
		container.style.maxWidth = "400px";
		container.style.width = "auto";
		inputArea.style.display = "block";
		crossBtn.style.display = "block";
		crossBtn.addEventListener("click", function() {
			inputArea.value = "";
		});
		container.addEventListener("mouseleave", function() {
			closeSearchArea();
		});
	}
	else {
		closeSearchArea();
	}
}

function generateCaptcha() {
	let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let text = "";
	for (let i = 0; i < 6; i++) {
		text += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
	}
	document.getElementById("captcha_text").innerHTML = text;
}

function showCheckBtn() {
	if (document.querySelector("#captcha input").value != "") {
		document.getElementById("check_captcha_btn").style.display = "block";
	}
	else {
		document.getElementById("check_captcha_btn").style.display = "none";
	}
}

function checkCaptcha() {
	if (document.getElementById("captcha_text").innerHTML == document.querySelector("#captcha input").value) {
		document.querySelector("#captcha .correct").style.display = "block";
		document.querySelector("#captcha .wrong").style.display = "none";
		document.querySelector("#captcha .correct").style.display = "none";
		document.querySelector("#contact_form>form>button").disabled = false;
	}
	else {
		document.querySelector("#captcha .wrong").style.display = "block";
	}
}

function checkLoginForm() {
	let email = document.getElementById("contact_form_email");
	let submitBtn = document.querySelector('#contact_form>button');

	function renewAnimation() {
		email.style.animation = "none";
	}

	email.addEventListener("change", function() {
		if (email.checkValidity()==false) {
			email.style.animation = "shake 1s linear";
			email.style.boxShadow = "3px 5px 0 rgb(119, 3, 0)";
			setTimeout(renewAnimation, 1000);
			return false;
		} else {
			email.style.boxShadow = "none";
		}
	});
}
