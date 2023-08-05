// Tema No 7 - VARIABLES

//alert("Esto es una Alerts");

var saludo = "Hola Mundo";
console.log(saludo);


// Primitivo
let variable1 = 100;     //numerica
let variable2 = "Hola";  //String
let variable3 = false;   //Boleana
let edad;                //Indefinido
let sexo = null;         //Nulo
let numerote = 1321684321685463516813518n;  //bigint

let esMayorDeEdad = true;
if(esMayorDeEdad) {
    console.log("Ud es mayor de edad puede entrar al Antro")
}else {
    console.log("No eres mayor de edad vuelva pronto!")
}

let name;
console.log(name);
console.log(sexo);

console.log(typeof variable2);
console.log(typeof numerote);
console.log(typeof edad);

// Complejos
let miPrimerObjeto = {
    miNombre: "Arturo",
    miEdad: 48,
    miCiudad: "Mty",
};
console.log(miPrimerObjeto.miCiudad);

const sumar = function(a,b) {
    let resultado = a +b;
    return resultado;
};

console.log(sumar(2, 3));

// Clase

class Calendario {
    #mes;
    #dia;
    #ano;

    constructor(ano, mes, dia) {
        this.#ano;
        this.#mes;
        this.#dia;
    }
}