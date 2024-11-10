function SoalPertama(): void {
    let currentNumber = 1;
    
    for (let group = 1; group <= 10; group++) {
        let sum = 0;
        const numbers: number[] = [];
        
        console.log(`Perulangan 10 ke-${group}:`);
        
        // Menentukan Ganjil atau Genap
        const isOddGroup = group % 2 !== 0;
        
        if (isOddGroup) {
            for (let i = 0; i < 5; i++) {
                while (currentNumber % 2 === 0) currentNumber++; 
                console.log(currentNumber);
                numbers.push(currentNumber);
                currentNumber += 2;
            }
        } else {
            while (currentNumber % 2 !== 0) currentNumber++; 
            for (let i = 0; i < 5; i++) {
                console.log(currentNumber);
                numbers.push(currentNumber);
                currentNumber += 2;
            }
        }
        
        // Menjumlahkan angka
        sum = numbers.reduce((acc, curr) => acc + curr, 0);
        
        // Menampilkan angka
        console.log('--------------------------');
        console.log(`Jumlah: ${sum}`);
        console.log(); 
    }
}

// Memanggil fungsi
SoalPertama();