let fs = require('fs');
let input = fs.readFileSync('/Users/obzva/Desktop/BOJAlgorithmProblems/usefulAlgorithms/촌수계산.txt').toString().split('\n');

//우리가 촌수계산할 사람을 a, b로 지정
let a = input[1].split(' ')[0];
let b = input[1].split(' ')[1];

//a, b가 같다면 0 출력
if (a === b) {
    console.log(0);
} else {//아니라면
//부모정보가 담긴 object 생성
let theirParents = {};
for (let i = 3; i < input.length; i++) {
    theirParents[input[i].split(' ')[1]] = input[i].split(' ')[0];
}

//자신과 조상의 정보를 담은 array 생성하는 함수
const ancestors = (person) =>{
    let res = [person];
    let who = person;
    while (Object.keys(theirParents).includes(who)) {
        res.push(theirParents[who]);
        who = theirParents[who];
    }
    return res;
}
let aAncestors = ancestors(a);
let bAncestors = ancestors(b);

//그 중 겹치는 조상이 있는지 알아보기
let cAncestors = aAncestors.filter(x => bAncestors.includes(x));

//공통조상이 있다면 촌수 계산, 없다면 -1 return
console.log(cAncestors.length > 0 ? aAncestors.indexOf(cAncestors[0]) + bAncestors.indexOf(cAncestors[0]) : -1);
}