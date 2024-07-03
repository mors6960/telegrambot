const axios = require('axios');
const { startWebApp } = require('../services/webAppService');

const TELEGRAM_BOT_TOKEN = '6742365164:AAFbKdt1XR9Zq52-p0Xv-DZYauZm2yvvpmk';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;

exports.handleMessage = async (req, res) => {
  const message = req.body.message;

  if (message && message.text && message.text.toLowerCase() === 'start webapp') {
    startWebApp();
    await axios.post(`${TELEGRAM_API_URL}/sendMessage`, {
      chat_id: message.chat.id,
      text: 'Web app is starting...',
    });
  }

  res.sendStatus(200);
};
