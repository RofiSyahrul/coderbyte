function checkNums(num1,num2){
    if (num1==num2) return '-1';
    return (num2>num1).toString();
}
console.log(checkNums(67,67));