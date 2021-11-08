const path = require('path');
const fs = require('fs');
const NAMEFILE = 'text.txt';
const READFILE = fs.createWriteStream(path.join(__dirname, NAMEFILE));
const { stdin, stdout } = require('process');
stdout.write('Чао!\r\nДля выхода напишите в консоли exit или нажмите Ctrl + c.\r\nДля размещения ваших мыслей в байтах прикоснитесь к буквам, дарованных Нам Кириллом и Мефодием...\r\n');
stdin.on('data', data => {
  if (data.toString().trim() === 'exit') {
    process.exit();
  };
  READFILE.write(data);
});
process.on('exit', () => {
  stdout.write(`\r\nБыло приятно провести это холодное осеннее время с такой прекрасной персоной.\r\nАревуар...`);
  process.exit();
});
process.on('SIGINT', process.exit);
