const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
    var token = req.headers['x-access-token']
    if (!token) return res.json({
        message: 'Token Tidak ditemukan'
    })

    jwt.verify(token, process.env.SECRET, (err, decode) => {
        if (err) return res.json({
            message: 'Gagal mengautentikasi token'
        })

        req.userId = decode.id
        next()
    })
}

module.exports = verifyToken