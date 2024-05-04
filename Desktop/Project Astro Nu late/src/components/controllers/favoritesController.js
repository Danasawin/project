// controllers/favoritesController.js
import connection from '../db.js';

export const getTags = (req, res) => {
  connection.query('SELECT tag, COUNT(*) AS count FROM favorites GROUP BY tag ORDER BY count DESC', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ success: false, message: 'Error executing query' });
      return;
    }
    res.status(200).json(results);
  });
};

export const addFavorite = (req, res) => {
  const { favoriteItem, tag } = req.body;
  const sql = 'INSERT INTO favorites (favorite_item, tag) VALUES (?, ?)';
  connection.query(sql, [favoriteItem, tag], (err, result) => {
    if (err) {
      console.error('Error inserting favorite item:', err);
      res.status(500).json({ success: false, message: 'Error inserting favorite item' });
      return;
    }
    console.log('Favorite item added successfully');
    res.status(200).json({ success: true, message: 'Favorite item added successfully' });
  });
};

export const removeFavorite = (req, res) => {
  const { favoriteItemId } = req.body;
  const sql = 'DELETE FROM favorites WHERE id = ?';
  connection.query(sql, [favoriteItemId], (err, result) => {
    if (err) {
      console.error('Error deleting favorite item:', err);
      res.status(500).json({ success: false, message: 'Error deleting favorite item' });
      return;
    }
    console.log('Favorite item removed successfully');
    res.status(200).json({ success: true, message: 'Favorite item removed successfully' });
  });
};
