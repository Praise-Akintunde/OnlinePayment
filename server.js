const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Default route → show landing.html first
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'landing.html'));
});

// Optional: If you want to make sure direct access to each page works
app.get('/forgot', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'forgot.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/homeloader', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'homeloader.html'));
});

app.get('/landing', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'landing.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/reset', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'reset.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});

// Start the frontend server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Frontend server running at http://localhost:${PORT}`);
});
