// Simple Express server to receive contact form submissions and send email via SMTP
// Environment variables required:
// SMTP_HOST, SMTP_PORT, SMTP_SECURE (true/false), SMTP_USER, SMTP_PASS, EMAIL_TO

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.EMAIL_TO) {
  console.warn('Warning: SMTP configuration or EMAIL_TO is missing. Please set SMTP_HOST, SMTP_USER, SMTP_PASS, and EMAIL_TO in .env');
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: (process.env.SMTP_SECURE === 'true'),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }
});

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, phone, company, companyType, serviceType, message } = req.body || {};
    if (!name || !email || !phone || !serviceType || !message) {
      return res.status(400).json({ error: 'Required fields missing' });
    }

    const html = `
      <h3>New contact form submission</h3>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company || '-')}</p>
      <p><strong>Company Type:</strong> ${escapeHtml(companyType || '-')}</p>
      <p><strong>Service Type:</strong> ${escapeHtml(serviceType)}</p>
      <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
    `;

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.EMAIL_TO,
      subject: `New contact form: ${name} — ${serviceType}`,
      html,
    });

    return res.json({ ok: true, info });
  } catch (err) {
    console.error('send-email error', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Send-email server listening on port ${PORT}`);
});

function escapeHtml(unsafe) {
  return String(unsafe || '').replace(/[&'"<>]/g, function (c) {
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
  });
}
