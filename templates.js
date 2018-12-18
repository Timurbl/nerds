var templatesArr = [
    {
        "name": "SEDONA",
        "price": "9 900 РУБ",
        "price_sort": "9900",
        "par_1": "Информационный сайт",
        "par_2": "для туристов",
        "link": "",
        "alt": "Макет Sedona",
        "picture": "images/img-sedona.jpg"
    },
    {
        "name": "PINK APP",
        "price": "9 900 РУБ",
        "price_sort": "9900",
        "par_1": "Продуктовый лендинг",
        "par_2": "приложения для IOS и Android",
        "link": "",
        "alt": "Макет Pink",
        "picture": "images/img-pink.jpg"
    },
    {
        "name": "BARBERSHOP",
        "price": "9 500 РУБ",
        "price_sort": "9500",
        "par_1": "Информационный сайт",
        "par_2": "для туристов",
        "link": "",
        "alt": "Макет Barbershop",
        "picture": "images/img-barbershop.jpg"
    },
    {
        "name": "MISHKA",
        "price": "9 300 РУБ",
        "price_sort": "9300",
        "par_1": "Информационный сайт",
        "par_2": "для туристов",
        "link": "",
        "alt": "Макет Mishka",
        "picture": "images/img-mishka.jpg"
    },
    {
        "name": "APLUS",
        "price": "8 000 РУБ",
        "price_sort": "8000",
        "par_1": "Информационный сайт",
        "par_2": "для туристов",
        "link": "",
        "alt": "Макет Aplus",
        "picture": "images/img-aplus.jpg"
    },
    {
        "name": "KVAST",
        "price": "6 900 РУБ",
        "price_sort": "6900",
        "par_1": "Информационный сайт",
        "par_2": "для туристов",
        "link": "",
        "alt": "Макет Kvast",
        "picture": "images/img-kvast.jpg"
    }
];

var sortBy = document.querySelector('.sort__href--active');
var byName = document.querySelector('#by_name');
var byPrice = document.querySelector('#by_price');
var byType = document.querySelector('#by_type');
var sortActive = document.querySelector('.sort__href--active');

sortTemplates(sortBy, templatesArr);
templatesClick();

byName.addEventListener('click',function (evt) {
    evt.preventDefault();
    byName.classList.add('sort__href--active');
    sortActive.classList.remove('sort__href--active');
    sortActive = document.querySelector('.sort__href--active');
    sortBy = document.querySelector('.sort__href--active');
    sortTemplates(sortBy, templatesArr);
});

byPrice.addEventListener('click',function (evt) {
    evt.preventDefault();
    byPrice.classList.add('sort__href--active');
    sortActive.classList.remove('sort__href--active');
    sortActive = document.querySelector('.sort__href--active');
    sortBy = document.querySelector('.sort__href--active');
    sortTemplates(sortBy, templatesArr);
});

byType.addEventListener('click',function (evt) {
    evt.preventDefault();
    byType.classList.add('sort__href--active');
    sortActive.classList.remove('sort__href--active');
    sortActive = document.querySelector('.sort__href--active');
    sortBy = document.querySelector('.sort__href--active');
    sortTemplates(sortBy, templatesArr);
});


function sortTemplates(sortBy, templatesArr) {
    if (sortBy.textContent == 'По цене') {
        var sortOrder = document.querySelector('.sort__order--active');
        var reverse = false;

        if (sortOrder.classList[0] == 'in_descending_order' || sortOrder.classList[1] == 'in_descending_order') {
            reverse = true;
        }
        else {
            reverse = false
        }
        templatesArr.sort(sortByPrice);
        if (reverse)
            templatesArr.reverse();
    }
    else if (sortBy.textContent == 'По типу') {
        console.log('sort by type');
    }
    else {
        templatesArr.sort(sortByName)
    }

    var container = document.querySelector('.templates');
    clearContainer(container);

    templatesArr.forEach(function (templ) {
        var element = getElementFromTemplate(templ);
        container.appendChild(element)
    });

    templatesClick();
}

function clearContainer(container) {
    while (container.children.length != 0) {
        container.removeChild(container.firstChild);
    }
}

function getElementFromTemplate(data) {
    var template = document.querySelector('#template');
    var element = template.content.children[0].cloneNode(true);
    var br = document.createElement('br');
    element.querySelector('.name_of_template').textContent = data['name'];
    element.querySelector('.template__par').innerHTML = `${data['par_1']}<br/>${data['par_2']}`;
    element.querySelector('.template__price').textContent = data['price'];
    var image = element.querySelector('.template_image');
    image.src = data['picture'];
    image.alt = data['alt'];
    return element
}


function sortByPrice(a, b) {
    if (a['price_sort'] >= b['price_sort'])
        return 1;
    return 0;
}

function sortByName(a, b) {
    if (a['name'] >= b['name'])
        return 1;
    return 0
}

function templatesClick() {
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
}


