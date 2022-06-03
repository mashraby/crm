const { write, read } = require('../utils/FS')

const GROUP_POST = (req, res) => {
    const { name, teacherId } = req.body

    const allGroups = read('groups.json')

    allGroups.push({
        id: allGroups[allGroups.length - 1]?.id + 1 || 1,
        name: name,
        homework: "",
        teacherId: Number(teacherId)
    })

    write('groups.json', allGroups)

    res.redirect('/admin')
}

const GROUP_DELETE = (req, res) => {
    const { id } = req.params

    const allGroups = read('groups.json').filter(e => e.id != id)

    write('groups.json', allGroups)

    if (id) {
        return res.redirect('/admin')
    }
}

const GET_UPDATE_GROUP = (req, res) => {
    const { id } = req.params

    const foundGroup = read('groups.json').find(e => e.id == id)

    res.send(foundGroup)
}

const UPDATE_GROUP = (req, res) => {
    const { name, teacherId } = req.body
    const { id } = req.params

    const allGroups = read('groups.json')
    const foundGroup = allGroups.find(e => e.id == id)
    const foundGroupIndex = allGroups.findIndex(e => e.id == id)

    name ? foundGroup.name = name : foundGroup.name
    teacherId ? foundGroup.teacherId = teacherId : foundGroup.teacherId

    allGroups.splice(foundGroupIndex, 1, foundGroup)

    write('groups.json', allGroups)

    console.log(foundGroup);

    if (name || teacherId) {
        return res.redirect('/admin')
    }
}

module.exports = {
    GROUP_POST,
    GROUP_DELETE,
    GET_UPDATE_GROUP,
    UPDATE_GROUP
}