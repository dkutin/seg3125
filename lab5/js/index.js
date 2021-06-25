$(document).ready(() => {
    /**
     * Elements to validate.
     */
    const phoneNumber = $('#inputPhone');
    const creditCard = $('#cc-number');
    const creditCardName = $('#cc-name');
    const email = $('#inputEmail');
    const firstName = $('#inputFirst');
    const lastName = $('#inputLast');
    const service = $('#inputService');
    const expert = $('#inputExpert');
    const datePicker = $('#inputDate');

    /**
     * Initalize datepicker.
     */
    datePicker.datepicker({
        dateFormat: "yy-mm-dd",
        maxDate: 0,
        minDate: 0,
    });

    /**
     * Form feedback.
     */
    const submit = $('#submit');
    const confirmation = $('#confirmation');
    const modal = $('#exampleModal')


    /**
     * Event Listeners.
     */
    phoneNumber.on('change', () => {
        if (validatePhone(phoneNumber.val())) {
            $('#inputPhone-invalidfeedback').hide();
            $('#inputPhone-validfeedback').show();
        } else {
            $('#inputPhone-validfeedback').hide();
            $('#inputPhone-invalidfeedback').show();
        }
    });

    creditCard.on('change', () => {
        if (valdateCreditCard(creditCard.val())) {
            $('#cc-number-invalidfeedback').hide();
            $('#cc-number-validfeedback').show();
        } else {
            $('#cc-number-validfeedback').hide();
            $('#cc-number-invalidfeedback').show();
        }
    });

    email.on('change', () => {
        if (validateEmail(email.val())){
            $('#inputEmail-invalidfeedback').hide();
            $('#inputEmail-validfeedback').show();
        } else {
            $('#inputEmail-validfeedback').hide();
            $('#inputEmail-invalidfeedback').show();
        }
    });

    expert.on('change', () => {
        updateDatePicker(datePicker, expert);
    })

    submit.click(() => {

        // If all validity checks have passed
        if (true) {
            modal.modal('hide');
            confirmation.html(`<div class="container-lg"><h3 class="my-4"> Success! </h3> <p>${getName(expert.value)} will see you on ${datePicker.val()} for a ${getService(service.value)}</p></div>`);
            confirmation.removeAttr('hidden');

            setTimeout(() => {
                confirmation.hide();
            }, 5000)
        }
    })
});