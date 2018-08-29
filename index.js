const express = require('express');
require('./services/passport');

const app = express();

// const authRoutes = require('./routes/authRoutes');
// authRoutes(app);
require('./routes/authRoutes')(app);// Is BETTER and great!

const PORT = process.env.PORT || 5000;
app.listen(PORT);
