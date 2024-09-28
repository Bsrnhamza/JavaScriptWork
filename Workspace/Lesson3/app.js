/*
    Scope(Kapsam)
    Global Scope
    Function Scope
    Block Scope
    var-let - const
*/

// var değişkenIsmi = 10 ;
// console.log(değişkenIsmi);

// var a = 5 ;//global scope  
//  while(a>4)
//     {
//         console.log(a);        
//         break;
//     }
//     if(true)
//     {
//        function method1()
//        {
//         console.log(a);
//        } 
//     }
//     method1 ();

//! Function Scope
// function method1(){
//     var sayi =10;
//     console.log (sayi);
// }
//! Block scope
function method1(){
    if(true){
        var a=5; //block 
    }
}
