const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Insert user
router.post('/users', async (req, res) => {
  const { name, email, registration_date } = req.body;
  try {
    const [result] = await db.query('INSERT INTO users (name, email, registration_date) VALUES (?, ?, ?)', [name, email, registration_date]);
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM users');
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get user by ID
router.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update user by ID
router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, registration_date } = req.body;
  try {
    const [result] = await db.query('UPDATE users SET name = ?, email = ?, registration_date = ? WHERE id = ?', [name, email, registration_date, id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete user by ID
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Repeat the same pattern for machines, tapes, assignments, machine_tapes, and tape_consumption
// Example for machines

// Insert machine
router.post('/machines', async (req, res) => {
  const { name, description, purchase_date } = req.body;
  try {
    const [result] = await db.query('INSERT INTO machines (name, description, purchase_date) VALUES (?, ?, ?)', [name, description, purchase_date]);
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all machines
router.get('/machines', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM machines');
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get machine by ID
router.get('/machines/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM machines WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Machine not found' });
    }
    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update machine by ID
router.put('/machines/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, purchase_date } = req.body;
  try {
    const [result] = await db.query('UPDATE machines SET name = ?, description = ?, purchase_date = ? WHERE id = ?', [name, description, purchase_date, id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Machine not found' });
    }
    res.status(200).json({ message: 'Machine updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete machine by ID
router.delete('/machines/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query('DELETE FROM machines WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Machine not found' });
    }
    res.status(200).json({ message: 'Machine deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Insert tape
router.post('/tapes', async (req, res) => {
    const { name, description, acquisition_date } = req.body;
    try {
      const [result] = await db.query('INSERT INTO tapes (name, description, acquisition_date) VALUES (?, ?, ?)', [name, description, acquisition_date]);
      res.status(201).json({ id: result.insertId });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
 
  router.get('/tapes', async (req, res) => {
    try {
      const [rows] = await db.query('SELECT * FROM tapes');
      res.status(200).json(rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
 
  router.get('/tapes/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const [rows] = await db.query('SELECT * FROM tapes WHERE id = ?', [id]);
      if (rows.length === 0) {
        return res.status(404).json({ error: 'Tape not found' });
      }
      res.status(200).json(rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
 
  router.put('/tapes/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, acquisition_date } = req.body;
    try {
      const [result] = await db.query('UPDATE tapes SET name = ?, description = ?, acquisition_date = ? WHERE id = ?', [name, description, acquisition_date, id]);
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Tape not found' });
      }
      res.status(200).json({ message: 'Tape updated successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
 
  router.delete('/tapes/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const [result] = await db.query('DELETE FROM tapes WHERE id = ?', [id]);
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Tape not found' });
      }
      res.status(200).json({ message: 'Tape deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  


module.exports = router;
