function Persona(pNombre, pApellido, pEdad, pEmail = "") {
    this.apellido = pApellido;
    this.edad = pEdad;
    this.nombre = pNombre;
    this.email = pEmail; // garantizo que al menos va a tener el valor por defecto

    this.hablar = function () {
        console.log("Hola soy " + this.nombre);
    }
}