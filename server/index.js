const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.post('/api/gpt', (req, res) => {
  res.send('Build command received.');
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
