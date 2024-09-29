// Operatörler

var sonuc;
const x = 16;
const y = 11;
let z = 2;
let t = 2;

//! Aritmetik Operatörler

sonuc = x + y;  // Toplama
console.log(sonuc); // 27

sonuc = x - y;  // Çıkarma
console.log(sonuc); // 5

sonuc = x * y;  // Çarpma
console.log(sonuc); // 176

sonuc = x / y;  // Bölme
console.log(sonuc); // 1.4545454545454546

sonuc = x % y;  // Mod alma (kalan)
console.log(sonuc); // 5

sonuc = z++;  // z önce kullanılır, sonra artırılır
console.log(sonuc); // 2
console.log(z);     // 3

sonuc = ++z;  // z önce artırılır, sonra kullanılır
console.log(sonuc); // 4

//! Atama Operatörleri

sonuc = x;  // x'in değerini atar
console.log(sonuc); // 16

sonuc += x;  // sonuc = sonuc + x
console.log(sonuc); // 32

sonuc -= x;  // sonuc = sonuc - x
console.log(sonuc); // 16

sonuc *= x;  // sonuc = sonuc * x
console.log(sonuc); // 256

sonuc /= x;  // sonuc = sonuc / x
console.log(sonuc); // 16

sonuc %= x;  // sonuc = sonuc % x
console.log(sonuc); // 0

//! Karşılaştırma Operatörleri

z = 9;
t = "9";

sonuc = x == y;  // Eşit mi? (değer kontrolü)
console.log(sonuc); // false

sonuc = x === y;  // Hem tip hem değer kontrolü
console.log(sonuc); // false

sonuc = x != y;  // Eşit değil mi? (değer kontrolü)
console.log(sonuc); // true

sonuc = z != t;  // Eşit değil mi? (değer kontrolü)
console.log(sonuc); // false

sonuc = z < t;  // Küçük mü?
console.log(sonuc); // false (çünkü 'z' ve 't' aynı değere sahip)

sonuc = z > t;  // Büyük mü?
console.log(sonuc); // false

//! Mantıksal Operatörler

sonuc = (z < t) && (x > y);  // AND (ve) operatörü
console.log(sonuc); // false

sonuc = (z < t) || (x > y);  // OR (veya) operatörü
console.log(sonuc); // true

sonuc = !(z < t);  // NOT (değil) operatörü
console.log(sonuc); // true (çünkü z < t ifadesi false, tersini alıyoruz)
