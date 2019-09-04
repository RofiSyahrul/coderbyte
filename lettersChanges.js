str = 'abcd efghz';
letters = 'abcdefghijklmnopqrstuvwxyz';
vowels = 'aiueo';
charChange = function(x){
    if (!letters.includes(x)) return x;
    new_x = letters[(letters.indexOf(x)+1)%26];
    if (vowels.includes(new_x)) new_x = new_x.toUpperCase();
    return new_x;
}
console.log(str.toLowerCase().split('').map(charChange).join(''));