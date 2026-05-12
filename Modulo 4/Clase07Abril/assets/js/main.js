// class Persona {
//     constructor (nombre, edad, sexo){ /* Propiedades */
//         this.nombre = nombre
//         this.edad = edad
//         this.sexo = sexo
//     }

//     saludar() {
//         console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}.`)
//     }
// }

// const persona1 = new Persona("Jane Doe", 35, "femenino")
// console.log(persona1)
// console.log(persona1.nombre)
// persona1.saludar()

// const persona2 = new Persona("John Doe", 39,"")
// console.log(persona2)
// console.log(persona2.nombre)
// persona2.saludar()

// ver pilares de la POO, abstraccion, poliformismo y herencia
// Herencia permite crear jerarquia de clases, como de arbol genealogico

class Animal { /* Esto seria herencia */
    constructor(nombre, edad, peso, altura) {
        this.nombre = nombre
        this.edad = edad
        this.peso = peso
        this.altura = altura
    }

    hablar () {
        console.log(`${this.nombre} dijo miiiiaaauuuu`)
    }
}

class gato extends Animal { /* aca herada los this. de la clase "padre" */
    constructor(nombre, edad, peso, altura, raza, color) {
        super(nombre, edad, peso, altura)
        this.raza = raza
        this.color = color
    }
    hablar () {
        console.log(`${this.nombre} dijo miiiiaaauuuu`)
    }
}

class perro extends Animal { /* aca herada los this. de la clase "padre" */
    constructor(nombre, edad, peso, altura, raza, color) {
        super(nombre, edad, peso, altura)
        this.raza = raza
        this.color = color
    }
    hablar () {
        console.log(`${this.nombre} dijo miiiiaaauuuu`)
    }
}

const gato1 = new gato("Kuki",2,"6kg", " 30 cm ","comun de pelo corto"," blanco con manchas gris")
console.log(gato1)
gato1.hablar()

// Polimorfisto, un objeto se puede cambiar su comportamiento segun la clase 