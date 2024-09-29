// Değişken türleri

// TODO: Primitive Types (İlkel Veri Tipleri)

// undefined: Değeri henüz atanmadığı için 'undefined' türünde olur.
var x;
console.log(typeof x); // Çıktı: undefined

// null: Boş bir değer, nesneyi işaret eder ama kendisi bir primitive veri tipidir.
var y = null;
console.log(typeof y); // Çıktı: object (JavaScript'teki bir tarihi anomali)

// string: Metinsel veri tipi
var name = "Abc";
console.log(typeof name); // Çıktı: string

// number: Sayısal veri tipi
var age = 14;
console.log(typeof age); // Çıktı: number

// boolean: Mantıksal veri tipi (true veya false)
var online = true;
console.log(typeof online); // Çıktı: boolean

// TODO: Reference Types - Objects (Referans Veri Tipleri)

// Array (Dizi): Referans tipli veri yapısı
var cars = ['Volvo', 'Mercedes', 'Bmw'];
console.log(typeof cars); // Çıktı: object

// Object (Nesne): Anahtar-değer çiftleri ile tanımlanan veri yapısı
var person = {
    name: "Hamza",
    age: 21
};
console.log(typeof person); // Çıktı: object

// Function (Fonksiyon): Bir referans türü, fonksiyon da bir nesnedir
var isAlive = function() {
    return 0;
};
console.log(typeof isAlive); // Çıktı: function
