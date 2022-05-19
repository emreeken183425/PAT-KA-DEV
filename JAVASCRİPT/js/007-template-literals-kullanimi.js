// ********** Template Literals Kullanimi ********** 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username = "hakan"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email)

let info = `
Merhaba ${username} sitemize hosgeldin.. 
mail adresin: ${email}

mail adresinin uzunlugu: ${email.length}
borcunuz: ${(6 + 3) * 10} TL
gunun saat bilgisi : ${new Date().getHours()}

kisa isminiz: ${username[0]}.
`

console.log(info)


let ad = "emre"
let soyad = "eken"
let username2 = "emreeken1834@gmail.com"
let info1 = `merhaba ben ${ad} ${soyad} bana ${username2} den ulaşabilirsiniz.
`
console.log(info1)