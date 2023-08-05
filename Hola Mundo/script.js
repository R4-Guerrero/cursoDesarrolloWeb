var nombre = "Arturo";
console.log("Hola " + nombre);

function saludar(nombre) {
    return "Hola " + nombre + "!";
}

let saludando = saludar("Arturo");
console.log(saludando);

function suma(a,b) {
    return a+b;
}

let resultado = suma(2, 3);
console.log(resultado);

function persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

let Persona = new persona("Arturo", 48);
console.log(Persona.nombre);
console.log(Persona.edad);