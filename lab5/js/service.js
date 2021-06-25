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

/**
 * Date options for Employee One.
 * 
 * @param {*} date 
 * @returns 
 */
function setOptionsOne(date) {
    const options = [0, 1, 6];
    let day = date.getDay();

    return [(options.indexOf(day) === -1)];
}

/**
 * Date options for Employee Two.
 * 
 * @param {*} date 
 * @returns 
 */
function setOptionsTwo(date) {
    const options = [0, 2, 6];
    let day = date.getDay();

    return [(options.indexOf(day) === -1)];
}

/**
 * Date options for Employee Three.
 * 
 * @param {*} date 
 * @returns 
 */
function setOptionsThree(date) {
    const options = [0, 3, 6];
    let day = date.getDay();

    return [(options.indexOf(day) === -1)];
}

/**
 * Date options for All Employees.
 * 
 * @param {*} date 
 * @returns 
 */
function setOptionsAll(date) {
    const options = [0, 6];
    let day = date.getDay();

    return [(options.indexOf(day) === -1)];
}

/**
 * Get the Name of an Employee from an ID.
 * 
 * @param {*} id 
 * @returns 
 */
function getName(id) {
    switch (id) {
        case "1":
            return 'Andrew Ho';
        case "2":
            return 'Ben Wassel';
        case "3":
            return 'Leila Nourishad';
        case "4":
        default:
            return 'One of our physicians';
    }
}

/**
 * Get the Name of a Service from an ID.
 * 
 * @param {*} date 
 * @returns 
 */
function getService(id) {
    switch (id) {
        case "1":
            return 'Neurological Physiotherapy'
        case "2":
            return 'In-home Physiotherapy'
        case "3":
            return 'Orthopaedic Physiotherapy';
        case "4":
            return 'Concussion Management';
        case "5":
            return 'Massage Therapy';
        default:
            return '';
    }
}

/**
 * Validates form elements.
 * 
 * @param {*} elements 
 * @returns 
 */
function validateForm(elements) {
    for (element of elements) {
        let value = element.val();

        if (value.replace(/\s/g,"") == "") {
            return false;
        }
    }
    return true;
}