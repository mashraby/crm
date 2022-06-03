const { read } = require('../utils/FS')

const TEACHER = (req, res) => {
    const { data: { id, role } } = req

    if (role != 'user' && role != 'teacher') {
        return res.redirect('/admin')
    }

    if (role != 'admin' && role != 'teacher') {
        return res.redirect('/student')
    }

    const foundUser = read('users.json').find(e => e.id == id)

    const allGroups = read('groups.json')

    allGroups.map(g => {
        g.students = read('users.json').filter(s => s.role == "student" && g.id == s.groupId)
        return g
    })
    const allStudents = read('users.json').filter(s => s.role == "student")
    const allHomeworks = read('homework.json')

    res.render('teachers', {
        user: foundUser,
        data: [
            { name: "Groups", icon: "bi bi-people" },
            { name: "Students", icon: "bi bi-mortarboard" }
        ],
        groups: allGroups,
        students: allStudents,
        homeworks: allHomeworks
    })
}

const TEACHER_STUDENT = (req, res) => {
    const { data: { id, role } } = req

    if (role != 'user' && role != 'teacher') {
        return res.redirect('/admin')
    }

    if (role != 'admin' && role != 'teacher') {
        return res.redirect('/student')
    }

    const foundUser = read('users.json').find(e => e.id == id)

    const allGroups = read('groups.json')

    allGroups.map(g => {
        g.students = read('users.json').filter(s => s.role == "student" && g.id == s.groupId)
        return g
    })
    const allStudents = read('users.json').filter(s => s.role == "student")
    const allHomeworks = read('homework.json')

    res.render('teachersStudents', {
        user: foundUser,
        data: [
            { name: "Groups", icon: "bi bi-people" },
            { name: "Students", icon: "bi bi-mortarboard" }
        ],
        groups: allGroups,
        students: allStudents,
        homeworks: allHomeworks
    })
}

module.exports = {
    TEACHER,
    TEACHER_STUDENT
}