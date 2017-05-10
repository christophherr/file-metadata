let express = require('express'),
    path = require('path'),
    multer = require('multer'),
    upload = multer(),
    port = process.env.port || 3000,
    app = express();

app.listen(port, () => console.log('listening on port ' + port));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.post('/file-info', upload.single('file'), (req, res) =>
    res.json({
        'file name': req.file.originalname,
        'file type': req.file.mimetype,
        'file size': req.file.size
    })
);
