import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import { createRoles } from './libs/setup'

import studentsRoutes from './routes/students.routes'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'

const app = express()
createRoles();

app.set('pkg', pkg);

var cors = require('cors')
app.use(cors())

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/students', studentsRoutes)
app.use('/auth', authRoutes)
app.use('/users', userRoutes)

export default app;