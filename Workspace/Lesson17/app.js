// Todo: Window Object Kullanımı

let x;

// 1. Kullanıcıya mesaj gösteren alert metodu
alert("Merhaba!");  // "Merhaba!" mesajını kullanıcıya gösterir

// 2. prompt ile kullanıcıdan veri alımı
var y = prompt("Bir değer giriniz ...");  // Kullanıcıdan bir değer girmesini ister ve bu değeri y'ye atar

// 3. window objesi
x = window;  // window objesini x'e atar. (window, global bir objedir)

console.log("Window objesi: ", x);  // window objesinin tamamını konsola yazdırır
console.log("Kullanıcı tarafından girilen değer: ", y);  // prompt ile alınan değeri yazdırır

// 4. confirm ile kullanıcıdan onay alımı
var z = confirm("Devam etmek ister misiniz?");  // Kullanıcıya evet/hayır seçeneği sunar ve sonucunu z'ye atar

// 5. confirm sonucuna göre karar yapısı
if (z == true) {
    console.log("Evet");  // Kullanıcı 'Evet' seçtiyse bu mesajı gösterir
} else {
    console.log("Hayır");  // Kullanıcı 'Hayır' seçtiyse bu mesajı gösterir
}

console.log("Kullanıcı onayı: ", z);  // confirm sonucu (true/false) yazdırılır
