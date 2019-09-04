function EightQueens(strArr){
    function isAttacking(pos1,pos2){
        if (pos1[0]==pos2[0] | pos1[1]==pos2[1] | Math.abs(pos1[0]-pos2[0])==Math.abs(pos1[1]-pos2[1])) return true;
        return false;
    }
    const intArr = strArr.map(x=>x.match(/\d/g).map(s=>Number(s)));
    let noAttack = true; let i = 0;
    while (noAttack & i<intArr.length){
        let j = i+1;
        while (noAttack & j<intArr.length){
            if (isAttacking(intArr[i],intArr[j])) {
                noAttack = false;
                var pos = `(${intArr[i].join(',')})`;
            }
            j++;
        }
        i++;
    }
    if (noAttack) return noAttack.toString();
    return pos;
}
var strArr = ["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"];
console.log(EightQueens(strArr));