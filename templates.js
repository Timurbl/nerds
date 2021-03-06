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

        for (let i = 0; i < templates.length; i++) {
            templatesClickListener(templates[i], item__description[i], path[i])
        }
    }

    function templatesClickListener(template, item, path) {
        template.addEventListener("mouseover", function (evt) {
            evt.preventDefault();
            var block = template.querySelector('.item__description');
            block.classList.remove('visually-hidden')
        });
        template.addEventListener("mouseout", function (evt) {
            evt.preventDefault();
            var block = template.querySelector('.item__description');
            block.classList.add('visually-hidden')
        });
        item.addEventListener("mouseover", function (evt) {
            evt.preventDefault();
            path.setAttribute("fill", "#4D4D4D");
        });
        item.addEventListener("mouseout", function (evt) {
            evt.preventDefault();
            path.setAttribute("fill", "#e9e9e9");
        });
    }

    function clearContainer(container) {
        while (container.children.length != 0) {
            container.removeChild(container.firstChild);
        }
    }
}());