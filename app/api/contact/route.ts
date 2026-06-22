import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    // Validate request parameters
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required.' },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.CONTACT_RECEIVER || 'radices.technologies@gmail.com';

    // SMTP / Nodemailer Submission
    if (host && port && user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port: parseInt(port, 10),
        secure: port === '465',
        auth: {
          user,
          pass,
        },
      });

      const mailOptions = {
        from: `"${name} (via Radices Inquiry)" <${user}>`,
        to: receiver,
        replyTo: email,
        subject: `New Inquiry: ${service || 'General inquiry'} from ${name}`,
        text: `
Name: ${name}
Email: ${email}
Strategic Pillar / Service: ${service || 'Not specified'}

Message:
${message}
        `,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; margin-top: 0;">New System Inquiry</h2>
            <p>You have received a new customer query from your portfolio contact form.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 120px; border-bottom: 1px solid #f3f4f6;">Client Name:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f3f4f6;">Client Email:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #f3f4f6;">Selected Service:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><span style="background: #eff6ff; color: #1d4ed8; padding: 2px 8px; border-radius: 4px; font-size: 0.85em; font-weight: bold;">${service || 'General Inquiry'}</span></td>
              </tr>
            </table>

            <div style="margin-top: 25px; padding: 15px; background-color: #f9fafb; border-left: 4px solid #3b82f6; border-radius: 4px;">
              <h4 style="margin: 0 0 8px 0; color: #111827;">Message Details:</h4>
              <p style="margin: 0; white-space: pre-wrap; font-size: 0.95em; line-height: 1.6; color: #4b5563;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; font-size: 0.8em; color: #9ca3af; border-top: 1px solid #eee; padding-top: 15px; text-align: center;">
              This email was generated automatically by the Radices Portfolio website.
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true, message: 'Inquiry transmitted successfully.' });
    }

    // Default error: SMTP config is not present
    return NextResponse.json(
      { 
        error: 'SMTP server is not configured.',
        details: 'Please define SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in your environment variables (.env.local).'
      },
      { status: 501 }
    );
  } catch (error: any) {
    console.error('Error in contact form API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message || 'Unknown error' },
      { status: 500 }
    );
  }
}
