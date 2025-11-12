// functions/send-email.js
import nodemailer from "nodemailer";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, message: "Method not allowed" }),
    };
  }

  try {
    const { name, email, project, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, message: "Missing required fields." }),
      };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // --- Email to Admin ---
    const adminMail = {
      from: `"${name}" <${email}>`,
      to: process.env.TO_EMAIL,
      subject: `📬 New Contact Message from ${name} (${project || "General"})`,
      text: `
You have received a new message:

Name: ${name}
Email: ${email}
Project: ${project || "Not specified"}
Message: ${message}
      `,
    };

    // --- Auto-reply to User ---
    const userMail = {
      from: `"Shoaib Raza" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Shoaib Raza!",
      html: `
        <div style="font-family: Arial; color: #111; line-height: 1.6;">
          <h2 style="color: #00ffff;">Hey ${name},</h2>
          <p>Thank you for reaching out! I’ve received your message about <b>${project || "your project"}</b>.</p>
          <p>I’ll get back to you within 24 hours.</p>
          <hr/>
          <p><strong>Your Message:</strong></p>
          <blockquote style="border-left: 3px solid #00ffff; padding-left: 10px; color: #555;">
            ${message}
          </blockquote>
          <p>Best regards,<br/> <b>Shoaib Raza</b><br/>Full Stack & Security Engineer</p>
        </div>
      `,
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(userMail),
    ]);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Emails sent successfully!" }),
    };
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: "Failed to send emails." }),
    };
  }
}
