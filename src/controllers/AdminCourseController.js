const { read, write } = require("../utils/FS")

const POST_COURSE = (req, res) => {
    const { name, price } = req.body

    const allCourses = read('courses.json')

    allCourses.push({
        id: allCourses[allCourses.length - 1]?.id + 1 || 1,
        name: name,
        price: price
    })

    write('courses.json', allCourses)

    if (name && price) {
        return res.redirect('/admin')
    }
}

const DELETE_COURSE = (req, res) => {
    const { id } = req.params

    const allCourses = read('courses.json').filter(e => e.id != id)

    write('courses.json', allCourses)

    if (id) {
        return res.redirect('/admin')
    }
}

const GET_UPDATE_COURSE = (req, res) => {
    const { id } = req.params

    const foundCourse = read('courses.json').find(e => e.id == id)

    res.send(foundCourse)
}

const UPDATE_COURSE = (req, res) => {
    const { name, price } = req.body
    const { id } = req.params

    const allCourses = read('courses.json')
    const foundCourse = allCourses.find(e => e.id == id)
    const foundCourseIndex = allCourses.findIndex(e => e.id == id)

    name ? foundCourse.name = name : foundCourse.name
    price ? foundCourse.price = price : foundCourse.price

    allCourses.splice(foundCourseIndex, 1, foundCourse)

    write('courses.json', allCourses)

    if (name || price) {
        return res.redirect('/admin')
    }
}

module.exports = {
    POST_COURSE,
    DELETE_COURSE,
    UPDATE_COURSE,
    GET_UPDATE_COURSE
}