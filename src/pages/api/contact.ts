import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const sgMail = require("@sendgrid/mail");
    const data = req.body;

    try {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: process.env.RECEIVER_EMAIL, // Change to your recipient
        from: process.env.SENDER_EMAIL, // Change to your verified sender
        subject: "Inclusive Africa (Contact Us Form)",
        text: `Name: ${data.name}, Email: ${data.email}, Message: ${data.message}`,
        html: `<h1>Email from Inclusive Africa Contact Us Form</h1>
                <p>
                  <strong>Name: </strong> ${data.name} <br />
                  <strong>Email: </strong><a href="mailto:${data.email}">${data.email}</a>
                  <br />
                  <strong>Message: </strong> <br />
                  ${data.message}
                </p>`,
      };
      await sgMail.send(msg);
      res.status(200).json({ message: "Email sent" });
    } catch (error: any) {
      console.log(error);
    }
  } else {
    res.status(400).json({ message: "Invalid Request" });
  }
}
