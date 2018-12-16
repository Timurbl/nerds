var templates = document.querySelectorAll(".templates__item");


templates[0].addEventListener("mouseover", function (evt) {
    evt.preventDefault();
    var block = templates[0].querySelector('.item__description');
    block.classList.remove('visually-hidden')
});

templates[1].addEventListener("mouseover", function (evt) {
    evt.preventDefault();
    var block = templates[1].querySelector('.item__description');
    block.classList.remove('visually-hidden')
});

templates[2].addEventListener("mouseover", function (evt) {
    evt.preventDefault();
    var block = templates[2].querySelector('.item__description');
    block.classList.remove('visually-hidden')
});

templates[3].addEventListener("mouseover", function (evt) {
    evt.preventDefault();
    var block = templates[3].querySelector('.item__description');
    block.classList.remove('visually-hidden')
});

templates[4].addEventListener("mouseover", function (evt) {
    evt.preventDefault();
    var block = templates[4].querySelector('.item__description');
    block.classList.remove('visually-hidden')
});

templates[5].addEventListener("mouseover", function (evt) {
    evt.preventDefault();
    var block = templates[5].querySelector('.item__description');
    block.classList.remove('visually-hidden')
});


templates[0].addEventListener("mouseout", function (evt) {
    evt.preventDefault();
    var block = templates[0].querySelector('.item__description');
    block.classList.add('visually-hidden')
});

templates[1].addEventListener("mouseout", function (evt) {
    evt.preventDefault();
    var block = templates[1].querySelector('.item__description');
    block.classList.add('visually-hidden')
});

templates[2].addEventListener("mouseout", function (evt) {
    evt.preventDefault();
    var block = templates[2].querySelector('.item__description');
    block.classList.add('visually-hidden')
});

templates[3].addEventListener("mouseout", function (evt) {
    evt.preventDefault();
    var block = templates[3].querySelector('.item__description');
    block.classList.add('visually-hidden')
});

templates[4].addEventListener("mouseout", function (evt) {
    evt.preventDefault();
    var block = templates[4].querySelector('.item__description');
    block.classList.add('visually-hidden')
});

templates[5].addEventListener("mouseout", function (evt) {
    evt.preventDefault();
    var block = templates[5].querySelector('.item__description');
    block.classList.add('visually-hidden')
});