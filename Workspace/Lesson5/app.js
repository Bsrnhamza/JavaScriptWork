//Todo Date Object (Tarih ve Zaman Nesnesi)

var x = new Date();  // Şu anki tarih ve zaman alınıyor
console.log(x);  // Örneğin: 2024-09-29T12:34:56.789Z

//! Get (Alma İşlemleri)

// Yıl bilgisi alınıyor
console.log(x.getFullYear());  // Örneğin: 2024

// Ay bilgisi alınıyor (0 tabanlı, Ocak 0, Şubat 1, vs.)
console.log(x.getMonth());  // Örneğin: 8 (Eylül, 0 tabanlı)

// Gün bilgisi alınıyor (ayın hangi günü)
console.log(x.getDate());  // Örneğin: 29

// Saat bilgisi alınıyor (24 saat formatında)
console.log(x.getHours());  // Örneğin: 15

// Hafta günü bilgisi alınıyor (0: Pazar, 1: Pazartesi, ... 6: Cumartesi)
console.log(x.getDay());  // Örneğin: 0 (Pazar)

//! Set (Değiştirme İşlemleri)

// Yılı 1996 olarak ayarlıyoruz
x.setFullYear(1996);
console.log(x);  // Örneğin: 1996-09-29T12:34:56.789Z

// Ayı Kasım olarak ayarlıyoruz (Kasım 10. indekse denk gelir, çünkü aylar 0'dan başlar)
x.setMonth(10);  // 0 tabanlı olduğundan 10 Kasım oluyor
console.log(x);  // Örneğin: 1996-11-29T12:34:56.789Z

// Günü 25 olarak ayarlıyoruz
x.setDate(25);
console.log(x);  // Örneğin: 1996-11-25T12:34:56.789Z
