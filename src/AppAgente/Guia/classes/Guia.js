//Autor: Arturo Montes G.
//Desc: Archivo con clases que definen el comportamiento de una guia para agente

class Guia {
  constructor(titulo) {
    this.secciones = [];
    this.titulo = titulo;
  }

  agregarSeccion(seccion) {
    this.secciones.push(seccion);
  }

  encontrarTexto(texto) {
    let nuevaGuia = new Guia(this.titulo);
    for (let seccion of this.secciones) {
      let nuevaSeccion = new Seccion(seccion.titulo);
      for (let subtitulo of seccion.subtitulos) {
        //let nuevoSubtitulo = new Subtitulo(subtitulo.titulo);
        //let subtituloAdded = false; 
        
        if (subtitulo.titulo.toLowerCase().includes(texto.toLowerCase())) {//match con subtitulo
          nuevaSeccion.agregarSubtitulo(subtitulo);
         // subtituloAdded = true;
        } else {
          for (let paso of subtitulo.pasos) {
            if (paso.toLowerCase().includes(texto.toLowerCase())) {
              nuevaSeccion.agregarSubtitulo(subtitulo);
              break;
            }
          }
        }
        
        //if (subtituloAdded) {
         // nuevaSeccion.agregarSubtitulo(nuevoSubtitulo);
        //}
      }
      
      // Add the section if it contains any subtitulo
      if (nuevaSeccion.subtitulos.length > 0) {
        nuevaGuia.agregarSeccion(nuevaSeccion);
      }
    }
    console.log("poo"); 
    return nuevaGuia.secciones.length === 0?-1:nuevaGuia;
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

export {Guia, Seccion, Subtitulo}
