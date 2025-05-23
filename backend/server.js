const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { pool } = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const clientRoutes = require('./routes/clientRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', async () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(express.json());
app.use(cors({ origin: '*' })); 
app.use(morgan('combined'));

app.use('/api/auth', authRoutes);
app.use('/api', clientRoutes);

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, '0.0.0.0', async () => {
  try {
    await pool.query('SELECT NOW()');
    console.log('Connected to DB');
  } catch (err) {
    console.error('DB connection error:', err);
  }
  console.log(`Server running on port ${PORT}`);
});