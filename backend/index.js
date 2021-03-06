const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors')
// const users = require('./routes/users.js');
// const movies = require('./routes/movies.js');
// const auth = require('./routes/auth.js');
// const bookings = require('./routes/bookings.js');
// const shows = require('./routes/shows.js');

const authMiddleware = require('./middleware/auth')

const express = require('express');
const app = express();

if(!config.get('jwtPrivateKey')){
    console.log('FATAL ERROR: jwtPrivateKey is not defined');
    process.exit(1);
}

app.use(express.json());
app.use(cors());
// app.use('/api/users', users);
// app.use('/api/movies', movies);
// app.use('/api/auth', auth);
// app.use('/api/bookings', authMiddleware, bookings);
// app.use('/api/shows', shows);

// const db = config.get('db'); <- dla wersji już na serwer
const db = "mongodb://localhost/" + config.get('db');
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('connected'))
    .catch(err => console.error('could not connect', err));

const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`listening on port ${port}...`));
