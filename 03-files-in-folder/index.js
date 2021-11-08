const path = require('path');
const fs = require('fs');
const NAMEFILE = 'secret-folder';
const READFILE = path.join(__dirname, NAMEFILE);
fs.readdir(READFILE, (err, files) => {
  if (err) throw err;
  for (const file of files) {
    const PLACEMENT = path.join(READFILE, file);
    fs.stat(PLACEMENT, (error, stat) => {
      if (error) throw error;
      if (stat.isFile()) {
        const { name, ext } = path.parse(PLACEMENT);
        console.log(`${name} - ${ext.slice(1)} - ${stat.size} bytes`);
      };
    });
  };
});
