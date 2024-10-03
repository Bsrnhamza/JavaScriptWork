// Sayılarla ilgili işlemler ve metotlar

// Number metotları
var x = 10;      // Başlangıç değeri 10
x = "10";        // 'x' stringe çevrildi, bu artık bir metin

x = Number("10"); // String '10', sayıya dönüştürüldü: x = 10
x = isNaN("10x"); // '10x' bir sayı değil, bu yüzden x = true döner

// parseInt, parseFloat metotları
var y = 16.14231; 
y = parseInt(y);  // 'y' tam sayıya dönüştürülür, yani 16 olur
y = parseFloat(y); // 'y' tekrar kesirli hale getirilir, yani 16.14231

// Precision ve Fixed metotları
var z = 21.1596;
z = z.toPrecision();    // Z, varsayılan basamak duyarlılığıyla yazılır (bu durumda '21.1596')
z = z.toPrecision(2);   // Sadece iki basamakla gösterilir: '21'
z = z.toFixed();        // Tam sayı haline gelir: '21'
z = z.toFixed(4);       // 4 ondalık basamakla yuvarlanır: '21.1596'

// Math metotları
var a = 34.185423113;    // Değer a'ya atanır
a = Math.PI;             // 'a' artık pi sayısına eşittir (~3.14159)
a = Math.round(2.8);     // 2.8 yuvarlanır, sonuç: 3
a = Math.ceil(2.8);      // 2.8 yukarı yuvarlanır, sonuç: 3
a = Math.floor(2.8);     // 2.8 aşağı yuvarlanır, sonuç: 2
a = Math.sqrt(64);       // 64'ün karekökü alınır, sonuç: 8
a = Math.abs(-2.5);      // -2.5'in mutlak değeri alınır, sonuç: 2.5
a = Math.min(32, 64, 51, 24, 97, 61, 52, 89, 74); // Verilen değerler arasındaki en küçük sayı: 24
a = Math.max(32, 64, 51, 24, 97, 61, 52, 89, 74); // Verilen değerler arasındaki en büyük sayı: 97
a = Math.random() * 100; // 0 ile 100 arasında rastgele bir sayı oluşturulur

// Konsola çıktı alma
console.log(x);          // x'in değerini konsola yazdır
console.log(typeof x);   // x'in türünü (number, string vs.) konsola yazdır
