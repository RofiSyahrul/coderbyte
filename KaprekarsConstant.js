num = 2111;
count = 0;
while (num!=6174){
    num1 = num.toString().split('').sort().reverse().join(''); // sorting digit with descending order
    num2 = num.toString().split('').sort().join(''); // sorting digit with ascending order
    if (num1.length<4) num1 = num1 + '0'.repeat(4-num1.length); // add zero in the end such that num1 has 4 digits
    if (num2.length<4) num2 = '0'.repeat(4-num2.length) + num2; // add preceding zero such that num1 has 4 digits
    num1 = Number(num1); // convert type of num1 to Number
    num2 = Number(num2); // convert type of num2 to Number
    num = num1-num2; // Substraction
    count++;
}
console.log(count);