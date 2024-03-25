class Controller {
  constructor(mensajes) {
    this.mensajes = mensajes;
    this.indice = 0;
    this.elementoMensaje = document.querySelector('aside p');
    this.botones = document.querySelectorAll('aside button');
    this.mostrarMensaje();

    this.botones[0].onclick = this.retrocederMensaje.bind(this);
    this.botones[1].onclick = this.avanzarMensaje.bind(this);

    this.intervalID = setInterval(() => {
      this.avanzarMensaje();
    }, 3000);
  }

  mostrarMensaje() {
    this.elementoMensaje.textContent = this.mensajes[this.indice];
  }

  avanzarMensaje() {
    this.indice = (this.indice + 1) % this.mensajes.length;
    this.mostrarMensaje();
  }

  retrocederMensaje() {
    this.indice = (this.indice - 1 + this.mensajes.length) % this.mensajes.length;
    this.mostrarMensaje();
  }

  redirectToProduct() {
    window.location.href = 'product.html';
  }
}

const mensajes = [
  "Aprovecha ahora y lleváta una increíble alfombrilla por la compra de cualquiera de los productos", 
  "Si no encuentras lo que buscas es porque no lo tienes claro ...", 
  "¿En qué otra tienda puedes encontrar contenido de calidad a este precio? Es increíble"
];

const controller = new Controller(mensajes);
