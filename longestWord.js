function longestWord(sen){
    var arr_sen = sen.split(' ').map(x=>x.match(/\w/g).join(''));
    var arr_length = arr_sen.map(x=>x.length);
    var max = Math.max.apply(null, arr_length);
    return arr_sen[arr_length.indexOf(max)];
}

var str = 'abcd& efghijkl&!! ijk??';
console.log(str);
console.log(longestWord1(str));