//Autor: Arturo Montes G.
//Desc: Archivo con clases que definen el comportamiento de una guia para agente
class Guia {
    constructor(titulo) {
        this.secciones = [];
        this.titulo = titulo
    }

    agregarSeccion(seccion) {
        this.secciones.push(seccion);
    }
}

class Seccion {
    constructor(titulo) {
        this.subtitulos = [];
        this.titulo = titulo
    }

    agregarSubtitulo(subtitulo) {
        this.subtitulos.push(subtitulo);
    }
}

class Subtitulo {
    constructor(titulo) {
        this.pasos = []; // los pasos son strings
        this.titulo = titulo
    }

    agregarPaso(paso) {
        this.pasos.push(paso);
    }
}

export { Guia, Seccion, Subtitulo };
