const mongoose = require ('mongoose');
let person = require ('./person')
require('dotenv').config();


const connection=async()=>{
    mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology: true})

     .then(()=>{
        console.log('Database connection successful')
      })
    .catch(err=>{
        console.error('Database connection error',err)
      });
    }
    connection();


    // Create and Save a Record of a Model:    

const person = new person({
    name: 'Malek Dahmani',
    age: 29,
    favoriteFoods : ['Meat', 'Fish', 'Beef']
})

person.save()
  .then(doc=>{
    console.log(doc)
  })
  .catch(err=>{
    console.error(err)
  })


//Create Many Records with model.create()

const People = [
    {
        name: 'Mohamed',
        age: 29,
        favoriteFoods : ['3ejja', 'merguezz', 'Beef'] 
    },
    {
        name: 'Mongi',
        age: 29,
        favoriteFoods : ['Pizza', 'Fish', 'salad'] 
    },
    {
        name: 'Salah',
        age: 29,
        favoriteFoods : ['Meat', 'Apple', 'Onion'] 
    },
]

person.create(People)
  .then(doc=>{
    console.log(doc)
  })
  .catch(err=>{
    console.error(err)
  })

//Use model.find() to Search Your Database

person
.find({
 name: 'Malek Dahmani'
})
.then(doc=>{
  console.log(doc)
})
.catch(err=>{
    console.error(err)
})

//Use model.findOne() to Return a Single Matching Document from Your Database

person
.findOne({
    name: 'Salah'
})
.then(doc=>{
    console.log(doc.favoriteFoods)
})
.catch(err=>{
    console.error(err)
})

//Use model.findById() to Search Your Database By _id

person
.findById({
    _id: ("633b38732cc020094410670f")
})
.then(doc=>{
    console.log(doc)
})
.catch(err=>{
    console.error(err)
})

//Perform Classic Updates by Running Find, Edit, then Save

person
.updateOne(
    { _id: ("633b38732cc020094410670f") },
    {$push: {favoriteFoods : ['Hamburger']}},
    
)
.then(doc=>{
    console.log(doc)
  })
  .catch(err=>{
    console.error(err)
  })

  //Perform New Updates on a Document Using model.findOneAndUpdate()

  person.findByIdAndUpdate(
    {_id: ("633b38732cc020094410670f")},
    {$set:{age:20}}
  )
  .then(doc=>{
    console.log(doc)
  })
  .catch(err=>{
    console.error(err)
  })

//Delete One Document Using model.findByIdAndRemove  

person
.findByIdAndRemove(
    {_id: ("633b3a9f8a567be7271ea051")},
)
.then(doc=>{
    console.log(doc)
})
.catch(err=>{
    console.error(err)
})

//MongoDB and Mongoose - Delete Many Documents with model.remove()

person
.remove({
    name: 'Mary'
})
.then(doc=>{
    console.log(doc)
})
.catch(err=>{
    console.error(err)
 })


//Chain Search Query Helpers to Narrow Search Results

person.find(
    {favoriteFoods: "Beef"}
)
    .sort({name:'asc'})
    .limit(3)
    .select('-age')
    .exec()
.then(doc=>{
    console.log(doc)
}) 
.catch(err=>{
    console.error(err)
})   














