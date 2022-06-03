const { read } = require('../utils/FS')

const STUDENT = (req, res) => {
    const { data: { id, role } } = req

    if (role != 'student' && role != 'teacher') {
        return res.redirect('/admin')
    }

    if (role != 'student' && role != 'admin') {
        return res.redirect('/teacher')
    }

    const foundUser = read('users.json').find(e => e.id == id)

    const allGroups = read('groups.json')

    res.render('students', {
        user: foundUser,
        data: [
            { name: "Groups", icon: "bi bi-people" }
        ],
        groups: allGroups
    })
}

module.exports = {
    STUDENT
}