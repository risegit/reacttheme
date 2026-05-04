import nodemailer from "nodemailer";
import { NextResponse } from "next/server";


export async function POST(request) {
  if (request.method === "POST") {
    const {
      name,
      email,
      phone,
      message,
    } = await request.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // Gmail App Password
      },
    });

    const mailOptions = {
      from: `"RiseIT" <${process.env.GMAIL_USER}>`,
      to: ["developer@riseit.com"],
      subject: `Contact form Enquire From  <${email}>`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: "Message sent successfully." });
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({ message: "Message not sent." });
    }
  } else {
    return NextResponse.json({ message: `Method ${request.method} Not Allowed` });
  }
}

