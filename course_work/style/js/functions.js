function button_clicked(x) {
    x.classList.toggle("change");
    
    if (document.querySelector(".menu ul").style.getPropertyValue("display") == "flex") {
        document.querySelector(".menu ul").style.display = "none";
    } else {
        document.querySelector(".menu ul").style.display = "flex";
    }
}