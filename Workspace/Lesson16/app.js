// TODO: Function Lesson 2

// 1. Normal Fonksiyon Tanımı
function sum(a, b) {
    var c = a + b;  // a ve b'nin toplamı
    return c;  // Sonucu döndür
}
console.log("10 + 20 =", sum(10, 20));  // sum fonksiyonu ile toplama işlemi

// 2. Fonksiyon İfadesi (Anonymous Function)
const sum2 = function(x, y) {
    var z = x + y;  // x ve y'nin toplamı
    return z;  // Sonucu döndür
};
console.log("1 + 2 =", sum2(1, 2));  // sum2 fonksiyonu ile toplama işlemi
