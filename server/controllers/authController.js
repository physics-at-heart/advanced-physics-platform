const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// In-memory user store
let users = [];

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existing = users.find(u => u.email === email);
    if (existing) return res.status(400).json({ message: 'User already exists' });

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password: hashed,
      role
    };
    users.push(newUser);

    const token = jwt.sign({ id: newUser.id, name, email, role }, process.env.JWT_SECRET, { expiresIn: '30d' });
    res.status(201).json({ token, user: { id: newUser.id, name, email, role } });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user.id, name: user.name, email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '30d' });
    res.json({ token, user: { id: user.id, name: user.name, email, role: user.role } });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

const getMe = async (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (user) {
    res.json({ id: user.id, name: user.name, email: user.email, role: user.role });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

module.exports = { register, login, getMe };
