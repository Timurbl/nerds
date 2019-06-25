(function () {

    getTemplates();

    function getTemplates() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'templates.json');
        xhr.onload = function (evt) {
            var rawData = evt.target.response;
            var loadedTemplates = JSON.parse(rawData);
            renderTemplates(loadedTemplates);
        };
        xhr.send();

    }

    function renderTemplates(templates) {
        var container = document.querySelector('.templates');
        clearContainer(container);

        templates.forEach(function (templ) {
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

    function templatesClick() {
        var templates = document.querySelectorAll(".templates__item");

        var item__description = document.querySelectorAll(".item__description");
        var path = document.querySelectorAll("path");


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



        item__description[0].addEventListener("mouseover", function (evt) {
            evt.preventDefault();
            path[0].setAttribute("fill", "#4D4D4D");
        });
        item__description[1].addEventListener("mouseover", function (evt) {
            evt.preventDefault();
            path[1].setAttribute("fill", "#4D4D4D");
        });
        item__description[2].addEventListener("mouseover", function (evt) {
            evt.preventDefault();
            path[2].setAttribute("fill", "#4D4D4D");
        });
        item__description[3].addEventListener("mouseover", function (evt) {
            evt.preventDefault();
            path[3].setAttribute("fill", "#4D4D4D");
        });
        item__description[4].addEventListener("mouseover", function (evt) {
            evt.preventDefault();
            path[4].setAttribute("fill", "#4D4D4D");
        });
        item__description[5].addEventListener("mouseover", function (evt) {
            evt.preventDefault();
            path[5].setAttribute("fill", "#4D4D4D");
        });


        item__description[0].addEventListener("mouseout", function (evt) {
            evt.preventDefault();
            path[0].setAttribute("fill", "#e9e9e9");
        });
        item__description[1].addEventListener("mouseout", function (evt) {
            evt.preventDefault();
            path[1].setAttribute("fill", "#e9e9e9");
        });
        item__description[2].addEventListener("mouseout", function (evt) {
            evt.preventDefault();
            path[2].setAttribute("fill", "#e9e9e9");
        });
        item__description[3].addEventListener("mouseout", function (evt) {
            evt.preventDefault();
            path[3].setAttribute("fill", "#e9e9e9");
        });
        item__description[4].addEventListener("mouseout", function (evt) {
            evt.preventDefault();
            path[4].setAttribute("fill", "#e9e9e9");
        });
        item__description[5].addEventListener("mouseout", function (evt) {
            evt.preventDefault();
            path[5].setAttribute("fill", "#e9e9e9");
        });
    }

}());