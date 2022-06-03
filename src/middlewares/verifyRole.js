const { read } = require('../utils/FS')

module.exports = (req, res, next) => {
    const { name, password } = req.body

    const foundUser = read('users.json').find(e => e.name == name && e.password == password)

    if(!foundUser) {
        return res.sendStatus(401)
    }

    req.user = foundUser

    next()
}