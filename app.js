const express = require('express');
const recipeRoutes = require('./routes/recipeRoutes');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static('public'));

app.use(express.json());
app.use('/recipes', recipeRoutes);

app.get('/', (req, res) => {
  res.sendFile(__dirname + './public/index.html');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

