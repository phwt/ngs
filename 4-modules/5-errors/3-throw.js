const path = require('path');
const fs = require('fs');

const files = ['file.txt', 'nonexistence-file.txt'];

files.forEach(file => {
  try {
    const filePath = path.resolve(process.env.USERPROFILE, file);
    const data = fs.readFileSync(filePath);
    console.log('File data is', data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File not found');
    } else {
      throw err;
    }
  }
});
