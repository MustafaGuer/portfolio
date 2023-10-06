import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: body.subject,
      html: `<p>${body.message}</p><p>Kontakt: ${body.email}</p>`,
    });
    return new Response(JSON.stringify(body), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Could not send email." }), {
      status: 500,
    });
  }
}
