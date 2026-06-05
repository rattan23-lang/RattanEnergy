import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, requirement, productName, sourcePage } =
      await req.json();

    await transporter.sendMail({
      from: `"Rattan Energy" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Enquiry — ${productName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;
                    border:1px solid #e4e4e7;border-radius:12px">
          <h2 style="color:#ea580c;margin-top:0">New Service Enquiry</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr style="border-bottom:1px solid #f4f4f5">
              <td style="padding:10px 0;font-weight:600;color:#52525b;width:140px">Name</td>
              <td style="padding:10px 0;color:#18181b">${name}</td>
            </tr>
            <tr style="border-bottom:1px solid #f4f4f5">
              <td style="padding:10px 0;font-weight:600;color:#52525b">Email</td>
              <td style="padding:10px 0;color:#18181b">${email}</td>
            </tr>
            <tr style="border-bottom:1px solid #f4f4f5">
              <td style="padding:10px 0;font-weight:600;color:#52525b">Phone</td>
              <td style="padding:10px 0;color:#18181b">${phone}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-weight:600;color:#52525b">Requirement</td>
              <td style="padding:10px 0;color:#18181b">${requirement}</td>
            </tr>
          </table>
          <p style="margin-top:24px;font-size:12px;color:#a1a1aa">
            Sent automatically from the Rattan Energy website.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}