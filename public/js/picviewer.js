/*
Aufgabe 5 (3P): Technik
Nutze für die Umsetzung die vorhandene Klasse PicViewer und entwickle in OOP
Verwende nur VanillaJS und fetch() für XHR
*/

class PicViewer {
    constructor() {
        this.container = document.querySelector( '.images' );
        this.containerBig = document.querySelector( '.bigimage' );
        this.clickHandlerSection = this.clickHandlerSection.bind(this);
        this.clickHandlerImage = this.clickHandlerImage.bind(this)
        this.images = {}
        this.init();
    }

    async init() {
        let data = await this.loadDataFromServer();
        this.images = data;
        this.generateSections(data);
        // Auto click on first Section
        document.querySelectorAll('a')[0].click();
    }

    async loadDataFromServer() {
        /*
        Aufgabe 6 (4P): Daten Laden
        - Lade /sections vom Server mittels XHR
        - Füge die Bereiche in this.images ein
        Tipp: let data = await fetch( .... ).then( ... )
        - Lade für jeden Bereich mittels Post-Request die Inhalte und trage sie passend in this.images ein
        Tipp: Achtung Asynchron!
        Beispiel: this.images
            { "mountains": [ "mountains.jpg", "nature.jpg", "trees.jpg" ], "beaches": [...] }
        */
        let dirFiles = []
        let dirNames = await fetch(
            'http://localhost:3003/sections',
            {
                "method": 'get',
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            .then(res => res.json())
            .catch(function (err) {
                console.log("Something went wrong! by GET request!", err);
            })
        for ( const name of dirNames ) {
            dirFiles[name] = await fetch(
                'http://localhost:3003/files',
                {
                    method:'post',
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify( { dirName:name } )
                } )
                .then( res => res.json() )
                .catch( function ( err ) {
                    console.log( "Something went wrong! by POST request!", err );
                } );
        }
        return dirFiles
    }

    generateSections(data) {
        /*
        Aufgabe 7 (4P): Generiere Navigation
        - aus den Themenbereichen soll eine Nav-Liste in der linken Spalte generiert werden.
        - bei jedem Themenbereich soll die Anzahl der Bilder mit ausgegeben werden
        Tipp: siehe HTML in index_static.html
        Tipp:
            let li = document.createElement('li');
            let a = document.createElement('a');
            li.appendChild( a );
            a.addEventlistner( 'click', this.clickHandlerSection )
        */
        let first = 'active';
        for ( const dataKey in data ) {
            // first name letter uppercase
            const name = dataKey.substring(0, 1).toUpperCase() + dataKey.substring(1);
            let ul = document.getElementsByTagName('ul');
            let li = document.createElement('li');
            li.className = first;
            first = '';
            let a = document.createElement('a');
            a.href = '#'+dataKey;
            a.innerHTML = `${name}<span class="item-count">${data[dataKey].length}</span>`;
            li.appendChild(a);
            ul[0].appendChild(li)
            a.addEventListener( 'click', this.clickHandlerSection )
        }
    }

    async clickHandlerSection( e ) {
        /*
       Aufgabe 8 (4P): Klick auf Bereich
       - Themenbereich aktiviert (hervorheben mit #ccc, siehe Aufgabe 1)
       - mittlerer Bereich wird geleert
       - Erzeugung der Vorschaubilder wird gestartet
       - Container für Bild groß wird geleert
       Tipp:
           let daten = this.images[ ... ]
           this.createImageList( section, daten )
       */
        e.preventDefault();
        let files, section;
        this.container.innerHTML = '';
        this.containerBig.innerHTML = '';
        let li = document.querySelectorAll('li')
        for ( let i = 0; i < li.length; i++ ) {
            li[i].classList.remove('active')
        }
        // check if we click over '<a>' or 'span>
        ( e.target.tagName.toLowerCase() === 'a' )
            ? section = e.target.href.split('#')
            : section = e.target.parentElement.href.split('#');
        e.target.parentElement.classList.add('active');

        for ( const files1Key in this.images ) {
            ( section[1].toLowerCase() === files1Key.toLowerCase() ) && (files = this.images[ files1Key ]);
        }
        this.createImageList(section[1], files);
        // Auto click on first image
        let firstImage = document.querySelectorAll('.images img')[0];
        firstImage.click();
    }

    createImageList(section, daten) {
        /*
       Aufgabe 9 (2P): Erzeugung der Images
       - die Bildpfade aus Parameter "daten" werden verwendetet um Bilder zu erzeugen
       Tipp:
           let image = document.createElement( 'img' );
           image.src = ....;
           image.setAttribute( 'data-img', .... );
           image.setAttribute( 'data-section', .... );
           this.container.appendChild( image )
           image.addEventListener( 'click', this.clickHandlerImage );
       */
        for ( const img of daten ) {
            let image = document.createElement( 'img' );
            image.src = 'images/'+ section+'/thumbs/' + img;
            image.setAttribute( 'data-img', img );
            image.setAttribute( 'data-section', section );
            this.container.appendChild(image);
            image.addEventListener( 'click', this.clickHandlerImage );
        }
    }

    clickHandlerImage(e) {
        let element = e.target;
        document.querySelectorAll( 'img.active').forEach( el2 => { el2.classList.remove( 'active' ); });
        element.classList.add( 'active' );
        let img = element.getAttribute( 'data-img' );
        let section = element.getAttribute( 'data-section' );
        let big = document.createElement( 'img' );
        big.src = 'images/'+section+'/'+img;
        this.containerBig.innerHTML = '';
        this.containerBig.appendChild( big );
    }

}

new PicViewer();
