const mongoose = require('mongoose')
const express = require('express')
const app = express()
require('dotenv').config();

const Note = require('./models/note')

const password = process.argv[2]
const url = process.env.MONGODB_URI;

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const note = new Note({
    content: 'HTML is easy',
    important: true,
})

app.get('/api/notes', (request, response) => {
    Note.find({}).then(notes => {
      response.json(notes)
    })
  })

app.post('/api/notes', (request, response) => {
  const body = request.body
  console.log("body : " + body)

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
  })

  note.save().then(savedNote => {
    response.json(savedNote)
  })
})

app.get('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id)
    .then(note => {
      if (note) {
        response.json(note)
      } else {
        response.status(404).end() 
      }
    })
    .catch(error => {
      console.log(error)

      response.status(400).send({ error: 'malformatted id' })
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})