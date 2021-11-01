const transporter = require("../../infra/email");
const {username, user} = require("../configs/email-auth-config");

async function sendMail({ to, subject, text }) {
  try {
    const email = {
      from: `${username} <${user}>`,
      to,
      subject,
      text,
    };

    return transporter.sendMail(email);
  } catch (error) {
    console.log("error in send mail: " + error);
    throw new Error("sendMail-controller", "Email not sended");
  }
}

module.exports = { sendMail };
