const express = require( 'express' );
const myFs = require('./helpers/myFs');
const cors = require( 'cors' );

const app = express();
app.use(express.static('public'));
app.use( express.urlencoded({extended:true}));
app.use( express.json() );
app.use(cors())

/*
Aufgabe 2 (2P): Server + Middleware
- Ihre Applikation ist im Browser mit "localhost:3003" erreichbar.
- Middleware Cors wurde aktiviert
- beim Aufrufen von http://localhost:3003 erscheint die index.html
*/
app.listen(3003, ()=>{
    console.log( 'server listening on port 3003 ');
})

app.get('/', (req, res)=>{
    res.status(200).redirect('index.html');
})


/*
Aufgabe 3 (3P): GET-Route /sections
- Request wird entgegen genommen
- Laden der Ordnernamen aus public/images mit
- Response der Ordnernamen als Array/JSON
Tipp: Modul "fs" (! keine anderen Module notwendig) fs.readdir(), fs.readdirSync() oder fs.promise.readdir()
Tipp: Optional kann bei readdir die Option { withFileTypes: true } gesetzt werden
*/
app.get('/sections',(req, res)=>{
    let path = __dirname+'/public/images';
    let resultDir =  myFs.readdirSync(path);
    res.status(200).json(resultDir);
})


/*
Aufgabe 4 (5P): POST-Route /files
- Request wird entgegen genommen
- POST Body Daten parsen (Ordnername wird übermittelt)
- Laden der Dateinamen aus public/images und dem angefragten Ordner
- Response der Dateinamen als JSON
- Einschränkungen: keine Unterordner "thumbs"
- Einschränkungen: keine Dateien übertragen, die keine Vorschaubilder haben
*/
app.post('/files', (req, res) => {
    const {dirName} = req.body;
    const pathFiles = __dirname + '/public/images/'+ dirName;
    const pathFilesThumbs = __dirname + '/public/images/'+ dirName +'/thumbs';
    const resultFiles = myFs.readdirSync(pathFiles);
    const resultFilesThumbs = myFs.readdirSync(pathFilesThumbs);
    const result = resultFiles.filter(element => resultFilesThumbs.includes(element));
    res.status(200).json(result);
})
