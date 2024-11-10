function nimBasedLoop(nimLastTwoDigits: number): void {
    let start = nimLastTwoDigits;
    let count = 20;
    
    // Jika ganjil, pakai while loop
    if (nimLastTwoDigits % 2 !== 0) {
        while (count > 0) {
            console.log(start);
            start++;
            count--;
        }
    } 
    // Jika genap, pakai do-while loop
    else {
        do {
            console.log(start);
            start++;
            count--;
        } while (count > 0);
    }
}

// NIM Saya 043606628
nimBasedLoop(28);