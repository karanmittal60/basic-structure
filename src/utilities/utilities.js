const alphaOnly = event => {
    if (!/^[a-z A-Z]*$/.test(event.key)) {
        // alert("Please enter alphabet only");

        event.preventDefault();
    }
};

const alphaNumOnly = event => {
    if (/[^0-9a-zA-Z]/.test(event.key)) {
        event.preventDefault();
    }
};



export {alphaNumOnly, alphaOnly};
