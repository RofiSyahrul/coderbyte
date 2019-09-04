function ClosestEnemyII(strArr){
    function getPosition(arr,el){
        let pos = []; let k=0;
        for (var row=0; row<arr.length; row++){
            for (var col=0; col<arr[row].length; col++){
                if (arr[row][col]===el) {
                    pos[k] = [row,col];
                    k++;
                }
            }
        }
        return pos;
    }
    function step(pos1,pos2){
        var sum = function(){
            temp = 0;
            for (i=0; i<arguments.length; i++){
                temp+=arguments[i];
            }
            return temp;
        }
        var s = [0,1].map(x=>Math.abs(pos2[x]-pos1[x]));
        return sum.apply(null,s);
    }
    function stepWithWrapping(pos1,pos2,colDim,rowDim){
        pos1_c = [pos1[0],pos1[1]+colDim];
        pos1_r = [pos1[0]+rowDim,pos1[1]];
        pos1_cr = [pos1[0]+rowDim,pos1[1]+colDim];
        s = step(pos1,pos2);
        sc = step(pos1_c,pos2);
        sr = step(pos1_r,pos2);
        scr = step(pos1_cr,pos2);
        return Math.min(s,sc,sr,scr);
    }
    
    pos1 = getPosition(strArr,'1')[0];
    pos2 = getPosition(strArr,'2');
    if (pos2.length===0) return 0;
    return  Math.min.apply(null,pos2.map(x=>stepWithWrapping(pos1,x,strArr[0].length,strArr.length)));   
}

var strArr = ["01000", "00000", "00000", "00000", "00000"];
console.log(ClosestEnemyII(strArr));