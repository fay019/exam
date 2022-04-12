const express = require( 'express' );
const fs = require( 'fs' );
const cors = require( 'cors' );

/*
Aufgabe 2 (2P): Server + Middleware
- Ihre Applikation ist im Browser mit "localhost:3003" erreichbar.
- Middleware Cors wurde aktiviert
- beim Aufrufen von http://localhost:3003 erscheint die index.html
*/





/*
Aufgabe 3 (3P): GET-Route /sections
- Request wird entgegen genommen
- Laden der Ordnernamen aus public/images mit 
- Response der Ordnernamen als Array/JSON
Tipp: Modul "fs" (! keine anderen Module notwendig) fs.readdir(), fs.readdirSync() oder fs.promise.readdir()
Tipp: Optional kann bei readdir die Option { withFileTypes: true } gesetzt werden 
*/





/*
Aufgabe 4 (5P): POST-Route /files
- Request wird entgegen genommen
- POST Body Daten parsen (Ordnername wird übermittelt)
- Laden der Dateinamen aus public/images und dem angefragten Ordner 
- Response der Dateinamen als JSON
- Einschränkungen: keine Unterordner "thumbs" 
- Einschränkungen: keine Dateien übertragen, die keine Vorschaubilder haben
*/
