function CorrectPath(str){
    function getIndex(arr,el){
        var indices = [];
        var id = arr.indexOf(el);
        while (id != -1) {
            indices.push(id);
            id = arr.indexOf(el, id + 1);
        }
        return indices;
    }
    function isSame(arr1,arr2){
        if (arr1.length!=arr2.length) return false;
        return [...Array(arr1.length).keys()].every(x=>arr1[x]==arr2[x])
    }

    var right = [1,0];
    var left = [-1,0];
    var up = [0,1];
    var down = [0,-1];
    var topleft_pos = [1,5];
    var bottomright_pos = [5,1];
    var indices = [...Array(2).keys()];

    var arr_str = str.split('');
    var id_quest = getIndex(arr_str,'?');
    var n_quest = id_quest.length;
    var arr_move = arr_str.map(x=>{
        switch(x){
            case 'r': return right;
            case 'l': return left;
            case 'u': return up;
            case 'd': return down;
            default: return [0,0];
        }
    });
    var movement = [0,0];
    for (var move of arr_move){
        movement = indices.map(x=>movement[x]+move[x])
    }
    var current = indices.map(x=>topleft_pos[x]+movement[x]);
    var reminder = indices.map(x=>bottomright_pos[x]-current[x]);
    reminders = [];
    if (reminder.join('').includes('0')){
        nonzero_id = reminder.findIndex(x=>x!=0)
        var a = (n_quest+reminder[nonzero_id])/2;
        var b = (n_quest-reminder[nonzero_id])/2;
        rem_a = [0,0]; rem_b = [0,0];
        rem_a[nonzero_id] = 1; rem_b[nonzero_id] = -1;
        for (var i=0; i<a; i++){
            reminders.push(rem_a);
        }
        for (var i=0; i<b; i++){
            reminders.push(rem_b);
        }
    }else{
        if (reminder[0]>0){
            r = reminder[0];
            l = 0;
            u = (n_quest-reminder[0]+reminder[1])/2;
            d = (n_quest-reminder[0]-reminder[1])/2;
        } else{
            r = 0;
            l = -reminder[0];
            u = (n_quest+reminder[0]+reminder[1])/2;
            d = (n_quest+reminder[0]-reminder[1])/2;
        }
        for (var i=0; i<u; i++){
            reminders.push(up);
        }
        for (var i=0; i<r; i++){
            reminders.push(right);
        }
        for (var i=0; i<d; i++){
            reminders.push(down);
        }
        for (var i=0; i<l; i++){
            reminders.push(left);
        }
    }

    // convert reminders array to r, l, u, or, d
    var answer = reminders.map(x=>{
        if (isSame(x,right)) return 'r';
        if (isSame(x,left)) return 'l';
        if (isSame(x,up)) return 'u';
        if (isSame(x,down)) return 'd';
        return '?';
    });

    // assign answer to arr_str
    for (id of id_quest){
        arr_str[id] = answer[id_quest.indexOf(id)];
    }

    return arr_str.join('');
}


var str = "rdrdr??rddd?dr";
console.log(CorrectPath(str));