

const peleadores = [
    {nombre: "SUB ZERO",
     equipo: "Lin Kuei",
     poder: "Hielo",
     ataque: function(){
      console.log(`${this.nombre } ataca con poder de ${this.poder}`)}},

     {nombre: "SCORPION",
     equipo: "Shirai Ryu",
     poder: "Fuego",
     ataque: function(){
      console.log(`${this.nombre } ataca con poder de ${this.poder}`)}},
    
     {nombre: "RAIDEN",
     equipo: "Tierra",
     poder: "Rayo",
     ataque: function(){
      console.log(`${this.nombre } ataca con poder de ${this.poder}`)}},

     {nombre: "LIU KANG",
     equipo: "Tierra",
     poder: "Dragón",
     ataque: function(){
      console.log(`${this.nombre } ataca con poder de ${this.poder}`)}},
     
]


peleadores.forEach(function (peleador){
    console.table(peleador);})

 let peleador = prompt("Elije a tu peleador: \n -Sub Zero \n -Scorpion \n -Raiden \n -Liu Kang")
