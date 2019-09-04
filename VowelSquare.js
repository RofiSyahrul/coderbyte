function VowelSquare(strArr){
    function getIndex(arr,el){
        var indices = [];
        var id = arr.indexOf(el);
        while (id != -1) {
            indices.push(id);
            id = arr.indexOf(el, id + 1);
        }
        return indices;
    }
    function getVowelIndex(str){
        var vowel = 'aiueo'.split('');
        var id_vowel = vowel.map(x=>getIndex(str.toLowerCase(),x));
        return id_vowel.join(',').split(',').filter(x=>x!=='').map(x=>Number(x)).sort((a,b)=>a-b);
    }
    function isVowel(chr){
        return 'aiueo'.includes(chr.toLowerCase());
    }
    function sum(){
        var sum_ = 0;
        for (var j=0; j<arguments.length; j++){
            sum_+=arguments[j];
        }
        return sum_;
    }
    function isConsecutive(indices){
        if (indices.length==1) return true; 
        indices = indices.sort((a,b)=>a-b);
        var difference = [...Array(indices.length-1).keys()].map(x=>indices[x+1]-indices[x]);
        var sum_diff = sum.apply(null,difference);
        if (sum_diff==difference.length) return true;
        return false;
    }
    
    const nrow = strArr.length; const n = 2;
    let found = false; let result = 'not found'; let row = 0;
    while (!found & row<=(nrow-n)){
        var idVowel = getVowelIndex(strArr[row]);
        let i = 0;
        while (!found & i<=(idVowel.length-n)){
            let idv2 = idVowel.slice(i,n+i);
            if (isConsecutive(idv2)){
                var nextRow = idv2.map(x=>isVowel(strArr[row+1][x]));
                if (sum.apply(null,nextRow)===nextRow.length) {
                    found = true;
                    result = [row,idv2[0]].join('-');
                }
            }
            i++;
        }
        row++;
    }
    return result;
}

var strArr = ["aqrst", "ukaei", "ffooo"];
console.log(VowelSquare(strArr));