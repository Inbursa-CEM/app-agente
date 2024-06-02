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

  encontrarTexto(texto) {
// for seccion in guia:
    //   if texto in seccion
    //    for subtitulo in seccion:
            //it texto in subtitulo:
    //      for paso in subtitulo:
    //        if textoBusqueda in paso:
    //            newGuia.add(seccion);
    //            
    return this
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
