import Student from '../models/Student'

export const createStudent = async (req, res) => {
    const {id, nombre, apellido, programa, ingreso, urlFotoPerfil} = req.body
    const newStudent = new Student({id, nombre, apellido, programa, ingreso, urlFotoPerfil})
    const savedStudent = await newStudent.save()
    res.status(201).json(savedStudent)
}

export const getStudents = async (req, res) => {
    const students = await Student.find()
    res.json(students)
}

export const getStudentById = async (req, res) => {
    const id = req.params.studentId
    const student = await Student.findOne({ id: id }).exec()
    res.status(200).json(student)
}

export const updateStudentById = async (req, res) => {
    const id = req.params.studentId
    const updatedStudent = await Student.findOneAndUpdate({ id: id }, req.body, { new: true })
    res.status(200).json(updatedStudent)
}

export const deleteStudentById = async (req, res) => {
    const id = req.params.studentId
    const deletedStudent = await Student.findOneAndDelete({ id: id })
    res.status(200).json(deletedStudent)
}