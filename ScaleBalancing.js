function ScaleBalancing(strArr){
    var scale = strArr[0].split(',').map(x=>Number(x.match(/\d/g).join(''))).sort((a,b)=>a-b);
    var weights = strArr[1].split(',').map(x=>Number(x.match(/\d/g).join(''))).sort((a,b)=>a-b);
    var found = false;
    var i = 0;
    var result = 'not possible';
    while (!found & i<weights.length){
        if (scale[1]===(scale[0]+weights[i])) {
            found = true;
            result = weights[i].toString();
        }
        i++;
    }
    i=0;
    while (!found & i<weights.length){
        var j = i+1;
        while (!found & j<weights.length){
            if (scale[1]===(scale[0]+weights[i]+weights[j]) | (scale[1]+weights[i])==(scale[0]+weights[j])){
                found = true;
                result = [weights[i],weights[j]].join(',');
            }
            j++;
        }
        i++;
    }
    return result;
}

var strArr = ["[6, 1]", "[1, 10, 6, 5]"];
console.log(ScaleBalancing(strArr));