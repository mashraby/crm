const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const { access_token } = req.cookies

    if (!access_token) {
        return res.redirect('/')
    }

    jwt.verify(access_token, process.env.SECRET_KEY, (err, decode) => {
        if (err instanceof jwt.TokenExpiredError) {
            return res.redirect('/')
        }

        if (err instanceof jwt.JsonWebTokenError) {
            return res.redirect('/')
        }

        req.data = decode

        next()
    })

}