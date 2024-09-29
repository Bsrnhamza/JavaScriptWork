//! DEĞİŞKEN TANIMLAMA 

// var, let, const kullanımı
//! var:

// Fonksiyon seviyesinde tanımlanır (block scope değil, function scope'a sahiptir).
// Aynı isimle tekrar tanımlanabilir.
// Hoisting (değişkenin tanımlanmadan önce kullanılabilmesi) uygulanır, ancak değeri undefined olur.
var x;
x = "Hamza";
console.log(x); // Çıktı: Hamza

//! let:

// Blok seviyesinde tanımlanır (block scope'a sahiptir, {} içindeki alanlarda geçerlidir).
// Aynı isimle tekrar tanımlanamaz.
// Hoisting uygulanır, ancak tanımlanmadan önce kullanılamaz (temporal dead zone).
let y = "Hamza Başaran";
console.log(y); // Çıktı: Hamza Başaran

//! const:

// let gibi blok seviyesinde tanımlanır.
// Değişkenin değeri sonradan değiştirilemez (immutable). Ancak, objeler ve diziler için bu yalnızca referansı korur; içindekiler değiştirilebilir.
// Aynı isimle tekrar tanımlanamaz ve hoisting uygulanır.
const z = "@abc";
console.log(z); // Çıktı: @abc
