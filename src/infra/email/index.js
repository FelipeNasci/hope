const nodemailer = require('nodemailer');
const mailConfig = require('../../resources/configs/email-transporter-config');

const transporter = nodemailer.createTransport(mailConfig);

module.exports = transporter;