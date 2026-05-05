import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY); // ✅ moved here

    const {
      name,
      company,
      email,
      phone,
      services,
      message,
    } = await request.json();

    await resend.emails.send({
      from: "RiseIT <onboarding@resend.dev>",
      to: ["developer@riseit.com"],
      reply_to: email,
      subject: `Contact form Enquiry from <${email}>`,
      html: `
        <h2>New Contact Form Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Services:</strong> ${services}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      text: `
        Name: ${name}
        Company: ${company}
        Email: ${email}
        Phone: ${phone}
        Services: ${services}
        Message: ${message}
      `,
    });

    return NextResponse.json({ message: "Message sent successfully." });

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Message not sent." },
      { status: 500 }
    );
  }
}