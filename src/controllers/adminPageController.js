const { read } = require('../utils/FS')

const ADMIN = (req, res) => {
    const { data: { id, role } } = req

    if (role != 'admin' && role != 'student') {
        return res.redirect('/teacher')
    }

    if (role != 'admin' && role != 'teacher') {
        return res.redirect('/student')
    }

    const foundUser = read('users.json').find(e => e.id == id)

    const allCourses = read('courses.json')

    allCourses.map(c => {
        c.teachers = read('users.json')
            .filter(u => u.role == 'teacher' && u.courseId == c.id && delete u.courseId)
        return c
    })
    const allTeachers = read('users.json').filter(t => t.role == 'teacher' && delete t.courseId)
    allTeachers.map(t => {
        t.groups = read('groups.json').filter(g => g.teacherId == t.id)
    })
    const allGroups = read('groups.json')
    allGroups.map(g => {
        g.students = read('users.json').filter(s => s.role == "student" && s.groupId == g.id && delete s.groupId)
        return g
    })
    const allStudents = read('users.json').filter(s => s.role == "student")

    res.render('admin', {
        user: foundUser,
        data: [
            { name: "Courses", icon: "bi bi-file-earmark-code" },
            { name: "Teachers", icon: "bi bi-person-video3" },
            { name: "Groups", icon: "bi bi-people" },
            { name: "Students", icon: "bi bi-mortarboard" }
        ],
        courses: allCourses,
        teachers: allTeachers,
        groups: allGroups,
        students: allStudents
    })
}

const ADMIN_TEACHER = (req, res) => {
    const { data: { id, role } } = req

    if (role != 'admin' && role != 'student') {
        return res.redirect('/teacher')
    }

    if (role != 'admin' && role != 'teacher') {
        return res.redirect('/student')
    }

    const foundUser = read('users.json').find(e => e.id == id)

    const allCourses = read('courses.json')

    allCourses.map(c => {
        c.teachers = read('users.json')
            .filter(u => u.role == 'teacher' && u.courseId == c.id && delete u.courseId)
        return c
    })
    const allTeachers = read('users.json').filter(t => t.role == 'teacher' && delete t.courseId)
    allTeachers.map(t => {
        t.groups = read('groups.json').filter(g => g.teacherId == t.id)
    })
    const allGroups = read('groups.json')
    allGroups.map(g => {
        g.students = read('users.json').filter(s => s.role == "student" && s.groupId == g.id && delete s.groupId)
        return g
    })
    const allStudents = read('users.json').filter(s => s.role == "student")

    res.render('adminTeacher', {
        user: foundUser,
        data: [
            { name: "Courses", icon: "bi bi-file-earmark-code" },
            { name: "Teachers", icon: "bi bi-person-video3" },
            { name: "Groups", icon: "bi bi-people" },
            { name: "Students", icon: "bi bi-mortarboard" }
        ],
        courses: allCourses,
        teachers: allTeachers,
        groups: allGroups,
        students: allStudents
    })
}

const ADMIN_GROUP = (req, res) => {
    const { data: { id, role } } = req

    if (role != 'admin' && role != 'student') {
        return res.redirect('/teacher')
    }

    if (role != 'admin' && role != 'teacher') {
        return res.redirect('/student')
    }

    const foundUser = read('users.json').find(e => e.id == id)

    const allCourses = read('courses.json')

    allCourses.map(c => {
        c.teachers = read('users.json')
            .filter(u => u.role == 'teacher' && u.courseId == c.id && delete u.courseId)
        return c
    })
    const allTeachers = read('users.json').filter(t => t.role == 'teacher' && delete t.courseId)
    allTeachers.map(t => {
        t.groups = read('groups.json').filter(g => g.teacherId == t.id)
    })
    const allGroups = read('groups.json')
    allGroups.map(g => {
        g.students = read('users.json').filter(s => s.role == "student" && s.groupId == g.id && delete s.groupId)
        return g
    })
    const allStudents = read('users.json').filter(s => s.role == "student")

    res.render('adminGroup', {
        user: foundUser,
        data: [
            { name: "Courses", icon: "bi bi-file-earmark-code" },
            { name: "Teachers", icon: "bi bi-person-video3" },
            { name: "Groups", icon: "bi bi-people" },
            { name: "Students", icon: "bi bi-mortarboard" }
        ],
        courses: allCourses,
        teachers: allTeachers,
        groups: allGroups,
        students: allStudents
    })
}


const ADMIN_STUDENT = (req, res) => {
    const { data: { id, role } } = req

    if (role != 'admin' && role != 'student') {
        return res.redirect('/teacher')
    }

    if (role != 'admin' && role != 'teacher') {
        return res.redirect('/student')
    }

    const foundUser = read('users.json').find(e => e.id == id)

    const allCourses = read('courses.json')

    allCourses.map(c => {
        c.teachers = read('users.json')
            .filter(u => u.role == 'teacher' && u.courseId == c.id && delete u.courseId)
        return c
    })
    const allTeachers = read('users.json').filter(t => t.role == 'teacher' && delete t.courseId)
    allTeachers.map(t => {
        t.groups = read('groups.json').filter(g => g.teacherId == t.id)
    })
    const allGroups = read('groups.json')
    allGroups.map(g => {
        g.students = read('users.json').filter(s => s.role == "student" && s.groupId == g.id && delete s.groupId)
        return g
    })
    const allStudents = read('users.json').filter(s => s.role == "student")

    res.render('adminStudent', {
        user: foundUser,
        data: [
            { name: "Courses", icon: "bi bi-file-earmark-code" },
            { name: "Teachers", icon: "bi bi-person-video3" },
            { name: "Groups", icon: "bi bi-people" },
            { name: "Students", icon: "bi bi-mortarboard" }
        ],
        courses: allCourses,
        teachers: allTeachers,
        groups: allGroups,
        students: allStudents
    })
}

module.exports = {
    ADMIN,
    ADMIN_TEACHER,
    ADMIN_GROUP,
    ADMIN_STUDENT
}