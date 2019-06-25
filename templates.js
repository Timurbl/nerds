(function () {
    let sortBy = document.querySelector('.sort__href--active');
    let byName = document.querySelector('#by_name');
    let byPrice = document.querySelector('#by_price');
    let byType = document.querySelector('#by_type');
    let sortActive = document.querySelector('.sort__href--active');

    var inDescendingOrder = document.querySelector('.in_descending_order');
    var inAscendingOrder = document.querySelector('.in_ascending_order');

    var sortByDescendingOrder = true;

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
        sortTemplates(sortBy, templates, sortByDescendingOrder);
        templatesClick();
    }


    inDescendingOrder.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (!sortByDescendingOrder) {
            sortByDescendingOrder = true;
            inDescendingOrder.children[0].children[0].style.fill = '#010101';
            inAscendingOrder.children[0].children[0].style.fill = '#a6a6a6';
            getTemplates();
        }
    });

    inAscendingOrder.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (sortByDescendingOrder) {
            sortByDescendingOrder = false;
            inAscendingOrder.children[0].children[0].style.fill = '#010101';
            inDescendingOrder.children[0].children[0].style.fill = '#a6a6a6';
            getTemplates();
        }
    });

    byName.addEventListener('click',function (evt) {
        evt.preventDefault();
        byName.classList.add('sort__href--active');
        sortActive.classList.remove('sort__href--active');
        sortActive = document.querySelector('.sort__href--active');
        sortBy = document.querySelector('.sort__href--active');
        getTemplates();
    });

    byPrice.addEventListener('click',function (evt) {
        evt.preventDefault();
        byPrice.classList.add('sort__href--active');
        sortActive.classList.remove('sort__href--active');
        sortActive = document.querySelector('.sort__href--active');
        sortBy = document.querySelector('.sort__href--active');
        getTemplates();
    });

    byType.addEventListener('click',function (evt) {
        evt.preventDefault();
        byType.classList.add('sort__href--active');
        sortActive.classList.remove('sort__href--active');
        sortActive = document.querySelector('.sort__href--active');
        sortBy = document.querySelector('.sort__href--active');
        getTemplates();
    });


    function sortTemplates(sortBy, templatesArr, sortByDescendingOrder) {
        var reverse;
        var filterBy = sortBy.textContent;

        switch (filterBy) {
            case 'По цене':
                if (sortByDescendingOrder) {
                    reverse = true;
                }
                else {
                    reverse = false;
                }
                templatesArr.sort(sortByPrice);
                if (reverse)
                    templatesArr.reverse();
                break;
            case 'По типу':
                console.log('sort by type');
                break;
            case 'По названию':
                if (sortByDescendingOrder) {
                    reverse = true;
                }
                else {
                    reverse = false;
                }

                templatesArr.sort(sortByName);
                if (reverse)
                    templatesArr.reverse();
                break;
        }

        var fragment = document.createDocumentFragment();
        var container = document.querySelector('.templates');
        container.innerHTML = '';

        templatesArr.forEach(function (templ) {
            var element = getElementFromTemplate(templ);
            fragment.appendChild(element)
        });

        container.appendChild(fragment);

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
}());