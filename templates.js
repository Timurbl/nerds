var templates = [
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
        "price": "9 900 РУБ",
        "price_sort": "9900",
        "par_1": "Информационный сайт",
        "par_2": "для туристов",
        "link": "",
        "alt": "Макет Barbershop",
        "picture": "images/img-barbershop.jpg"
    },
    {
        "name": "MISHKA",
        "price": "9 900 РУБ",
        "price_sort": "9900",
        "par_1": "Информационный сайт",
        "par_2": "для туристов",
        "link": "",
        "alt": "Макет Mishka",
        "picture": "images/img-mishka.jpg"
    },
    {
        "name": "APLUS",
        "price": "9 900 РУБ",
        "price_sort": "9900",
        "par_1": "Информационный сайт",
        "par_2": "для туристов",
        "link": "",
        "alt": "Макет Aplus",
        "picture": "images/img-aplus.jpg"
    },
    {
        "name": "KVAST",
        "price": "9 900 РУБ",
        "price_sort": "9900",
        "par_1": "Информационный сайт",
        "par_2": "для туристов",
        "link": "",
        "alt": "Макет Kvast",
        "picture": "images/img-kvast.jpg"
    }
];

console.log(templates[0][name]);

var container = document.querySelector('.templates');

templates.forEach(function (templ) {
    var element = getElementFromTemplate(templ);
    container.appendChild(element)
});


function getElementFromTemplate(data) {
    console.log(data);
    var template = document.querySelector('#template');
    var element = template.content.children[0].cloneNode(true);
    element.querySelector('.name_of_template').textContent = data['name'];
    element.querySelector('.template__par').textContent = data['par_1'] + '<br>' + data['par_2'];
    element.querySelector('.template__price').textContent = data['price'];
    var image = element.querySelector('.template_image');
    image.src = data['picture'];
    image.alt = data['alt'];
    return element
}
