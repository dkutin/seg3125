/**
 * Validates the user phone number.
 * 
 * @param {int} number
 * @returns {boolean}
 */
function validatePhone(number) {
    const filter = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    return filter.test(number);
}

/**
 * 
 * Validates the users credit card number.
 * 
 * @param {int} number 
 * @returns {boolean}
 */
function valdateCreditCard(number) {
    const filter = /^([0-9]{4})-([0-9]{4})-([0-9]{4})-([0-9]{4})$/; 

    return filter.test(number);
}

/**
 * Validatse the user's email address.
 * 
 * @param {string} email 
 * @returns {boolean}
 */
function validateEmail(email) {
    console.log(email);
    const filter = /^[^\s@]+@[^\s@]+$/;

    return filter.test(email);
}

/**
 * Restricts the current date depending on options.
 * 
 * @param {*} datePicker 
 * @param {*} options 
 */
function updateDatePicker(datePicker, expert) {
    const expertId = expert.children('option:selected').val();

    datePicker.datepicker('setDate', null);

    switch (expertId) {
        case "1":
            datePicker.datepicker('destroy');
            datePicker.datepicker({
                dateFormat: "yy-mm-dd",
                maxDate: "+12m",
                minDate: 1,
                beforeShowDay: setOptionsOne,
            });
            break;
        case "2":
            datePicker.datepicker('destroy');
            datePicker.datepicker({
                dateFormat: "yy-mm-dd",
                maxDate: "+12m",
                minDate: 1,
                beforeShowDay: setOptionsTwo,
            });
            break;
        case "3":
            datePicker.datepicker('destroy');
            datePicker.datepicker({
                dateFormat: "yy-mm-dd",
                maxDate: "+12m",
                minDate: 1,
                beforeShowDay: setOptionsThree,
            });
            break;
        case "4":
            datePicker.datepicker('destroy');
            datePicker.datepicker({
                dateFormat: "yy-mm-dd",
                maxDate: "+12m",
                minDate: 1,
                beforeShowDay: setOptionsAll,
            });
            break;
        default:
            $('#inputExpert-invalidfeedback').show();
            break;
    }
}


function setOptionsOne(date) {
    const options = [0, 1, 6];
    let day = date.getDay();

    return [(options.indexOf(day) === -1)];
}


function setOptionsTwo(date) {
    const options = [0, 2, 6];
    let day = date.getDay();

    return [(options.indexOf(day) === -1)];
}


function setOptionsThree(date) {
    const options = [0, 3, 6];
    let day = date.getDay();

    return [(options.indexOf(day) === -1)];
}


function setOptionsAll(date) {
    const options = [0, 6];
    let day = date.getDay();

    return [(options.indexOf(day) === -1)];
}

function getName(id) {
    return 'Andrew Ho';
}

function getService(id) {
    return 'Massage';
}