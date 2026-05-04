import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      name,
      company,
      email,
      phone,
      services,
      message,
    } = await request.json();

    // Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // simplifies config
      auth: {
        user: process.env.GMAIL_USER, // your gmail
        pass: process.env.GMAIL_APP_PASSWORD, // 16-char app password
      },
    });

    const mailOptions = {
      from: `"RiseIT" <${process.env.GMAIL_USER}>`,
      to: ["developer@riseit.com"], // where you receive emails
      replyTo: email, // IMPORTANT: so you can reply to user directly
      subject: `Contact form Enquiry from <${email}>`,
      text: `
        Name: ${name}
        Company: ${company}
        Email: ${email}
        Phone: ${phone}
        Services: ${services}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Services:</strong> ${services}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Message sent successfully." });

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Message not sent." },
      { status: 500 }
    );
  }
}