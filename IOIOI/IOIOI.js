let fs = require('fs');
let input = fs.readFileSync('/Users/obzva/Desktop/BOJAlgorithmProblems/IOIOI/IOIOI.txt').toString().split('\n');

const N = Number(input[0]);
const M = Number(input[1]);
const S = input[2];

const P = 'IO'.repeat(N).concat('I');

const makingPi = P => {
    const pi = new Array(P.length);
    pi.fill(0);

    let j = 0;
    for (let i = 1; i < P.length; i++) {
        if (P[i] === P[j]) {
            while (j > 0 && P[i] !== P[j]) {
                j = pi[j - 1];
            }
            if (P[i] === P[j]) {
                pi[i] = ++j;
            }
        }
    }
    return pi;
}

const KMP = (S, P) => {
    let res = 0;
    const pi = makingPi(P);
    const stringLength = S.length;
    const patternLength = P.length;
    let j = 0;
    for (let i = 0; i < stringLength; i++) {
        while(j > 0 && S[i] !== P[j]) {
            j = pi[j - 1];
        }
        if (S[i] === P[j]) {
            if (j === patternLength - 1) {
                res++;
                j = pi[j];
            } else {
                j++;
            }
        }
    }
    return res;
}

console.log(KMP(S, P));