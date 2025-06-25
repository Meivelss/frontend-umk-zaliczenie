import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "poczta.interia.pl",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Formularz kontaktowy" <${process.env.SMTP_USER}>`,
      to: "mastercatering@interia.pl",
      subject: "Nowa wiadomość z formularza kontaktowego",
      text: `Email: ${email}\nTelefon: ${phone}\n\nWiadomość:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    let errorMessage = "Unknown error";
    if (e instanceof Error) {
      errorMessage = e.message;
    }
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
