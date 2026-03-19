const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const frontendUrl = process.env.FRONTEND_URL;

app.use(cors({
  origin: frontendUrl || true,
}));
app.use(express.json());

function validatePayload(body) {
  const email = String(body?.email || '').trim();
  const reason = String(body?.reason || '').trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return { valid: false, message: 'A valid email address is required.' };
  }

  if (reason.length < 10) {
    return { valid: false, message: 'Reason must be at least 10 characters.' };
  }

  if (reason.length > 4000) {
    return { valid: false, message: 'Reason is too long.' };
  }

  return { valid: true, email, reason };
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const portNumber = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error('Missing SMTP configuration. Set SMTP_HOST, SMTP_USER, and SMTP_PASS.');
  }

  return nodemailer.createTransport({
    host,
    port: portNumber,
    secure: portNumber === 465,
    auth: {
      user,
      pass,
    },
  });
}

app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.post('/api/contact', async (req, res) => {
  const validation = validatePayload(req.body);

  if (!validation.valid) {
    return res.status(400).json({ message: validation.message });
  }

  const recipient = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER;
  const sender = process.env.CONTACT_SENDER_EMAIL || process.env.SMTP_USER;

  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from: `MedPulse Contact <${sender}>`,
      to: recipient,
      replyTo: validation.email,
      subject: 'New Contact Request - MedPulse Website',
      text: [
        'A new contact request was submitted from the MedPulse website.',
        '',
        `Sender Email: ${validation.email}`,
        '',
        'Reason for Contact:',
        validation.reason,
      ].join('\n'),
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Sender Email:</strong> ${validation.email}</p>
        <p><strong>Reason for Contact:</strong></p>
        <p>${validation.reason.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return res.status(200).json({ message: 'Contact request sent successfully.' });
  } catch (error) {
    console.error('Failed to send contact request:', error);
    return res.status(500).json({ message: 'Unable to send your request right now. Please try again later.' });
  }
});

app.listen(port, () => {
  console.log(`MedPulse contact API running on port ${port}`);
});
