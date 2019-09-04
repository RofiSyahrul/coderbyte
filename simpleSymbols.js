letters = 'abcdefghijklmnopqrstuvwxyz';
str = '+d++=3=+s+';
str_letter = str.match(/[a-zA-Z]/g);
n = str_letter.length;
i = 0; result = true;
while (i<n && result){
  x = str_letter[i];
  id_x = str.indexOf(x);
  if (id_x==0 || id_x==(str.length-1)) result = false;
  else{
      before = str[id_x-1];
      after = str[id_x+1];
      if (before!='+' || after!='+') result = false;
  }
  i++;
}
console.log(result.toString())