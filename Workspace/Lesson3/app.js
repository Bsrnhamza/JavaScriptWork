//! DEĞİŞKEN TANIMLAMA 

// var let const
//! var:

// Fonksiyon seviyesinde tanımlanır (block scope değil, function scope'a sahiptir).
// Aynı isimle tekrar tanımlanabilir.
// Hoisting (değişkenin tanımlanmadan önce kullanılabilmesi) uygulanır, ancak değeri undefined olur.
//! let:

// Blok seviyesinde tanımlanır (block scope'a sahiptir, {} içindeki alanlarda geçerlidir).
// Aynı isimle tekrar tanımlanamaz.
// Hoisting uygulanır, ancak tanımlanmadan önce kullanılamaz (temporal dead zone).
//! const:

// let gibi blok seviyesinde tanımlanır.
// Değişkenin değeri sonradan değiştirilemez (immutable). Ancak, objeler ve diziler için bu yalnızca referansı korur; içindekiler değiştirilebilir.
// Aynı isimle tekrar tanımlanamaz ve hoisting uygulanır.

var x;
x="Mustafa";
console.log(x);

let y="Mustafa Filiz";
console.log(y);

const z="@abc";
console.log(z);