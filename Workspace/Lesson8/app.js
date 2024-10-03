// Dizi (Array) işlemleri

var x = ["a", "b", "c", "d"];       // Karakterlerden oluşan bir dizi
var y = [15, 26, 54, 84, 95, 35];   // Sayılardan oluşan bir dizi
var z = [null, undefined, 24];      // Farklı türdeki verilerden oluşan bir dizi

// Dizi metotları
x.push(19);         // Diziye 19 sonuna eklenir: ["a", "b", "c", "d", 19]
x.unshift(23);      // Diziye 23 başına eklenir: [23, "a", "b", "c", "d", 19]
x.pop();            // Dizinin son elemanı (19) çıkarılır: [23, "a", "b", "c", "d"]
x.shift();          // Dizinin ilk elemanı (23) çıkarılır: ["a", "b", "c", "d"]
x.reverse();        // Dizi ters çevrilir: ["d", "c", "b", "a"]
x.sort();           // Dizi alfabetik olarak sıralanır: ["a", "b", "c", "d"]

var a = x.concat(y); // x ve y dizileri birleştirilir: ["a", "b", "c", "d", 15, 26, 54, 84, 95, 35]

// Konsol çıktıları
console.log(x);        // x dizisinin güncel halini konsola yazdırır
x[3] = "k";            // x dizisinin 4. elemanı (index 3) "k" olarak değiştirilir
console.log(x[3]);     // Dizinin 4. elemanını konsola yazdırır: "k"
console.log(typeof x); // x'in türünü (array, object vs.) konsola yazdırır
console.log(x.length); // x dizisinin eleman sayısını konsola yazdırır
