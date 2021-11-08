const path = require('path');
const fs = require('fs');
const NAMEFILE = 'styles';
const PROMISES = fs.promises;
const NAMEFOLDER = 'project-dist/bundle.css';
const READFOLDER = path.join(__dirname, NAMEFOLDER);
const READFILE = path.join(__dirname, NAMEFILE);
const CREATE = fs.createWriteStream(READFOLDER);
PROMISES.readdir(READFILE).then(async (v) => {
  v.forEach(async (c) => {
    const WAY = path.join(READFILE, c);
    const EXPANSION = path.extname(WAY);
    const NAME = path.basename(WAY);
    // const { name, ext } = path.parse(WAY);
    if (EXPANSION === '.css') {
      fs.createReadStream(path.join(READFILE, NAME)).on('data', data => {
        CREATE.write(data.toString() + '\r\n');
      });
    };
  });
});
