import "./Footer.css";

function Footer() {
  return (
    <>
      <section className="footerContainer">
        <div className="footerInfo">
          <div className="row">
            <h3>Quem Somos</h3>
            <div className="items">
              <p>Academia</p>
              <p>A Equipe</p>
              <p>Sócios</p>
              <p>Conceito</p>
            </div>
          </div>
          <div className="row">
            <h3>Planos</h3>
            <div className="items">
              <p>Plano 1</p>
              <p>Plano 2</p>
              <p>Plano 3</p>
              <p>Plano 4</p>
              <p>Plano 5</p>
            </div>
          </div>
          <div className="row">
            <h3>Notícias</h3>
            <div className="items">
              <p>Blog</p>
              <p>Artigos</p>
            </div>
          </div>
          <div className="row">
            <h3>Endereço</h3>
            <div className="items">

            </div>
          </div>
        </div>
        <div className="lastLine">
          <p>Place - Fitness Center</p>
          <p>All rights reserved © 2022</p>
          <a
            href="https://www.pedrohenriquelima.com.br"
            target="_blank"
            rel="noreferrer"
          >
            <p>Designed by Pedro Henrique Lima</p>
          </a>
        </div>
      </section>
    </>
  );
}

export default Footer;
