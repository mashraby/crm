const { sign } = require('../utils/jwt')

const LOGIN = (_, res) => {
    res.render('login.ejs')
}

const LOGIN_POST = (req, res) => {
    const { user } = req

    if (user.role == 'admin') {

        res.cookie('access_token', sign({ id: user.id, role: user.role }), {
            maxAge: 30 * 24 * 60 * 60 * 1000
        })
        res.redirect('/admin')
    }

    if (user.role == 'teacher') {

        res.cookie('access_token', sign({ id: user.id, role: user.role }), {
            maxAge: 30 * 24 * 60 * 60 * 1000
        })
        res.redirect('/teacher')
    }

    if (user.role == 'student') {

        res.cookie('access_token', sign({ id: user.id, role: user.role }), {
            maxAge: 30 * 24 * 60 * 60 * 1000
        })
        res.redirect('/student')
    }
}

module.exports = {
    LOGIN,
    LOGIN_POST
}