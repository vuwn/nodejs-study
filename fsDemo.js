import { error } from 'console';
import fs from 'fs/promises';

// readFile() - callback
// fs.readFile('./text.txt', 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// readFile() - Synchrounous version
// const data = fs.readFileSync('./text.txt', 'utf8');
// console.log(data);

// readFile() - Promise then()
    // fs.readFile('./text.txt', 'utf8')
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));

// readFile() = asynchrounous
    const readFile = async () => {
        try {
            const data = await fs.readFile('./text.txt', 'utf8');
            console.log(data);
        } catch(error) {
            console.log(error);
        }
    }

// writeFile()
const writeFile = async () => {

    try {
        await fs.writeFile('./text.txt', 'Hello, I am writing to this file');
        console.log('File written to ...');
    } catch (error) {
        console.log(error);
    }

};

const appendFile = async () => {

    try {
        await fs.appendFile('./text.txt', 'Well, I am appending new text in this file');
        console.log('File appended to');
    } catch (error) {
        console.log(error);
    }

};


writeFile();
appendFile();
readFile();