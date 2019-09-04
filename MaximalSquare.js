function maximalSquare(strArr){
    function getIndex(arr,el){
        var indices = [];
        var id = arr.indexOf(el);
        while (id != -1) {
            indices.push(id);
            id = arr.indexOf(el, id + 1);
        }
        return indices;
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
        indices = indices.sort();
        var difference = [...Array(indices.length-1).keys()].map(x=>indices[x+1]-indices[x]);
        var sum_diff = sum.apply(null,difference);
        if (sum_diff==difference.length) return true;
        return false;
    }
    var nrow = strArr.length;
    var ncol = strArr[0].length;
    var max_square_cand = Math.min(nrow,ncol);
    for (var n=max_square_cand; n>0; n--){
        var result = false;
        for (var row=0; row<=(nrow-n); row++){
            result = false;
            var idx_1 = getIndex(strArr[row],'1');
            for (var i=0;i<=(idx_1.length-n);i++){
                var idx = idx_1.slice(i,n+i);
                if (isConsecutive(idx)){
                    result = true;
                    for (nxt=row+1; nxt<n+row; nxt++){
                        var res_nxt = idx.map(x=>strArr[nxt][x]=='1');
                        if (sum.apply(null,res_nxt)<res_nxt.length) result = false;
                    }
                    if (result) break;
                }
            }
            if (result) break;
        }
        if (result) break;
    }
    return n*n
}
strArr =  ["01001", "11111", "01011", "11111", "01111", "11111"];
console.log(maximalSquare(strArr));