const path = require('path')
const { read, write } = require('../utils/FS')

const UPLOAD_HOMEWORK = (req, res) => {
    const { id } = req.params
    const { file } = req.files

    const allUsers = read('users.json')
    const foundUser = allUsers.find(u => u.id == id)

    const allHomeworks = read('homework.json')

    allHomeworks.push({
        id: new Date().getTime(),
        name: foundUser.name,
        homework_url: "https://crmuz.herokuapp.com/" + file.name,
        studentId: Number(id),
        groupId: foundUser.groupId
    })

    write('homework.json', allHomeworks)

    file.mv(path.join(__dirname, '/../homeworks', file.name), (err) => {
        if (err) throw err
        console.log("Uploded")
    })

    if (id) {
        return res.redirect('/student')
    }
}

module.exports = {
    UPLOAD_HOMEWORK
}