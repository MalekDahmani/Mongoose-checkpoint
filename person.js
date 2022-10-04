const mongoose = require ('mongoose')

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods:{type:[String]}
})

module.exports = mongoose.model('person', personSchema)

