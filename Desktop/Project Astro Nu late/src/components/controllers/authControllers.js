// controllers/authController.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connection from '../db.js';


export const Validateuser = (req, res) => {
  const user = users.find(
    (e) => e.id === req.user.id && e.name === req.user.name
  )

  const userIndex = users.findIndex((e) => e.refresh === req.user.token)

  if (!user || userIndex < 0) return res.sendStatus(401)

  const access_token = jwtGenerate(user)
  const refresh_token = jwtRefreshTokenGenerate(user)
  users[userIndex].refresh = refresh_token

  return res.json({
    access_token,
    refresh_token,
  })
}

export const jwtRefreshTokenValidate = (req, res, next) => {
  try {
    if (!req.headers["authorization"]) return res.sendStatus(401)
    const token = req.headers["authorization"].replace("Bearer ", "")

    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
      if (err) throw new Error(error)

      req.user = decoded
      req.user.token = token
      delete req.user.exp
      delete req.user.iat
    })
    next()
  } catch (error) {
    return res.sendStatus(403)
  }
}


export const jwtValidate = (req, res, next) => {
  try {
    if (!req.headers["authorization"]) return res.sendStatus(401)

    const token = req.headers["authorization"].replace("Bearer ", "")

    if (!token) {
      return res.status(401).json({ success: false, message: 'Token not provided' });
    }
    next()
  } catch (error) {
    return res.sendStatus(403)
  }
}

export const login = async (req, res) => {
  
  const jwtGenerate = (user) => {
    const accessToken = jwt.sign(
      { name: user.name, id: user.id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "3m", algorithm: "HS256" }
    )
  
    return accessToken
  }

  const jwtRefreshTokenGenerate = (user) => {
    const refreshToken = jwt.sign(
      { name: user.name, id: user.id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d", algorithm: "HS256" }
    )
  
    return refreshToken
  }

  try {
    const { username, password } = req.body;
    connection.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ success: false, message: 'Error executing query' });
      }
      if (results.length === 0) {
        return res.status(401).json({ success: false, message: 'User not found' });
      }
      const user = results[0];
      if (await bcrypt.compare(password, user.password)) {
        const access_token = jwtGenerate((user));
        const refresh_token = jwtRefreshTokenGenerate((user));
        user.refresh = refresh_token
        res.status(200).json({ success: true, access_token, refresh_token });
      } else {
        return res.status(401).json({ success: false, message: 'Invalid password' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const refreshToken = async (req, res) => {
  const refreshToken = req.body.refreshToken;
  if (!refreshToken) {
    return res.status(401).json({ success: false, message: 'Refresh token not provided' });
  }

  const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Invalid refresh token' });
    }
    const userId = decoded.userId;
    const accessToken = jwt.sign({ userId }, REFRESH_TOKEN_SECRET, { expiresIn: '15m' });
    res.status(200).json({ success: true, accessToken });
  });
};


export const logout = (req, res) => {
  res.clearCookie('token');
  res.json({ success: true, message: 'Logged out successfully' });
};


export const register= (req, res) => {
    const { username, password } = req.body;

    // Hash the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error('Error hashing password:', err);
        res.status(500).json({ success: false, message: 'Internal server error' });
        return;
      }

      // Insert the new user into the database
      connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, results) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ success: false, message: 'Error executing query' });
          return;
        }
        res.status(201).json({ success: true, message: 'User registered successfully' });
      });
    });
  }


