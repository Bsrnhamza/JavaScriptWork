//todo Switch yapısı ile araba markasına göre işlem yapılması

let araba = "bmw";

switch (araba) {
    case "bmw":
        console.log("BMW üretime alındı...");
        break;  // Eğer araba 'bmw' ise bu blok çalışır ve çıkış yapılır

    case "mercedes":
        console.log("Mercedes üretime alındı...");
        break;  // Eğer araba 'mercedes' ise bu blok çalışır ve çıkış yapılır

    default:
        console.log("Hatalı seçim");  // Eğer hiçbir koşul sağlanmazsa bu çalışır
}
