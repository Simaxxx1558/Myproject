const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: "https://your-client.vercel.app " // ������ �� ���� URL ����� ������
}));

app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend ��������!' });
});

app.listen(PORT, () => {
    console.log(`Server ������� �� ����� ${PORT}`);
});