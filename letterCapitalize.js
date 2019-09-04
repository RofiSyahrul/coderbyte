function letterCapitalize(str){
    return str.split(' ').map(x => x.replace(x[0], x[0].toUpperCase())).join(' ');
}

var str = 'hello world';
console.log(str);
console.log(letterCapitalize(str));