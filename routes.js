const router = require("express").Router();
const { SendSendGridEmail } = require("./controllers/sendgridemail");

router.route("/").get((req, res) => {
  res.send("?");
});

router.route("/api/sendemail").post(SendSendGridEmail);

router.route("/api/sendemail").get(SendSendGridEmail);

module.exports = router;
