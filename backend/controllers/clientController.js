const { pool } = require('../config/db');

exports.addClient = async (req, res) => {
  const { inn, name } = req.body;
  const userId = req.user.id;
  try {
    const result = await pool.query(
      'INSERT INTO clients (inn, name, user_id) VALUES ($1, $2, $3) RETURNING *',
      [inn, name, userId]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Add client error:', err);
    res.status(500).json({ error: err.message });
  }
};

exports.getClients = async (req, res) => {
  const userId = req.user.id;
  try {
    const result = await pool.query(
      'SELECT id, inn, name FROM clients WHERE user_id = $1',
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Get clients error:', err);
    res.status(500).json({ error: err.message });
  }
};