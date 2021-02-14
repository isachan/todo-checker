import * as fs from 'fs';
import { getFilesInDirectory } from './getFilesInDirectory.js';

const args = process.argv.slice(2);
const directory = args[0];

const checkFilesWithKeyword = (dir, keyword, ext) => {
  if (!fs.existsSync(dir)) {
    console.log(`Specified directory: ${dir} does not exist`);
    return;
  }

  const allFiles = getFilesInDirectory(dir, ext);
  const checkedFiles = [];

  allFiles.forEach(file => {
    const fileContent = fs
      .readFileSync(file)
      .toString()
      .split('\n');

    // We want full words, so we use full word boundary in regex.
    const regex = new RegExp(
      // exclude TODO in string value with matching quotes:
      '^(?!.*([\'"]).*\\b' +
        keyword +
        '\\b.*\\1)' +
        // exclude TODO.property access:
        '(?!.*\\b' +
        keyword +
        '\\.\\w)' +
        // exclude TODO = assignment
        '(?!.*\\b' +
        keyword +
        '\\s*=)' +
        // final TODO match
        '.*\\b' +
        keyword +
        '\\b'
    );

    fileContent.forEach(
      line =>
        regex.test(line) &&
        !checkedFiles.includes(file) && // if is duplicate, do not add into array
        checkedFiles.push(file)
    );
  });

  console.log(checkedFiles); //uncomment for checking in console
  return checkedFiles;
};

checkFilesWithKeyword(directory, 'TODO', '.js');
