var nodemailer = require("nodemailer");

const mailSent = async (parentName, childName, time, parentEmail) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 25,
    secure: false,
    auth: {
      user: "806518305d7489",
      pass: "d25b9eb3e273e4",
    },
  });

  var mailOptions = {
    from: "abc@gmail.com",
    to: parentEmail,
    subject: "NotchUp Trial Class Booked successfully",
    text: `Dear ${parentName}
                ${childName}'s class at ${time}  has been successfully booked'`,
  };

  const sent = await transporter.sendMail(mailOptions);
  return sent;
};

module.exports = mailSent;
