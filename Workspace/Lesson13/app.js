// Todo: while döngüsü
let x = 0;  // Başlangıç değeri 0
while (x < 10) {
    if (x === 3) {  // Eğer x 3 ise
        x++;  // x'i artır ve döngüye devam et
        continue;  // Bu döngü adımını atla
    }
    console.log(x);  // x'in mevcut değerini konsola yazdır
    x++;  // Her döngüde x'i 1 artır
}

// Todo: do-while döngüsü
let y = 0;  // Başlangıç değeri 0
do {
    console.log(y);  // y'nin mevcut değerini konsola yazdır
    y++;  // Her döngüde y'yi 1 artır
} while (y < 10);  // y 10'dan küçük olduğu sürece döngü devam eder

// Todo: for döngüsü
for (let i = 0; i < 10; i++) {
    if (i === 5) {  // Eğer i 5 ise
        break;  // Döngüden çık
    }
    console.log(i);  // i'nin mevcut değerini konsola yazdır
}
