const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ---------- MIDDLEWARE ----------
app.use(express.json());

// CORS - allow your frontend
app.use(
  cors({
    origin: ["http://localhost:3000", "https://mounikakattubadi-portfolio.netlify.app"],
    methods: ["POST", "GET"],
  })
);


// ---------- MAIL TRANSPORT ----------
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS, // Gmail app password
  },
});

// Optional: verify mail config
transporter.verify((err) => {
  if (err) {
    console.error("❌ Mail transporter error:", err);
  } else {
    console.log("✅ Mail transporter ready");
  }
});

// ---------- ROUTES ----------

// Health check
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Contact backend running" });
});

// Contact route
app.post("/api/contact", async (req, res) => {
  const { from_name, from_email, phone, message } = req.body;

  if (!from_name || !from_email || !message) {
    return res
      .status(400)
      .json({ success: false, msg: "Name, email and message are required." });
  }

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
    to: process.env.TARGET_EMAIL || process.env.MAIL_USER,
    replyTo: from_email,
    subject: `New message from ${from_name} (Portfolio)`,
    text: `
Name: ${from_name}
Email: ${from_email}
Phone: ${phone || "Not provided"}

Message:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent from:", from_email);
    return res.json({ success: true, msg: "Email sent successfully" });
  } catch (err) {
    console.error("❌ Error sending email:", err);
    return res
      .status(500)
      .json({ success: false, msg: "Failed to send email" });
  }
});

// ---------- START SERVER ----------
app.listen(PORT, () => {
  console.log(`🚀 Contact backend running on port ${PORT}`);
});
