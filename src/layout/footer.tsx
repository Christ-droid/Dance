import facebookLogo from '../assets/facebook.png';
import instagramLogo from '../assets/instagram.png';
import tiktokLogo from '../assets/tik-tok.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 pt-4 pb-3">
      <div className="container text-center text-md-start">
        <div className="row align-items-center gy-4">

          {/* Réseaux sociaux */}
          <div className="col-12 col-md-4 text-center">
            <h5 className="mb-3">Suivez-nous</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookLogo} alt="Facebook" height="30" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagramLogo} alt="Instagram" height="30" />
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <img src={tiktokLogo} alt="TikTok" height="30" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-4 text-center">
            <h5 className="mb-3">Contact</h5>
            <p className="mb-1">📞 num</p>
            <p className="mb-1">📧 contact@danse-ecole.fr</p>
          </div>

          {/* Infos légales */}
          <div className="col-12 col-md-4 text-center">
            <h5 className="mb-3">Informations</h5>
            <p className="mb-1">
              <a href="/mentions-legales" className="text-white text-decoration-none">Mentions légales</a>
            </p>
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Danse Académie
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;

