// Todo: Dizileri Ekrana Yazdırma

let cars = ["bmw", "mercedes", "audi"];  // Araç markalarından oluşan bir dizi

// Kişi nesnelerinden oluşan bir dizi
let person = [
    {name: "Hamza", lastName: "Başaran"},
    {name: "Ahmet", lastName: "Başaran"}
];

// 1. for döngüsü ile araçları yazdırma
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
} 

// 2. for-in döngüsü ile index ve değeri yazdırma
for (let i in cars) {
    console.log(`Index: ${i}, Value: ${cars[i]}`);
}

console.log(typeof cars);  // cars dizisinin türünü yazdırma

// 3. forEach metodu ile her bir aracı yazdırma
cars.forEach(function(item) {
    console.log(item); 
});

console.log(person);  // Kişi nesnelerini yazdırma

// 4. for döngüsü ile kişi isimlerini yazdırma
for (let i = 0; i < person.length; i++) {
    console.log(person[i].name);   
}

console.log(typeof person);  // person dizisinin türünü yazdırma
