

// const generateRandomSixDigits = () => {
//     const timestamp = new Date().getTime(); // Get current timestamp
//     console.log(timestamp)
//     const randomNumber = Math.floor(Math.random() * 1000000); // Generate a random number between 0 and 999999
//     console.log(randomNumber)
//     const combinedNumber = timestamp.toString() + randomNumber.toString(); // Combine timestamp and random number
//     console.log(combinedNumber)
//     const sixDigitNumber = combinedNumber.slice(-6); // Extract the last six digits
//     return sixDigitNumber;
// };

// let OTPcode = generateRandomSixDigits();

let mailSubject = "Help So Easy Email Varification";
       
let content = '<p>Hay Please Verify your email Address. Your One Time Password is: <h2>' +OTPcode+'</h2>';

module.exports = {OTPcode, mailSubject, content}