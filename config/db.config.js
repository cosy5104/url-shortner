const mongoose = require('mongoose')

const DB_URI = 'mongodb://localhost:27017/urlshortener'

// establishing a database connection
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
