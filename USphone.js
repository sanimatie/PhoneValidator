function telephoneCheck(str) {
const phoneRegex = /^1?\s?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$|^1?\s?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
const regexTest = phoneRegex.test(str);
console.log(str.match(phoneRegex));
return regexTest;
}

telephoneCheck("555-555-5555");
