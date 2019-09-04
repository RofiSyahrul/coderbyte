function ChessboardTraveling(str){
    var right = [1,0];
    var up = [0,1];
    function branch (current, to){
        if (current[0]==to[0]) return up.map(x=>current[x]+up[x]);
        if (current[1]==to[1]) return up.map(x=>current[x]+right[x]);
        var current1 = up.map(x=>current[x]+right[x]);
        var current2 = up.map(x=>current[x]+up[x]);
        return [current1,current2].map(x=>branch(x,to));
    }
    var from_to = str.match(/(\d \d)/g);
    var from = from_to[0].match(/\d/g).map(Number);
    var to = from_to[1].match(/\d/g).map(Number);
    result = branch(from, to).join(',');
    return result.split(',').length/2;
}
str = '(1 1)(3 3)';
console.log(ChessboardTraveling(str));