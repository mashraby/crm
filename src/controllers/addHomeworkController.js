const { read, write } = require('../utils/FS')

const ADD_HOMEWORK = (req, res) => {
    const { id, homework } = req.body

    const allGroups = read('groups.json')

    const foundGroup = allGroups.find(g => g.id == id)
    const foundGroupIndex = allGroups.findIndex(g => g.id == id)

    homework ? foundGroup.homework = homework : foundGroup.homework

    allGroups.splice(foundGroupIndex, 1, foundGroup)

    write('groups.json', allGroups)

    console.log(foundGroup)

    if (id && homework) {
        return res.redirect('/teacher')
    }

}

module.exports = {
    ADD_HOMEWORK
}