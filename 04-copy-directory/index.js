const path = require('path');
const fs = require('fs');
const NAMEFOL = 'files';
const FOL = path.join(__dirname, NAMEFOL);
const NAMEFOLNEW = 'files-copy';
const NEWFOL = path.join(__dirname, NAMEFOLNEW);
async function newFolderCopi() {
  try {
    await fs.promises.access(NEWFOL, fs.constants.W_OK);
    const ADVERBFILE = await fs.promises.readdir(NEWFOL);
    for (const v of ADVERBFILE) {
      const PLACEMENT = path.join(NEWFOL, v);
      await fs.promises.unlink(PLACEMENT);
    };
  } catch {await fs.promises.mkdir(NEWFOL, { recursive: true })};
  const FILES = await fs.promises.readdir(FOL);
  FILES.forEach(async (c) => {
    const OLDFILE = path.join(__dirname, NAMEFOL, c);
    const NEWFILE = path.join(__dirname, NAMEFOLNEW, c);
    await fs.promises.copyFile(OLDFILE, NEWFILE);
  });
};
newFolderCopi();
