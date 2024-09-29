const ad = "Hamza";
const soyad = "Basaran";

// Birleştirme işlemi
var x = ad + " " + soyad;  // İki string'i boşluk ile birleştirir
console.log(x);  // Çıktı: Hamza Basaran

// concat() metodu ile birleştirme
x = ad.concat(" ", soyad);
console.log(x);  // Çıktı: Hamza Basaran

// String uzunluğu (length)
x = ad.length;  // ad değişkeninin uzunluğunu verir
console.log(x);  // Çıktı: 5 (Hamza 5 karakter)

x = soyad.length;  // soyad değişkeninin uzunluğunu verir
console.log(x);  // Çıktı: 7 (Basaran 7 karakter)

// String'i büyük harfe çevirme
x = ad.toUpperCase();
console.log(x);  // Çıktı: HAMZA

// String'i küçük harfe çevirme
x = soyad.toLowerCase();
console.log(x);  // Çıktı: basaran

// Bir karakterin dizideki indeksini bulma
x = soyad.indexOf("B");  // B harfinin soyad içinde nerede bulunduğunu verir
console.log(x);  // Çıktı: 0 (B harfi 0. indekste)

// Bir string'in belirli bir kısmını alma (slice)
x = soyad.slice(2);  // 2. indeks ve sonrasını alır
console.log(x);  // Çıktı: saran

// String'deki bir kısmı değiştirme (replace)
x = ad.replace("Hamza", "Ahmet");  // Hamza'yı Ahmet ile değiştirir
console.log(x);  // Çıktı: Ahmet
