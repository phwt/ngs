const path = require('path');
const fs = require('fs');

const files = ['file.txt', 'nonexistence-file.txt'];

files.forEach(file => {
  try {
    const filePath = path.resolve(process.env.USERPROFILE, file);
    const data = fs.readFileSync(filePath);
    // const data = fs.readFileSync(filePath, 'utf-42'); // File not found will printed even though it's encoding error
    console.log('File data is', data);
  } catch (err) {
    console.log('File not found');
  }
});
