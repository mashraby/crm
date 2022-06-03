const jwt = require('jsonwebtoken')

const sign = (payload) => jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: 20000000
})

module.exports = {
    sign
}