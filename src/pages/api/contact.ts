import type { NextApiRequest, NextApiResponse } from 'next'
import { transporter, mailOptions } from "../../../nodemailerconfig"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    const data = req.body
    try {
      await transporter.sendMail({
        ...mailOptions,
        text: "This is a test String",
        subject:"Inclusive Africa (Contact us Page)",
        html: `<h1 style="font-size:20px;margin-bottom:0px;">Email from Inclusive Africa Contact us Page<h1><br>
               <p style="font-size:16px;margin-bottom:0px;">Name: ${data.name}</p>
               <a style="font-size:16px;margin-bottom:0px" href="mailto:${data.email}">Email: ${data.email}</a>
               <p style="font-size:12px;margin-bottom:0px">Message: ${data.message}</p>`
      })
      res.status(400).json({ message: "Thanks Your Message was sent Successfully" })
    } catch (error: any) {
      if (typeof error.message === 'string') {
        res.status(400).json({ message: "Error occured" })
        console.log(error.message)
      }
    }
  } else {
    res.status(400).json({ message: "Invalid Request" });
  }
}

