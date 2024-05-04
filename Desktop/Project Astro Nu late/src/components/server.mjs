import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import favoritesRoutes from './routes/favorites.js';
import checkconnection from './routes/check-connection.js';

dotenv.config({ path: './.env' });

const app = express();
const port = process.env.PORT;


app.use(cors({
  origin: 'http://localhost:4321',
  credentials: true 
}));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/check-connection', checkconnection);
app.use('/favorites', favoritesRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error handling request:', err);
  res.status(500).send('Internal server error');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
