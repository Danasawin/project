// routes/favorites.js
import express from 'express';
import {getTags, addFavorite, removeFavorite} from '../controllers/favoritesController.js';

const router = express.Router();

router.get('/tags', getTags);

router.post('/add', addFavorite);

router.post('/remove', removeFavorite);

export default router;
