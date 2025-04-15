const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-otp', (req, res) => {
  const { phone, method } = req.body;
  console.log(`🔐 Gửi OTP tới: ${phone} qua ${method.toUpperCase()}`);
  res.json({ success: true, message: 'Đã gửi OTP thành công' });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Mock OTP API đang chạy tại http://localhost:${PORT}`);
});

