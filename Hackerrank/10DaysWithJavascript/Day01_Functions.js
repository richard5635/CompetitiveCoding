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
 * Create the function factorial here
 */
let factorial = (n) => {
    let o = 1;
    if (n == 0 || n == 1) return o;
    for (let i = n; i >= 1; i--)
    {
        o *= i;
    }
    return o;
}
