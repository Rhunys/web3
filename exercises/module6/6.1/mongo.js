const mongoose = require('mongoose')

if (process.argv.length<5 && process.argv.length!=3) {
    console.log('Give password, name and number as arguments')
    process.exit(1)
}

const password = process.argv[2];
const contactName = process.argv[3];
const contactNumber = process.argv[4];

const url =
  `mongodb+srv://gauthier:${password}@cluster0.8qtj0.mongodb.net/phoneBookApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Contact = mongoose.model('Contact', contactSchema)

const contact = new Contact({
    name: contactName,
    number: contactNumber,
})



if(process.argv.length==3) {
    Contact.find({}).then(result => {
        console.log('phonebook:\n')
        result.forEach(contact => {
        console.log(contact)
        })
        mongoose.connection.close()
    })
} else {
    contact.save().then(response => {
        console.log('added ' + contactName + ' number ' + contactNumber + ' to phonebook')
        mongoose.connection.close()
      })
}