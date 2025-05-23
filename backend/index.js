const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: "https://myproject-xbvq.vercel.app" 
}));

app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend работает!' });
});

app.listen(PORT, () => {
    console.log(`Server запущен на порту ${PORT}`);
});
