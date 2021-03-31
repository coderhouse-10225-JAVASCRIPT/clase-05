function Persona(pNombre, pApellido, pEdad, pEmail = "") {
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.edad = pEdad;
    this.email = pEmail; // garantizo que al menos va a tener el valor por defecto
}