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
              <a
              href="https://www.facebook.com/place.fitness.center/"
                className="social-icon-link facebook"
                rel="noreferrer"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>

              <a
                href="https://www.instagram.com/place.fitness.center/"
                className="social-icon-link instagram"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>

              <a
                href="https://wa.me/351289822362"
                className="social-icon-link whatsapp"
                target="_blank"
                rel="noreferrer"
                aria-label="Whatsapp"
              >
                <i className="fab fa-whatsapp" />
              </a>

              <a
                href="mailto:geral@placefitnesscenter.pt"
                className="social-icon-link mail"
                target="_blank"
                rel="noreferrer"
                aria-label="Mail"
              >
                <i className="fa fa-envelope"></i>
              </a>
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
