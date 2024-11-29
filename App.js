const express = require('express');
const path = require('path');
const { evaluateChecklist } = require('./Controllers/Checklistcontrollers');

const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/check', async (req, res) => {
  try {
    const results = await evaluateChecklist();
    res.json(results);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
