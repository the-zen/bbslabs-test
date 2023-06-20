import { Resend } from "resend";
import EmailToSend from "../../../../emails/custom-email";

import type { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend("re_VLARh8fV_J8udXnmY73zfwLQAgDQwyHoB");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await resend.emails.send({
      from: "nathan@bbslabs.io",
      to: "jemg2510@gmail.com",
      subject: "Hello World",
      react: EmailToSend({ invitedByUsername: "Nathan Lazo" }),
    });
    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export default handler;
