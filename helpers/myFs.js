const fs = require( 'fs' );

 module.exports.readdirSync = (path)=>{
    return fs.readdirSync(path,
        (err, files) => {
            console.log("\nCurrent directory files:");
            if (err) console.log(err);
        });
}