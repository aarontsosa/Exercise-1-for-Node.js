fs = require('fs');
readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


///// Getting a txt file and uppercasing them /////
// rl.question('filename: ', (filename) => {
//     console.log('. . .')
//     rl.close();
//     fs.readFile(filename, (err, buffer) =>{
//         if (err){
//             console.log('ugghh...' + err.message)
//             return;
//         }
//         console.log('Here it is...');
//         let content = buffer.toString();
//         let cap = content.toUpperCase();
//         console.log('Here you go: ');
//         console.log(cap);
//     });
// });