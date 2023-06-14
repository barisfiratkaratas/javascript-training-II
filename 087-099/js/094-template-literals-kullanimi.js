//! 094-Template Literals Kullanımı | JAVASCRIPT Dersleri

// function write(firstName , lastName){
//     // console.log("İsim : " + firstName +" " + "Soyisim :" + lastName)


//? Template Literals için kısayol
// ALT GR + İKİ KEZ NOKTALI VİRGÜL TUŞU --> windows
//  option + ; --> macbook
    
//     console.log(
//          `
//          İsim : ${firstName} 
//          Soyisim: ${lastName}
//          `
        
//         )
// }

// write("Enes" , "Bayram")


function getUserById(userId){
    console.log(`http://localhost:8080/users/${userId}`)
}

getUserById(10)