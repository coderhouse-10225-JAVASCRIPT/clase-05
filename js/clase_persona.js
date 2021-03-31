// Le antepongo una C para diferenciarlo al del archivo persona.js
class cPersona {
    constructor(pNombre, pApellido, pEdad, pEmail = ""){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.edad = pEdad;
        this.email = pEmail;
    }

    hablar (){
        console.log("Hola soy " + this.nombre + " pero desde una class");
    }
}