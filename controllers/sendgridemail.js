var fs = require("fs");
const sgMail = require("@sendgrid/mail");

const SendSendGridEmail = async (req, res) => {
  //   console.log(req, res, process.env);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  let { to = [], from = "", subject = "", body = "" } = req.body;
  to = Array.isArray(to) ? to.map((t) => ({ email: t })) : to;
  console.log(to);
  const msg = {
    to,
    from, // Use the email address or domain you verified above
    subject,
    html: body,
  };
  try {
    const sgres = await sgMail.send(msg);
    res.send({
      sgStatus: sgres[0].statusCode,
      message: "Success",
      to,
    });
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
      res.send({
        error: error.response.body,
      });
    }
  }
};

module.exports = {
  SendSendGridEmail,
};
