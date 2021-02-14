import * as fs from 'fs';
import * as path from 'path';

// Using recursion, we find every file with the desired extention, even if its deeply nested in subfolders.
// Returns a list of file paths
export const getFilesInDirectory = (dir, ext) => {
  if (!fs.existsSync(dir)) {
    console.log(`Specified directory: ${dir} does not exist`);
    return;
  }

  let files = [];
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.lstatSync(filePath); // Getting details of a symbolic link of file

    // If we hit a directory, recurse our fx to subdir. If we hit a file (basecase), add it to the array of files
    if (stat.isDirectory()) {
      const nestedFiles = getFilesInDirectory(filePath, ext);
      files = files.concat(nestedFiles);
    } else {
      if (path.extname(file) === ext) {
        files.push(filePath);
      }
    }
  });

  return files;
};
