const { write, read } = require('../utils/FS')

const STUDENT_POST = (req, res) => {
    const { name, password, groupId } = req.body

    const allUsers = read('users.json')

    allUsers.push({
        id: allUsers[allUsers.length - 1]?.id + 1 || 1,
        name: name,
        password: password,
        role: "student",
        groupId: Number(groupId)
    })

    write('users.json', allUsers)

    res.redirect('/admin')
}

const STUDENT_DELETE = (req, res) => {
    const { id } = req.params

    const allUsers = read('users.json').filter(e => e.id != id)

    write('users.json', allUsers)

    if (id) {
        return res.redirect('/admin')
    }
}

const GET_UPDATE_STUDENT = (req, res) => {
    const { id } = req.params

    const foundStudent = read('users.json').find(e => e.id == id)

    res.send(foundStudent)
}

const UPDATE_STUDENT = (req, res) => {
    const { name, password, groupId } = req.body
    const { id } = req.params

    const allUsers = read('users.json')
    const foundStudent = allUsers.find(e => e.id == id)
    const foundStudentIndex = allUsers.findIndex(e => e.id == id)

    name ? foundStudent.name = name : foundStudent.name
    password ? foundStudent.password = password : foundStudent.password
    groupId ? foundStudent.groupId = groupId : foundStudent.groupId

    allUsers.splice(foundStudentIndex, 1, foundStudent)

    write('users.json', allUsers)

    if (name || password || groupId) {
        return res.redirect('/admin')
    }
}

module.exports = {
    STUDENT_POST,
    STUDENT_DELETE,
    UPDATE_STUDENT,
    GET_UPDATE_STUDENT
}