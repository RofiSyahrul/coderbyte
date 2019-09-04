function QuestionsMarks(str){
    function getIndex(arr,el){
        var indices = [];
        var id = arr.indexOf(el);
        while (id != -1) {
            indices.push(id);
            id = arr.indexOf(el, id + 1);
        }
        return indices;
    }
    function getDigitIndex(str){
        var digits = '0123456789'.split('');
        var id_digit = digits.map(x=>getIndex(str.toLowerCase(),x));
        return id_digit.join(',').split(',').filter(x=>x!=='').map(x=>Number(x)).sort((a,b)=>a-b);
    }

    var digitIndex = getDigitIndex(str);
    let result = false;
    not10 = 0;
    for (var i=0; i<(digitIndex.length-1); i++){
        if (Number(str[digitIndex[i]])+Number(str[digitIndex[i+1]])!==10) {
            result = true;
            not10++;
        }
        else if (str.slice(digitIndex[i],digitIndex[i+1]).match(/[?]/g).length===3) result = true;
        else{
            result = false;
            break;
        }
    }
    if (not10===(digitIndex.length-1)) result = false;

    return result.toString();
}

var str = "aa6?9";

console.log(QuestionsMarks(str));