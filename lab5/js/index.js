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
    const modal = $('#exampleModal');
    const form = $('#book-appointment');

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
    });

    submit.click(() => {

        let textFieldsValid = validateForm([
            firstName,
            lastName,
            service,
            expert,
            datePicker,
            creditCardName,
        ]);

        let emailIsValid = validateEmail(email.val());
        let phoneIsValid = validatePhone(phoneNumber.val());
        let creditIsValid = valdateCreditCard(creditCard.val())

        
        if (textFieldsValid &&
            emailIsValid &&
            phoneIsValid &&
            creditIsValid) {

            modal.modal('hide');

            confirmation.html(`
                <div class="container-lg">
                    <h3 class="my-4"> Your appointment has been booked. </h3>
                    <p>${getName(expert.val())} will see you on ${datePicker.val()} for a ${getService(service.val())} appointment.</p>
                </div>`
            );

            confirmation.show();
            confirmation.removeAttr('hidden');
        } else {
            $('#form-invalidfeedback').html(`Some fields are invalid. Please review the form above.`);
            $('#form-invalidfeedback').show();
            setTimeout(() => {
                $('#form-invalidfeedback').hide();
            }, 8000);
        }
    });
});