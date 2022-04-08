<!-- Codigo de la seccion Quienes somos? -->

  <!-- <main style="margin-top: 0px" id="quienesSomos?">
      <div class="contenedor">
        <aside>
          <nav class="indice">
            <a href="#p1">A cerca de nosotros</a>
            <a href="#p2">Formas de pago</a>
            <a href="#p3">Envios</a>
            <a href="#p4">Horarios</a>
            <a href="#p5">Ubicacion</a>
          </nav>
        </aside>
        <div class="contenido">
          <div data-aos="zoom-out" id="p1" class="post background">
            <div style="display: inline-block">
              <h1 class="titulo back">A cerca de nosotros</h1>
              <img data-aos="fade-up-left" style="margin-top: -45px;" class="imagen" src="./imagenesRedes/tienda.png" alt="imagen de tienda" title="imagen de tineda de fiambres"/>
            </div>
            <p class="back">
              Somos una empresa destinada a la ventad de alimentos, embutidos y
              quesos. Nuestro objetivo es satisfacer al cliente con nuestra
              atencion y nuestros productos. Trabajamos desde el local, realizamos
              envios. Brindamos promociones y Nuestras picadas que son exquisitas.
              Las picads se Envian en el dia de elaboración.
            </p>
          </div>
          <div data-aos="zoom-out" id="p2" class="post background">
            <h1 class="titulo">Formas de pago</h1>
            <img data-aos="fade-up-left" src="./imagenesRedes/efectivo.png" title="Formas de pago" alt="imagen de billete"/>
            <p>
              Aceptamos tarjeta de credito/debito, efectivo, transferencia y
            mercado pago. Contamos con el posnet para poder cobrar con tarjetas (debito y credito),
            aceptamos la tarjeta alimentar y tambien contamos con la forma de pago "QR" o "Envio de amigo" de la aplicacion Mercado Pago.
            </p>
          </div>
          <div data-aos="zoom-out" id="p3" class="post background">
            <h1 class="titulo">Envios</h1>
            <img data-aos="fade-up-left" src="./imagenesRedes/envios.png" title="Envios gratis" alt="Imagen de envio"/>
            <p>
              Realizamos envios SIN CARGO por la zona de San Antonio de Padua,
              Ituzaingo y Merlo. A partir de 3.5 KM se cobra un adicional al
              envio. 
            </p>
          </div>
          <div data-aos="zoom-out" id="p4" class="post background">
            <h1 class="titulo">Horarios</h1>
            <img data-aos="fade-up-left" src="./imagenesRedes/reloj.png" title="Nuestros horarios" alt="imagen reloj"/>
            <p>
              Nuestros horarios de atencion son de lunes a sabados de 9hs a 13hs y
              de 17hs a 21hs. Los dias feriados trabajamos de 9:30hs a 13 hs. Los domingos el local permanece cerrado. Los feriados abrimos de 9:30hs a 14:00hs y realizamos envios.
            </p>
          </div>
          <div data-aos="zoom-out" id="p5" class="post background">
            <h1 class="titulo">Ubicación</h1>
            <img data-aos="fade-up-left" src="./imagenesRedes/ubicacion.png" alt="Imagen de pin de ubicación" title="Nuestra ubicación"/>
            <p>
              Nuestro local se encuentra ubicado en San Antonio de Padua, en la
            calle Independencia, altura 585. Entre las calles Veles Zarfield e
            Yrigoyen.
            </p>
          </div>
        </div>
      </div>
    </main> 



.contenedor {
	max-width: 1000px;
	width: 90%;
	margin: auto;
	display: flex;
	justify-content: space-between;
}

main {
  background-image: url(../imagenes/sausages-on-wooden-table.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
    min-height: 100vh;
  }
  
  main {
    .contenido {
      p {
        padding-top: 30px;
        margin-bottom: 20px;
        line-height: 30px;
        color: #525151;
      }
    }
  }
  main{
    .contendio{
      .titulo{
        font: normal 50px Cookie, Arial, Helvetica, sans-serif;
        font-weight: normal;
        padding-top: 40px;
      }
    }
  
  }
  main {
    .contenido {
      .fecha {
        font-size: 14px;
        color: #B5B5B5;
      }
    }
  
  }
//  ASIDE
  
  aside {
    min-width: 30%;
    margin: 40px 20px 20px 0;
    height: 100%;
    background: #1D2F3D;
    padding: 20px;
    border-radius: 3px;
    position: sticky;
    top: 20px;
  }
  
  aside  {

    .titulo{
      font-family:Arial, Helvetica, sans-serif;
      font-weight: normal;
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 20px;
      color: #000000;}
      
  }
  
  aside{
    .indice{
      a{
        display: block;
        margin-bottom: 10px;
        color: #ffffff;
      }
      }
    }
  

  div.background {
    img {
      width: 70px;
      height: 70px;
      margin-top: -75px;
      margin-left: 550px;
      position: absolute;
      flex: end;
    }
  }
  div.contenedor{
    border-radius: 4px;
    background-image: linear-gradient(315deg, #485461b0 0%, #28313b 74%);
    background-size: contain;
    border:solid 3px black;
  }
  div.post {
    h1 {
      font: normal 50px Cookie, Arial, Helvetica, sans-serif;
      color: rgb(243, 222, 198);
    }
  
  }
  div.post {
    p {
      color: white;
    }
  }
  aside{
    border-radius: 4px;
    background-image: linear-gradient(315deg, #485461 0%, #d98927 74%); 
      color:black;
  }
  aside {
    a{
      text-decoration: none;
    }
  }
  aside {
    a {
      &:hover {
        color: rgb(0, 0, 0);
      }
    }
  }

  aside .indice{
    text-align: center;
  }
  // @media Query
  @media screen and (max-width: 900px){
      
    aside{
    position: static;
    margin: 40px 0 0 0;
  }
  main{
    .contenedor {
      flex-direction: column;
    }
  }
}

@media only screen and (max-width: 769px) {
  footer {
    a {
      img {
        margin: 30px;
        width: 40px;
        height: 40px;
      }
    }
  }

  footer {
    a {
      img {
        &:hover {
          transform: scale(1.5, 1.5);
          transition-duration: 2s;
          opacity: 0.6;
        }
      }
    }
  }
}
@media only screen and (max-width:1032px) and (min-width:1023px) {
  div.background {
    img {
      width: 70px;
      height: 70px;
      margin-top: -75px;
      margin-left: 540px;
      position: absolute;
      flex: end;
    }
  }
}
@media only screen and (max-width:1022px) and (min-width:901px) {
  div.background {
    img {
      width: 40px;
      height: 40px;
      margin-top: -75px;
      margin-left: 470px;
      position: absolute;
      flex: end;
    }
  }
}
@media screen and (max-width: 900px) {

  aside {
    position: static;
    margin: 40px 0 0 0;
  }

  main {
    .contenedor {
      flex-direction: column;
    }

  }

  div.background {
    img {
      width: 40px;
      height: 40px;
      margin-top: -50px;
      margin-left: 690px;
      position: absolute;
      flex: end;
    }
  }
}
@media only screen and (max-width:860px) and (min-width:768px){
  div.background {
    img {
      width: 40px;
      height: 40px;
      margin-top: -50px;
      margin-left: 600px;
      position: absolute;
      flex: end;
    }
  }
}

@media only screen and (max-width:768px) and (min-width:591px) {
  div.background {
    img {
      width: 40px;
      height: 40px;
      margin-top: -50px;
      margin-left: 580px;
      position: absolute;
      flex: end;
    }
  }
}
@media only screen and (max-width:736px) and (min-width:590px) {
  div.background {
    img {
      width: 40px;
      height: 40px;
      margin-top: -50px;
      margin-left: 440px;
      position: absolute;
      flex: end;
    }
  }
}
@media only screen and (max-width:589px) and (min-width:490px) {
  div.background {
    img {
      width: 40px;
      height: 40px;
      margin-top: -50px;
      margin-left: 350px;
      position: absolute;
      flex: end;
    }
  }
}
@media only screen and (max-width:489px) and (min-width:446px) {
  div.background {
    img {
      width: 40px;
      height: 40px;
      margin-top: -50px;
      margin-left: 310px;
      position: absolute;
      flex: end;
    }
  }
}

@media only screen and (max-width:445px) and (min-width:400px) {
  div.background {
    img {
      width: 40px;
      height: 40px;
      margin-top: -50px;
      margin-left: 300px;
      position: absolute;
      flex: end;
    }
  }
} -->