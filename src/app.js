const express = require('express');
var multer  = require('multer')
// var upload = multer({ dest: './upload' })
const path = require('path')
const cors = require('cors')
const app = express()
const port = process.env.port || 2020

app.use(express.json())
app.use(cors())

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.fieldname + path.extname(file.originalname))
  }
})
 
var upload = multer({ 
  storage: storage, 
  // fileFilter(req, file, cb) {
  //   if(!file.originalname.match(/\.(jpg|jpeg|png|pdf)$/)){ // will be error if the extension name is not one of these
  //       return cb(new Error('Please upload image file (jpg, jpeg, or png)')) 
  //   }

  //   cb(undefined, true)
  // }
})

app.post('/upload', upload.single('pdf'), (req, res) => {
  res.send({status: 'nice'})
})

app.get('/', (req, res) => {
  res.send('<h1> Selamat Datang 2 </h1>')
})

app.listen(port, () => {
  console.log('Berhasil Running di_ ' + port);
})