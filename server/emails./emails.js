const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  const htmlEmail = `
  <style>
  .sampleH1{
    color: grey;
  }
  </style>
  <h1>Welcome to Cuenta</h1>
  <div>Thank you for signing up for cuenta services</div>
  `;
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Thanks for signing up!',
    text: `Hi ${name}! Welcome to Cuenta!`,
    html: htmlEmail,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Sorry to see you go.',
    text: `Bye ${name}. Hope to see you soon.`,
  });
};

const forgotPasswordEmail = (email, token) => {
  const htmlEmail = `
  <div>Click the link below to reset your password</div>
  <a target="_blank" rel="noopener noreferrer" href="${process.env.APP_URL}/api/password/${token}">Reset Password</a>
  `;

  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Reset Password',
    text: `Hi ${name}! Please click the link below to reset your password.`,
    html: htmlEmail,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
  forgotPasswordEmail,
};
