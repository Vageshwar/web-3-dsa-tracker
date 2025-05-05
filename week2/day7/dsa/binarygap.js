// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.



function binaryGap(N){
    if(N < 0){
        return 0;
    }

    const binary = N.toString(2);

    let biggestGap = 0;
    let currentGap = 0;

    for(let i = 1; i < binary.length; i++){
        if(binary[i] === "0"){
            if(binary[i-1] === "0"){
                currentGap++;
            }else{
                currentGap = 1;
            }
        }
        if(binary[i] === "1" && binary[i-1] === "0"){
            biggestGap = Math.max(biggestGap, currentGap);
        }
    }
    return biggestGap;
}