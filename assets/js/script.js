//IIFE
const autoejecutable = (() => {
  let funcionPrivada = (url, id) => {
    let elemento = document.getElementById(id);
    elemento.setAttribute("src", url);
  };
  return {
    funcionPublica: (url, id) => funcionPrivada(url, id),
  };
})();

//Clase Multimedia
class Multimedia {
  constructor(url) {
    let _url = url;
    this.getUrl = () => {
      return _url;
    };
    this.setUrl = (nuevo_url) => {
      _url = nuevo_url;
    };
  }
  get url() {
    return this.getUrl();
  }
  set url(nuevo_url) {
    this.setUrl(nuevo_url);
  }
  setInicio() {
    return `este metodo es para realizar un cambio en la url del video`;
  }
}
//Clase reproductor
class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    let _id = id;
    this.getId = () => {
      return _id;
    };
    this.setId = (nuevo_id) => {
      _id = nuevo_id;
    };
  }
  get id() {
    return this.getId();
  }
  set id(nuevo_id) {
    this.setId(nuevo_id);
  }
  playMultimedia() {
    autoejecutable.funcionPublica(this.url, this.id);
  }
  setInicio(segundos) {
    document
      .getElementById(this.id)
      .setAttribute("src", `${this.url}?start=${segundos}`);
  }
}
//clases hijas
let pelicula = new Reproductor(
  "https://www.youtube.com/embed/cZX8Q9OYsKE?si=eeoaxkdM0jIZ4Dj1",
  "peliculas"
);
let musica = new Reproductor(
  "https://www.youtube.com/embed/6iVnmr4GkQw?si=m7taMYCGLK3haqLy",
  "musica"
);
let serie = new Reproductor(
  "https://www.youtube.com/embed/yyGetSp7CIc?si=TlrAnB62trmYLspr",
  "series"
);
//Llamar a playMultimedia
pelicula.playMultimedia();
musica.playMultimedia();
serie.playMultimedia();
pelicula.setInicio(30);
