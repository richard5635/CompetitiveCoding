'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let arr = s.split("");
    let arr_v = [];
    let arr_c = [];
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] == "a" || arr[i] == "i" || arr[i] == "u" || arr[i] == "e" || arr[i] == "o") {
            arr_v.push(arr[i]);
        }
        else {
            arr_c.push(arr[i]);
        }
    }
    for (let i = 0; i < arr_v.length; i++)
    {
        console.log(arr_v[i]);
    }
    for (let i = 0; i < arr_c.length; i++)
    {
        console.log(arr_c[i]);
    }

}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}