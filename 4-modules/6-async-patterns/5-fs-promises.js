// const { readFile } = require('fs').promises;
const fs = require('fs').promises;

async function main() {
  const data = await fs.readFile(__filename);
  console.log('File data is', data);
}

main();

console.log('TEST');
