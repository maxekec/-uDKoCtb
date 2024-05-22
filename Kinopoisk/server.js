const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
const PORT = 5000;
const SECRET_KEY = 'your_secret_key';

app.use(bodyParser.json());
app.use(cors());

const users = []; // Это пример, в реальном приложении используйте базу данных

// Регистрация
app.post('/signup', async (req, res) => {
  const { fullName, nickname, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 8);

  const user = {
    id: users.length + 1,
    fullName,
    nickname,
    email,
    password: hashedPassword
  };

  users.push(user);

  const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '24h' });

  res.json({ token, user });
});

// Авторизация
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid password' });
  }

  const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '24h' });

  res.json({ token, user });
});

// Проверка токена
app.get('/protected', (req, res) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }

    res.status(200).json({ message: 'Protected route', userId: decoded.id });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
