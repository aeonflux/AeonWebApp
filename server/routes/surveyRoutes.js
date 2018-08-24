const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

// Access model
const mongoose = require("mongoose");
const Survey = mongoose.model("survey");

const Mailer = require("../services/mailerService");
const surveyTemplate = require("../services/emailTemplates/template");

module.exports = app => {
  // Create a Survey

  //check if user logged in

  // app.post(<route>, <middleware>, <params>)
  //functions will be executed along with the route functions
  //middlewares are reusable
  //check credits (at least 1)
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    // Send an email
    // create an instance of the class
    //(subject & recipients, body of email)
    const mailer = new Mailer(survey, surveyTemplate(survey));
    mailer.send();
  });
};
