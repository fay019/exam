# Prüfungsaufgabe
Ihr Kunde wünscht sich eine Single-Page-Applikation zur Anzeige von Bildern. Diese sind am Server bereits in themenspezifische Ordner unterteilt. Zu jedem Bild gibt es im Unterordner "thumbs" ein monochromes Vorschaubild.

Ihre Applikation soll mittels NodeJS, Express umgesetzt werden.
Die Gestaltung des UserInterface wurde vorbereitet und ist noch zu vervollständigen (siehe Aufgabe 1).

Die Oberfläche ist neben Header und Footer in drei Spalten unterteilt. 
In der linken Spalte sollen die Themenbereiche (Ordner) klickbar ausgegeben werden. Ein Counter zeigt die Anzahl der zur Verfügung stehenden Bilder in dem Bereich an.

Nach der Auswahl des Bereiches erscheint in der mittleren Spalte eine Liste mit klickbaren Vorschaubildern. Das große Bild erscheint in der rechten Spalte nach einem Klick auf ein Vorschaubild.

Viel Erfolg.

# Einrichten der Umgebung
- npm install (Installieren aller notwendigen Module lt. package.json)
- npm start (Ausführen/Starten des Server)
Anm.: Es wird nodemon verwendet, d.h. bei jeder Änderung am Script wird der Server automatisch neu gestartet.

# Aufgaben
Ihre Arbeit teilt sich in Serverseite (=server.js) und Clientseite (=public/css/picviewer.css & public/js/picviewer.js)

--- ENDE ----------------------------------------------------------------------------

# Punkte Details (Bewertung Prüfer)
## HTML/CSS 
(Test-File: index_static.html)
1A (1): Bilder-Counter je Bereich - rechtsbündig
1B (1): angeklickter/aktiver Bereich soll Hintergrundfarbe #ccc behalten
1C (1): Vorschaubilder sollen scrollbar sein
1D (1): Mauszeiger bei Vorschaubildern soll anzeigen, dass diese klickbar sind (wie bei Hyperlinks)
1E (1): angeklickte/aktive Vorschaubilder hervorgehoben

## NodeJS Server
2A (1): Express-Server-Applikation einrichten am Port 3003
2B (0.5): Cross-Origin-Headers setzen (Modul cors() )
2C (0.5): UI (HTML-Datei) ausgeben http://localhost:3003

## Routing und Liefern der Daten
3A (1): GET Request '/sections' verarbeiten
3B (1): Laden der Ordnernamen aus public/images 
3C (1): Response der Ordnernamen als Array

## Routing und Auslesen von Subfoldern
4A (1): POST Request '/files' verarbeiten
4B (1): POST Body Daten parsen (Ordnername)
4C (1): Einlesen der Bilder aus dem angefragten Ordner
4D (1): Einschränkung auf Dateien (keine Unterordner mit übertragen)
4E (1): Nur Bilder ausgeben, wenn zum Bild auch ein Vorschaubild existiert

# Technische Umsetzung Client JS
5A (1): Umsetzung des clientseitigen Scripts in OOP
5B (1): Umsetzung des clientseitigen Scripts in VanillaJS
5C (1): Umsetzung der XHR mit fetch

# XHR GET /sections und XHR POST /files 
6A (2): beim Öffnen der Seite soll mittels XHR GET '/sections' die Themenbereiche vom Server geladen werden
6B (2): zu jedem Themenbereich müssen mittels XHR POST 'files' die Bilddateinamen angefragt werden

# Generieren der Nav-Links 
7A (2): aus den Themenbereichen soll eine Nav-Liste in der linken Spalte generiert werden.
7B (2): bei jedem Themenbereich soll die Anzahl der Bilder mit ausgegeben werden

# Nav-Links ClickHandler
8A (2): Klick auf Themenbereich aktiviert diesen
8B (2): Klick auf Themenbereich ruft Generierung von Vorschaubildern auf (Daten übergeben)
8C (1): Das zuvor geöffnete Bild (groß) soll nicht mehr angezeigt werden

# Vorschaubilder generieren
9A (2): <img> erzeugen und clickHandler zuweisen

# Vorschaubilder klickbar
- bereits umgesetzt...
