import app from './app'
import './database'

app.listen(process.env.PORT)
console.log('Server listen on port', process.env.PORT)