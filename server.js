import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// ─── Telegram Bot Booking Endpoint ───
app.post('/api/contact', async (req, res) => {
    const { name, phone, condition, message } = req.body;

    if (!name || !phone) {
        return res.status(400).json({ error: 'Name and phone are required' });
    }

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
        console.error('Missing Telegram env vars');
        return res.status(500).json({ success: false, error: 'Server misconfiguration' });
    }

    const patientMsg = message ? message : "N/A";
    const patientCond = condition ? condition : "General Inquiry";

    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    const formattedPhone = cleanPhone.startsWith('+') ? cleanPhone : '+91' + cleanPhone;

    // Format message with HTML and Emojis
    const telegramMessage = `
🏥 <b>New Appointment Request</b>

👤 <b>Name:</b> ${name}
📞 <b>Phone:</b> ${formattedPhone}
🩺 <b>Condition:</b> ${patientCond}

💬 <b>Message:</b>
${patientMsg}
    `;

    try {
        // We use native node fetch (requires Node 18+)
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: telegramMessage,
                parse_mode: 'HTML'
            })
        });

        const data = await response.json();

        if (response.ok && data.ok) {
            return res.status(200).json({ success: true });
        }

        console.error('Telegram API error:', data);
        return res.status(500).json({ success: false, error: 'Failed to send to Telegram' });

    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

// ─── Serve React build ───
app.use(express.static(join(__dirname, 'dist')));
app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
