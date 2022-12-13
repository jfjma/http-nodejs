import mongoose from "mongoose"

mongoose.connect("mongodb+srv://m001-student:IQv7XONaV68hmECD@sandbox.lim6o.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('Database connected'))
    .catch(error => console.log(error))