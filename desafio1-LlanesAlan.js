class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName = () => {
        let nombreCompleto = `${ this.nombre} ${this.apellido}`
        console.log(`Su nombre Completo es: ${nombreCompleto}`)
    }
    addBook = (nombre, autor) => {
        const newBook = { nombre: nombre, escritor: autor }
        console.log(`Usted agrego el libro: ${nombre}, del autor:${autor}`);
        this.libros.push(newBook);
        console.log(this.libros)
    }
    addMascota = (nuevaMascota) => {
        this.mascotas = [...this.mascotas, nuevaMascota]
        console.log(`Se sumo ${nuevaMascota} a la familia`)
        console.log(`Sus Mascotas Actuales son: ${this.mascotas}`)
    }
    countMascotas = () => {
        console.log(`Usted Tiene una cantida de ${this.mascotas.length} mascotas`)
    }
    getBookNames = () => {
        console.log("Sus Libros son: ")
        this.libros.map((item, index) => (
            console.log(item.nombre), index
        ))
    }

}

const buddyAlan = new Usuario("Alan", "Llanes", [{ nombre: "El Quijote de La Mancha", escritor: "Miguel de Cervantes Saavedra" }], ["Laly", "Minimau"])
console.log(buddyAlan);
buddyAlan.getFullName();

buddyAlan.addBook("El Principito", "Antoine de Saint-Exupéry");
buddyAlan.addMascota("Baddy");
buddyAlan.countMascotas();
buddyAlan.getBookNames();