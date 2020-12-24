export const checkFullName = (name) => {
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (!nameRegex.test(name))
     throw "Name is invalid";
}

export const checkAddress = (address) => {
    let nameRegex = RegExp('[A-Za-z,/:.0-9\\s]{3,}');
    if (!nameRegex.test(address))
     throw "Address is invalid";
}

export const checkZip = (zip) => {
    let nameRegex = RegExp('^[0-9]{6}$');
    if (!nameRegex.test(zip))
     throw "Zip is invalid";
}

export const checkPhoneNumber = (phoneNumber) => {
    let nameRegex = RegExp('^[1-9][0-9]{9}$');
    if (!nameRegex.test(phoneNumber))
     throw "Phone Number is invalid";
}
