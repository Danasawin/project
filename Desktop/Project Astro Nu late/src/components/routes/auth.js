// routes/auth.js
import express from 'express';
import { login ,logout,register, jwtRefreshTokenValidate,Validateuser,jwtValidate } from '../controllers/authControllers.js'

const router = express.Router();

router.post('/login', login)
router.post('/signup',register)
router.post('/logout', logout) 
router.get('/profile', jwtValidate, Validateuser)
router.get('/refresh', jwtRefreshTokenValidate,Validateuser)
export default router;
