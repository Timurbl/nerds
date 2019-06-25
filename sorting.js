(function () {

    let inDescendingOrder = document.querySelector(".in_descending_order");
    let inAscendingOrder = document.querySelector(".in_ascending_order");
    let templates = document.querySelector(".templates");

    inAscendingOrder.addEventListener("click", function (evt) {
        evt.preventDefault();

        console.log("click");

        if (inAscendingOrder.classList.length == 1) {
            inAscendingOrder.classList.add("order__active");
            templates.style.cssText="flex-direction: row-reverse; flex-wrap: wrap-reverse;";

            inDescendingOrder.classList.remove("order__active")
        }
    });

    inDescendingOrder.addEventListener("click", function (evt) {
        evt.preventDefault();

        if (inDescendingOrder.classList.length == 1) {
            inDescendingOrder.classList.add("order__active");
            templates.style.cssText="flex-direction: row; flex-wrap: wrap;";

            inAscendingOrder.classList.remove("order__active")
        }
    })

}());