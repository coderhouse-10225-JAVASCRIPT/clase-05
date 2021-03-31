
const persona1 = new Persona("", "Medici", 25);

console.log(persona1.nombre);
console.log(persona1.apellido);
console.log(persona1.edad);
console.log(persona1.email);


const persona2 = new Persona("Alejandro", "M", 25, "ale@mail.com");

/*if (persona2.nombre == persona1.nombre) {

}
*/

const persona3 = new cPersona("Aleja", "Med", 30);

persona1.hablar();
persona2.hablar();
persona3.hablar();
