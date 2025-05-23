onst express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Регистрация
app.post('/api/register', (req, res) => {
    const { email, password } = req.body;
    console.log('Получен запрос на регистрацию:', { email, password });
    res.json({ success: true, message: 'Регистрация успешна!' });
});

// Вход
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Получен запрос на вход:', { email, password });
    res.json({ success: true, token: 'fake-jwt-token' });
});

app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на порту ${PORT}`);
});
