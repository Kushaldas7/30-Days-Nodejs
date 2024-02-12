const fs = require('fs');
function readFileContent(filePath) {
  fs.readFile(filePath, 'UTF-8', (err, data) => {
    if (data) {
      console.log(data);
    }
    if (data == '') {
      console.log('Empty string');
    }
    if (err) {
      console.log('Error reading file: ENOENT: no such file or directory...');
    }
  });
}
readFileContent('test-files/file1.txt');
readFileContent('test-files/empty-file.txt');
readFileContent('test-files/nonexistent-file.txt');
