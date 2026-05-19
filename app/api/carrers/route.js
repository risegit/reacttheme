import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is missing");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const formData = await request.formData();
    
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const resume = formData.get("resume");

    // Prepare email content
    const emailData = {
      from: "RiseIT Careers <developer@send.riseit.com>",
      to: ["nimish.shrimankar@riseit.in"],
      reply_to: email,
      subject: `Job Application: ${subject} from ${name}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Position Applied For:</strong> ${subject}</p>
        <p><strong>Comment:</strong> ${message || "No comment provided"}</p>
      `,
    };

    // Add resume as attachment if provided
    if (resume && resume.size > 0) {
      const bytes = await resume.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      emailData.attachments = [
        {
          filename: resume.name,
          content: buffer.toString("base64"),
          encoding: "base64",
        },
      ];
    }

    await resend.emails.send(emailData);

    return NextResponse.json({ 
      message: "Application submitted successfully!" 
    });

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to submit application. Please try again." },
      { status: 500 }
    );
  }
}