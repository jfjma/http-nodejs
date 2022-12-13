import {Schema, model} from 'mongoose'

const studentSchema = new Schema({
    id: String,
    nombre: String,
    apellido: String,
    programa: String,
    ingreso: Date,
    urlFotoPerfil: String
}, {
    timestamps: true,
    versionKey: false
})

export default model('Student', studentSchema);