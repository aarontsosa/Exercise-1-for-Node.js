const fs = require('fs');
const readline = require('readline');
const dns = require('dns')
const https = require('https')
const gm = require('gm').subClass({imageMagick: true})
const request = require('request')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


///// Getting a txt file and uppercasing them /////
rl.question('filename: ', (filename) => {
    console.log('. . .')
    rl.close();
    fs.readFile(filename, (err, buffer) =>{
        File.cap(filename)
    })
});

///////////Getting the ip address of a website ///////
// rl.question('Domain Name: ', (filename) => {
//     console.log('. . .')
//     rl.close();
//     dns.lookup(filename, (err, address, family) =>{
//         if (err){
//             console.log('Sir, there was a problem.')
//             console.log(err.message)
//             return;
//         }
//         console.log('Ugh. Here ya go, boss: %j', address)
//     })
// })

//////////Read and Write ////////////////
// rl.question('Input file: ', (input) => {
//     rl.question('Output file: ', (output) =>{
//         rl.close();
//         fs.readFile(input, (err, buffer) =>{
//             if (err){
//                 console.log("I've looked through them all and... " + err.message)
//                 return;
//             }
//             let content = buffer.toString();
//             let cap = content.toUpperCase();
//             fs.writeFile(output, cap, (err) =>{
//                 if(err){
//                     console.log("Yeah... Im not doing that... because "  + err.message)
//                     return;
//                 }
//                 console.log("Done and did.")
//             });
//         });
//     });        
// });


///////// Save a web page ////////////
//not done


////// Reformat an image /////
// request('https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png').pipe(fs.createWriteStream('voodoo.png'))
// gm('voodoo.png')
//     .resize(240, 240)
//     .write('voodoo2.png', function (err) {
//         if (!err) console.log('done');
// });

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

class File {
    constructor(){

    }

    cap(filename, callback) {
        fs.readFile(filename, (err, buffer) =>{
            if (err){
                console.log('ugghh...' + err.message)
                return;
            }
            console.log('Here it is...');
            let content = buffer.toString();
            let cap = content.toUpperCase();
            console.log('Here you go: ');
            callback(cap);
        })
        };
        }

module.export = File