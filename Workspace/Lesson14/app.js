// Todo: Object Literals ile Kişi Bilgilerini Güncelleme Uygulaması

// Kişi nesnesi
let person = {
    firstName: "Hamza",
    lastName: "Başaran",
    age: 21,
};

// Kişi bilgilerini güncelleme fonksiyonu
function updatePerson(newFirstName, newLastName, newAge) {
    person.firstName = newFirstName;  // Yeni isim
    person.lastName = newLastName;    // Yeni soyisim
    person.age = newAge;               // Yeni yaş
}

// Kullanıcıdan yeni bilgileri alarak güncelle
updatePerson("Ali", "Yılmaz", 25);

// Güncellenmiş kişi bilgilerini konsola yazdır
console.log("Güncellenmiş Kişi Bilgileri:");
console.log(`İsim: ${person.firstName}`);
console.log(`Soyisim: ${person.lastName}`);
console.log(`Yaş: ${person.age}`);

// Kişi nesnesinin türünü kontrol et
console.log("Kişi nesnesinin türü:", typeof person);

//! Güncellenmiş Kişi Bilgileri:
//! İsim: Ali
//! Soyisim: Yılmaz
//! Yaş: 25
//! Kişi nesnesinin türü: object
