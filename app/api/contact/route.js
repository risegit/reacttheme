import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is missing");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

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
      html: `<h2>New Contact Form Enquiry</h2>`,
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