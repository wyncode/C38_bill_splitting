if (process.env.NODE_ENV !== 'production') require('dotenv').config();

let accountSid = process.env.TWILIO_SID;
let authToken = process.env.TWILIO_AUTH_TOKEN;

let client = require('twilio')(accountSid, authToken);

const welcomeText = (phoneNum) => {
  const phoneNumber = '+1' + phoneNum;
  client.messages
    .create({
      body: 'Welcome to Cuenta!',
      to: phoneNumber, // Text this number
      from: '+12017203658' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
};

module.exports = { welcomeText };
