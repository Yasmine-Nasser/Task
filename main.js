function printPrimeNums(n , m) {
    function primeNums(num) {
        if (num <= 1) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    for (let i = n + 1; i < m; i++) {
        if (primeNums(i)) {
            console.log(i);
        }
    }
}
printPrimeNums(5 , 10); 
printPrimeNums(7 , 20);