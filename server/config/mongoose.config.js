const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/petsdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Database connection established'))
  .catch(error => console.log("There was an error", error))