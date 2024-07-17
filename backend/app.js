const express = require('express');
const app = express();
const foodRoutes = require('./routes/food');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api/food', foodRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
