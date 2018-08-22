var link = document.querySelector(".popup-feedback");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback-form__close");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("feedback-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("feedback-show");
});