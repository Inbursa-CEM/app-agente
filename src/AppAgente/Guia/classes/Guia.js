//Autor: Arturo Montes G.
//Desc: Archivo con clases que definen el comportamiento de una guia para agente

class Guia {
  //Descripcion: Clase para modelar la informacion que debe contener una guia
  constructor(titulo) {
    //Descripcion: metodo para construir un objeto
    this.secciones = [];
    this.titulo = titulo;
  }

  agregarSeccion(seccion) {
    //Descripcion: metodo para agregar secciones a la guia
    //Parametros: 
    //            seccion: string
    this.secciones.push(seccion);
  }
  encontrarTexto(texto) {
    //Descripcion: metodo para encontrar una nueva guia, solamente con las secciones que tengan un substring igual texto
    //Parametros: 
    //            texto: string
    let nuevaGuia = new Guia(this.titulo);
    for (let seccion of this.secciones) {
      let nuevaSeccion = new Seccion(seccion.titulo);
      for (let subtitulo of seccion.subtitulos) {
        if (subtitulo.titulo.toLowerCase().includes(texto.toLowerCase())) {//match con subtitulo
          nuevaSeccion.agregarSubtitulo(subtitulo);
        } else {
          for (let paso of subtitulo.pasos) {
            if (paso.toLowerCase().includes(texto.toLowerCase())) {
              nuevaSeccion.agregarSubtitulo(subtitulo);
              break;
            }
          }
        }
      }

      if (nuevaSeccion.subtitulos.length > 0) {
        nuevaGuia.agregarSeccion(nuevaSeccion);
      }
    }
    console.log("poo");
    return nuevaGuia.secciones.length === 0 ? -1 : nuevaGuia;
  }
}

class Seccion {
  //Descripcion: clase para modelar la informacion que contiene una seccion
  constructor(titulo) {
    //Descripcion: metodo para construir un objeto
    this.subtitulos = [];
    this.titulo = titulo
  }

  agregarSubtitulo(subtitulo) {
    //Descripcion: metodo que agrega un subtitulo a una seccion
    //Parametros:
    //            subtitulo: string
    this.subtitulos.push(subtitulo);
  }
}

class Subtitulo {
  constructor(titulo) {
    //Descripcion: metodo para construir un objeto
    this.pasos = [];
    this.titulo = titulo
  }

  agregarPaso(paso) {
    //Descripcion: metodo que agrega un subtitulo a una seccion
    //Parametros:
    //            paso: string

    this.pasos.push(paso);
  }
}

export { Guia, Seccion, Subtitulo }
