const sendgrid = require("sendgrid");
const helper = sendgrid.mail;

// SendGrid API Key
const keys = require("../config/keys");

// additional customization by using Mail in the SendGrid library
class Mailer extends helper.Mail {
  // reusable for other mailing services
  constructor({ subject, recipients }, content) {
    super();

    this.sgApi = sendgrid(keys.sendGridKey);

    // Sendgrid properties
    this.from_email = new helper.Email("no-reply@aeonwebserver.com");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    //  formatAddresses helper function to format recipients
    this.recipients = this.formatAddresses(recipients);

    //built-in functionality of Mail
    this.addContent(this.body);

    // setup click tracking
    this.addClickTracking();

    // process list of recipients
    //   formatted list
    this.addRecipients();
  }

  // Helper Functions
  // Format array to individual email property
  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  addClickTracking() {
    //   Based on SendGrid Documentation
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();

    // adds helper Email to every personalized object
    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });

    this.addPersonalization(personalize);
  }

  async send() {
    // sendgrid config
    const request = this.sgApi.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: this.toJSON()
    });

    const response = this.sgApi.API(request);
    return response;
  }
}

// can be imported to another File
module.exports = Mailer;
