const { write, read } = require('../utils/FS')

const TEACHER_POST = (req, res) => {
    const { name, password, salary, courseId } = req.body

    const allUsers = read('users.json')

    allUsers.push({
        id: allUsers[allUsers.length - 1]?.id + 1 || 1,
        name: name,
        password: password,
        salary: salary,
        role: "teacher",
        courseId: Number(courseId)
    })

    write('users.json', allUsers)

    console.log(allUsers);

    res.redirect('/admin')
}

const TEACHER_DELETE = (req, res) => {
    const { id } = req.params

    const allUsers = read('users.json').filter(e => e.id != id)

    write('users.json', allUsers)

    if (id) {
        return res.redirect('/admin')
    }
}

const GET_UPDATE_TEACHER = (req, res) => {
    const { id } = req.params

    const foundTeacher = read('users.json').find(e => e.id == id)

    res.send(foundTeacher)
}

const UPDATE_TEACHER = (req, res) => {
    const { name, salary, password, courseId } = req.body
    const { id } = req.params

    const allUsers = read('users.json')
    const foundUser = allUsers.find(e => e.id == id)
    const foundUserIndex = allUsers.findIndex(e => e.id == id)

    name ? foundUser.name = name : foundUser.name
    salary ? foundUser.salary = salary : foundUser.salary
    password ? foundUser.password = password : foundUser.password
    courseId ? foundUser.courseId = courseId : foundUser.courseId

    allUsers.splice(foundUserIndex, 1, foundUser)

    write('users.json', allUsers)

    console.log(foundUser);

    if (name && salary && password && courseId) {
        return res.redirect('/admin')
    }
}

module.exports = {
    TEACHER_POST,
    TEACHER_DELETE,
    GET_UPDATE_TEACHER,
    UPDATE_TEACHER
}