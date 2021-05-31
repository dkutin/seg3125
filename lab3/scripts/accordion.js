window.onload = () => {
        let acc = document.getElementsByClassName("accordion");

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            toggleAccordion(this);
        });
    }
    toggleAccordion(acc[0]);
}

/**
 * Toggles the current selected accoridon.
 * 
 * @param {*} accordion 
 */
function toggleAccordion(accordion) {
    if (!accordion.classList.contains('disabled')) {
        accordion.classList.toggle('active');
        accordion.nextElementSibling.classList.toggle('hidden');
    }
}

/**
 * 
 * @param {*} accordion 
 */
function closeAccordion(accordion) {
    accordion.classList.remove('active');
    accordion.nextElementSibling.classList.add('hidden');
}

/**
 * Resets all Accordions to their intial state.
 * 
 * @param {*} accordion the accordion to remain expanded.
 */
function resetAccordions(accordion) {
    let acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        closeAccordion(acc[i]);
    }

    toggleAccordion(accordion);
}