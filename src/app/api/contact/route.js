import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "rajib01943075658@gmail.com",
      replyTo: email,
      subject: `📩 New Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f4f4f4; padding:20px;">
          
          <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 5px 20px rgba(0,0,0,0.1);">

            <!-- Header -->
            <div style="background:linear-gradient(135deg,#4f46e5,#06b6d4); padding:20px; text-align:center; color:white;">
              <h2 style="margin:0;">📩 New Contact Message</h2>
              <p style="margin:5px 0 0; font-size:14px;">From your portfolio website</p>
            </div>

            <!-- Body -->
            <div style="padding:20px; color:#333;">
              
              <p style="margin:10px 0;"><strong>👤 Name:</strong> ${name}</p>
              <p style="margin:10px 0;"><strong>📧 Email:</strong> ${email}</p>

              <hr style="margin:20px 0; border:none; border-top:1px solid #eee;" />

              <p style="margin:10px 0;"><strong>💬 Message:</strong></p>
              <div style="background:#f9f9f9; padding:15px; border-radius:8px; line-height:1.6;">
                ${message}
              </div>

            </div>

            <!-- Footer -->
            <div style="text-align:center; padding:15px; font-size:12px; color:#888; background:#fafafa;">
              Sent from your portfolio contact form 🚀
            </div>

          </div>
        </div>
      `,
    });

    console.log("Email sent:", data);

    return Response.json({
      success: true,
      data,
    });

  } catch (error) {
    console.error("Error:", error);

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}