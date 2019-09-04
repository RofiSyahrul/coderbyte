function PentagonalNumber(num){
    if (num==1) return 1;
    return (num-1)*5 + PentagonalNumber(num-1);
}
console.log(PentagonalNumber(5));