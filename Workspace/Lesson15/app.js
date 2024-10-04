// Todo: Functions

// Bir sayının karesini hesaplayan fonksiyon
function square(number) {
    return number * number;
}

// square fonksiyonunu kullanarak sonuçlar alma
let x = square(2);
let y = square(4);
let z = square(3);

console.log("2'nin karesi: ", x);
console.log("4'ün karesi: ", y);
console.log("3'ün karesi: ", z);

// İki sayının karelerinin toplamını hesaplayan fonksiyon
function total(number1, number2) {
    // Kare hesaplayan iç fonksiyon
    function squareTwo(a) {
        return a * a;
    }
    // İki sayının karelerinin toplamını döndürür
    return squareTwo(number1) + squareTwo(number2);
}

// 3 ve 4 sayılarının karelerinin toplamı
let result = total(3, 4);

console.log("3 ve 4'ün karelerinin toplamı: ", result);
