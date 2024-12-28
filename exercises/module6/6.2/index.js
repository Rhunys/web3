const express = require('express')
const mongoose = require('mongoose')
const personsRoutes = require('./routes/persons')
const {MONGODB_URI, PORT} = require('./utils/config')

// Connect to database
mongoose.connect(MONGODB_URI)
console.log('Connected to MongoDB');

// Create and init server
const app = express()

app.use(express.json())
app.use('/persons', personsRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})