const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/data/uploads')
    },
    filename: function(req, file, cb) {

        console.log(file, "ethy rakh---------------------------------------------------");
        const ext = file.mimetype.split('/')[1]
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + ext)
    }
})
const upload = multer({ storage: storage })

module.exports = upload