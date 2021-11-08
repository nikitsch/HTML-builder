const path = require('path');
const fs = require('fs');
const NAMEFILE = 'text.txt';
const READFILE = fs.createReadStream(path.resolve(__dirname, NAMEFILE));
READFILE.on('data', (data) => {console.log(data.toString())});
