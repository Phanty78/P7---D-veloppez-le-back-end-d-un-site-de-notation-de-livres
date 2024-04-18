const sharp = require('sharp')

module.exports = (req, res, next) => {
    let name = ""
    if (req.file) {
        const timestamp = Date.now()
        name = `images/${req.file.originalname.split(".")[0].match(/[a-zA-Z0-9]/g).join("")}-${timestamp}.webp`
        sharp(req.file.buffer)
            .resize(206,260)
            .webp({quality: 100})
            .toFile(name, (error) => {
                if (error) {
                  return res.status(500).json({ error: error.message })
                }
                req.file.buffer = null
                req.file.name = name
                next()
              })
    }else {
        next()
    }
    
}



