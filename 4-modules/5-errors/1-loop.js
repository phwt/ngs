const path = require('path');
const fs = require('fs');

const files = ['file.txt'];

files.forEach(file => {
  const filePath = path.resolve(process.env.USERPROFILE, file);
  const data = fs.readFileSync(filePath);
  console.log('File data is', data);
});
