const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors'); // Importa el paquete cors

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
