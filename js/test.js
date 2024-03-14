let nombre = "Oscar"
console.log("Primera iteración de nombre: "+nombre);

nombre = "Sara"
console.log("Segunda iteración de nombre: "+ nombre)

function isPair(number) {
    let messageToDeliver = "";
    number%2 === 0 ? messageToDeliver = "Es par" : messageToDeliver = "No es par";

    return messageToDeliver;
}

const persona = {
    nombre: "Yo",
    inventario: ["melon"]
}

let fruits = ["Manzana", "nAranja", "peRa", "plAtano", "sandia", "fresa"];

fruits.map((fruit) => {
    fruit = fruit.toLowerCase(fruit)
    persona.inventario.push(fruit)
    console.log(`Hoy tenemos: ${fruit}`)
})

console.table(persona.inventario)

//POR DEFECTO 
fruits.map((fruit) => console.log)
//AÑADIR MULTIPLE FUNCIONALIDAD
fruits.map((fruit) => {

})

let number = 0;
for (let index = 0; index < 10; index++) {
    number = number + index;
    console.log("The current number is: "+number)
}
