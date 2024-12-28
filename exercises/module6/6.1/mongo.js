const mongoose = require('mongoose')

if (process.argv.length<5 && process.argv.length!=3) {
    console.log('Give password, name and number as arguments')
    process.exit(1)
}

const password = process.argv[2];
const personName = process.argv[3];
const personNumber = process.argv[4];

const url =
  `mongodb+srv://gauthier:${password}@cluster0.8qtj0.mongodb.net/phoneBookApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: personName,
    number: personNumber,
})

if(process.argv.length==3) {
    Person.find({}).then(result => {
        console.log('phonebook:\n')
        result.forEach(person => {
        console.log(person)
        })
        mongoose.connection.close()
    })
} else {
    person.save().then(response => {
        console.log('added ' + personName + ' number ' + personNumber + ' to phonebook')
        mongoose.connection.close()
      })
}