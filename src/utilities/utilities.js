import moment from 'moment'

function alphaOnly ( event ) {
    if (!/^[a-z A-Z]*$/.test(event.key)) {
        // alert("Please enter alphabet only");
        event.preventDefault();
    }
}

function alphaNumOnly (event) {
    if (/[^0-9a-zA-Z]/.test(event.key)) {
        event.preventDefault();
    }
}

function objectHasKey (obj, key) {
    if ( obj !== undefined && obj !== null && Object.keys(obj).length > 0 && obj.hasOwnProperty(key)) {
        return true
    }
    return false
}

function objectHasKeys (obj) {
    if ( obj !== undefined && obj !== null && Object.keys(obj).length > 0 ) {
        return true
    }
    return false
}

function validateEmail(emailField){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(emailField.value)) {
        // alert('Invalid Email Address');
        return false;
    }
    return true;
}

function arrayNotNull(array) {
    if ( array !== undefined && array !== null && Array.isArray(array) && array.length > 0){
        return true
    }
    return false
}

function notNull(data) {
    if ( data !== undefined && data !== null && data !== '' ){
        return true
    }
    return false
}


function defaultDate(date) {
    return moment(date).format('DD/MM/YYYY')
}

function defaultDateTime(date) {
    return moment(date).format('DD/MM/YYYY: hh:mm A')
}

export {alphaNumOnly, alphaOnly, objectHasKey, objectHasKeys, validateEmail, arrayNotNull, notNull, defaultDate, defaultDateTime};
