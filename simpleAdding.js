function SimpleAdding(num){
    if (num==1) return num;
    return num + SimpleAdding(num-1);
}
console.log(SimpleAdding(100));