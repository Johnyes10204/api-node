const express = require('express');
const router = express.Router();
const db = require('../config/db');




router.post('/users', async (req, res) => {
  const { name, email, registration_date } = req.body;
  try {
    const [result] = await db.query('INSERT INTO users (name, email, registration_date) VALUES (?, ?, ?)', [name, email, registration_date]);
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/users', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM users');
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


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




router.post('/machines', async (req, res) => {
  const { name, description, purchase_date } = req.body;
  try {
    const [result] = await db.query('INSERT INTO machines (name, description, purchase_date) VALUES (?, ?, ?)', [name, description, purchase_date]);
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/machines', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM machines');
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


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




router.post('/assignments', async (req, res) => {
  const { user_id, machine_id, assignment_date } = req.body;
  try {
    const [result] = await db.query('INSERT INTO assignments (user_id, machine_id, assignment_date) VALUES (?, ?, ?)', [user_id, machine_id, assignment_date]);
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/assignments', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM assignments');
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/assignments/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM assignments WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Assignment not found' });
    }
    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.put('/assignments/:id', async (req, res) => {
  const { id } = req.params;
  const { user_id, machine_id, assignment_date } = req.body;
  try {
    const [result] = await db.query('UPDATE assignments SET user_id = ?, machine_id = ?, assignment_date = ? WHERE id = ?', [user_id, machine_id, assignment_date, id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Assignment not found' });
    }
    res.status(200).json({ message: 'Assignment updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.delete('/assignments/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query('DELETE FROM assignments WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Assignment not found' });
    }
    res.status(200).json({ message: 'Assignment deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



router.post('/machine_tapes', async (req, res) => {
    const { tape_id, machine_id, quantity } = req.body;
    try {
      const [result] = await db.query('INSERT INTO machine_tapes (tape_id, machine_id, quantity) VALUES (?, ?, ?)', [tape_id, machine_id, quantity]);
      res.status(201).json({ id: result.insertId });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  
  router.get('/machine_tapes', async (req, res) => {
    try {
      const [rows] = await db.query('SELECT * FROM machine_tapes');
      res.status(200).json(rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  
  router.get('/machine_tapes/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const [rows] = await db.query('SELECT * FROM machine_tapes WHERE id = ?', [id]);
      if (rows.length === 0) {
        return res.status(404).json({ error: 'Machine Tape not found' });
      }
      res.status(200).json(rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  
  router.put('/machine_tapes/:id', async (req, res) => {
    const { id } = req.params;
    const { tape_id, machine_id, quantity } = req.body;
    try {
      const [result] = await db.query('UPDATE machine_tapes SET tape_id = ?, machine_id = ?, quantity = ? WHERE id = ?', [tape_id, machine_id, quantity, id]);
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Machine Tape not found' });
      }
      res.status(200).json({ message: 'Machine Tape updated successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  
  router.delete('/machine_tapes/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const [result] = await db.query('DELETE FROM machine_tapes WHERE id = ?', [id]);
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Machine Tape not found' });
      }
      res.status(200).json({ message: 'Machine Tape deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


  
router.post('/tape_consumption', async (req, res) => {
    const { machine_id, tape_id, consumption_date, quantity_consumed } = req.body;
    try {
      const [result] = await db.query('INSERT INTO tape_consumption (machine_id, tape_id, consumption_date, quantity_consumed) VALUES (?, ?, ?, ?)', [machine_id, tape_id, consumption_date, quantity_consumed]);
      res.status(201).json({ id: result.insertId });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  
  router.get('/tape_consumption', async (req, res) => {
    try {
      const [rows] = await db.query(`SELECT tc.id, u.name "name", m.name "machine", tc.quantity_consumed, tc.consumption_date, t.name "tape"  FROM tape_consumption tc LEFT JOIN tapes t on t.id = tc.tape_id
      LEFT JOIN machines m on m.id = tc.machine_id JOIN assignments a on a.machine_id = m.id
       LEFT JOIN users u on u.id = a.user_id ORDER BY tc.id DESC;`);
      res.status(200).json(rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  
  router.get('/tape_consumption/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const [rows] = await db.query('SELECT * FROM tape_consumption WHERE id = ?', [id]);
      if (rows.length === 0) {
        return res.status(404).json({ error: 'Tape Consumption record not found' });
      }
      res.status(200).json(rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  
  router.put('/tape_consumption/:id', async (req, res) => {
    const { id } = req.params;
    const { machine_id, tape_id, consumption_date, quantity_consumed } = req.body;
    try {
      const [result] = await db.query('UPDATE tape_consumption SET machine_id = ?, tape_id = ?, consumption_date = ?, quantity_consumed = ? WHERE id = ?', [machine_id, tape_id, consumption_date, quantity_consumed, id]);
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Tape Consumption record not found' });
      }
      res.status(200).json({ message: 'Tape Consumption record updated successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  
  router.delete('/tape_consumption/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const [result] = await db.query('DELETE FROM tape_consumption WHERE id = ?', [id]);
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Tape Consumption record not found' });
      }
      res.status(200).json({ message: 'Tape Consumption record deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  

module.exports = router;
