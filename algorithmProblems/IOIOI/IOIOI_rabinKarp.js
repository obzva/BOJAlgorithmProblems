let fs = require('fs');
let input = fs.readFileSync('/Users/obzva/Desktop/BOJAlgorithmProblems/algorithmProblems/IOIOI/IOIOI.txt').toString().split('\n');

const N = Number(input[0]);
const M = Number(input[1]);
const S = input[2];
const P = 'IO'.repeat(N).concat('I');

const makeHash = string => {
    let res = 0;
    const len = string.length;
    for (let i = 0; i < len; i++) {
        res += string.charCodeAt(i) * 2**(len - i - 1);
    }
    return res;
}

const rabinKarp = (S, P) => {
    let res = 0;
    const sLength = S.length;
    const pLength = P.length;
    let sHash = makeHash(S.slice(0, pLength));
    const pHash = makeHash(P);
    for (let i = 0; i <= sLength - pLength; i++) {
        if (sHash === pHash) {
            if (P === S.slice(i, i + pLength)) res ++;
        }
        sHash = (sHash - S.charCodeAt(i) * 2**(pLength - 1)) * 2 + S.charCodeAt(i + pLength);
    }
    return res;
}

console.log(rabinKarp(S, P));