import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/home.css"
import "../styles/globale.css"
import heroImage from '../assets/SHOOTING/IMG_2808.jpg';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Target,
  Heart,
  Star,
  Shield,
  Users,
  HandHeart,
  Clock,
} from "lucide-react";
import TeamSlideshow from "../components/slideshow";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const values = [
    { icon: Heart, title: "Respect", description: "Respect mutuel et bienveillance", color: "text-danger" },
    { icon: Star, title: "Persévérance", description: "Détermination et ténacité", color: "text-warning" },
    { icon: Shield, title: "Honnêteté", description: "Transparence et intégrité", color: "text-success" },
    { icon: HandHeart, title: "Entraide", description: "Solidarité et support mutuel", color: "text-info" },
    { icon: Users, title: "Esprit d'équipe", description: "Collaboration et unité", color: "text-primary" },
  ];

  {/*const stats = [
    { number: "9", label: "Mois de formation", icon: Calendar },
    { number: "6", label: "Instructeurs experts", icon: Users },
    { number: "10+", label: "Disciplines enseignées", icon: Award },
  ];*/}

  return (
    <>
      {/* Hero Section */}
      <div className="hero text-center"
       style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
  }}>
        <h1 className="display-1 fw-bold px-2 px-md-0" data-aos="fade-up">
          <span className="text-gradient-primary">Zéro</span>{" "}
          <span className="text-gradient-secondary">A</span>{" "}
          <span className="text-gradient-secondary">Héro</span>
        </h1>
        <p className="lead mt-4 px-3" data-aos="fade-up" data-aos-delay="200">
          Jusqu'au bout de vos rêve.
        </p>
      </div>
      {/* Call to Action */}
      <Container className="my-5">
        <div className="text-center" data-aos="fade-up">
      {/* Présentation */}
          <Container>
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="lead mx-auto mb-5" style={{ maxWidth: "900px" }}>
                <strong >Zéro A Héro</strong> Libreville est une école de Danse et de Gymnastique à Libreville au Gabon qui propose des
                 enseignements de qualité pour tous âges et tous les niveaux. Des plus jeunes aux adultes, nous proposons 
                 une formation en Gymnastique et danse, dans un environnement dynamique et communautaire.
              </p>
            </div>
          </Container>
        </div>
        </Container>
      {/* Objectifs */}
      <Container className="my-5">
        <div data-aos="fade-right" data-aos-offset="200">
          <hr className="featurette-divider " />
          <Row className="featurette align-items-center">
            <Col md={7}>
              <div className="d-flex align-items-center mb-3">
                <div className="p-3 bg-gradient-primary rounded-3 me-3">
                  <Target size={32} className="text-white" />
                </div>
                <h2 className="featurette-heading fw-bold lh-1 mb-0">Nos Objectifs</h2>
              </div>
              <p className="lead">
                Nous mettons tout en œuvre pour développer les <strong >compétences techniques</strong>,
                la <strong >force</strong>, la <strong >souplesse</strong>,
                la <strong >confiance</strong> et l'<strong >estime de soi</strong> de chaque élève.
                La Gymnastique et la danse favorisent un développement physique, mental et émotionnel complet.
              </p>
            </Col>
            <Col md={5} className="d-flex align-items-center justify-content-center">
              <div className="objective-image-placeholder bg-gradient-primary rounded-3 d-flex align-items-center justify-content-center text-white">
                <Target size={80} />
              </div>
            </Col>
          </Row>
        </div>

        <hr className="featurette-divider first_div" />

        {/* Valeurs */}
        <div data-aos="fade-left" data-aos-offset="200">
          <Row className="featurette align-items-center">
            <Col md={7} className="order-md-2">
              <div className="d-flex align-items-center mb-3">
                <div className="p-3 bg-gradient-secondary rounded-3 me-3">
                  <Heart size={32} className="text-white" />
                </div>
                <h2 className="featurette-heading fw-bold lh-1 mb-0">Nos Valeurs</h2>
              </div>
              <p className="lead mb-4">
                Le <strong>respect</strong>, la <strong>persévérance</strong>, l'<strong>honnêteté</strong>, l'<strong>entraide</strong> et l'<strong>esprit d'équipe</strong> sont des valeurs que nous transmettons
                au travers d’expériences enrichissantes.
              </p>
              <Row className="g-3">
                {values.map((value) => (
                  <Col key={value.title} xs={6} lg={4}>
                    <Card className="border-0 bg-light h-100 text-center">
                      <Card.Body className="p-3">
                        <value.icon size={24} className={`${value.color} mb-2`} />
                        <h6 className="fw-bold mb-1">{value.title}</h6>
                        <small className="text-muted">{value.description}</small>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md={5} className="d-flex align-items-center justify-content-center">
              <div className="values-image-placeholder bg-gradient-secondary rounded-3 d-flex align-items-center justify-content-center text-white">
                <Heart size={80} />
              </div>
            </Col>
          </Row>
        </div>
      </Container>


      {/* Équipe */}
      <div className="container my-5">
        <hr className="featurette-divider second_div" />
        <h2 className="text-center mb-5" data-aos="fade-up">Notre Équipe Passionnée</h2>
        <p className="lead mx-auto mb-5" style={{ maxWidth: "900px" }}>
          Notre école est animée par une équipe dynamique et passionnée, dédiée à partager l’amour du prochain. 
          Nous créons un environnement accueillant où chacun peut s’épanouir, que ce soit pour développer sa passion 
          pour la gymnastique et le plaisir de la danse du niveau zéro donc amateur au  professionnel.
        </p>
        <br />

        <div data-aos="fade-up" data-aos-delay="200">
          <TeamSlideshow />
        </div>
      </div>
      <hr className="featurette-divider " />


      {/* HORAIRES */}
        <section className="text-center">
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4">
              <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
                <div className="rounded-3 p-2" style={{ background: "#D20F45" }}>
                  <Clock size={28} color="#000000ff" />
                </div>
                <h3 className="h4 fw-bold mb-0">Horaires d'ouverture</h3>
              </div>

              <div className="rounded-4 p-4" style={{ background: "#D20F45" }}>
                <div className="display-6 fw-bold mb-1" style={{
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "black"
                }}>
                  08h00 - Xh
                </div>
                <div className="text-muted">Du X au Y</div>
              </div>
            </div>
          </div>
        </section>

      {/* Call to Action */}
      <Container className="my-5">
        <div className="text-center " data-aos="fade-up">
          <p className="lead mb-4">
            Explorez notre site web pour en savoir plus sur nos programmes, nos installations et nos réalisations.
          </p>
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
            <Link to="/cours">
              <Button className="bg-gradient-primary btn-lg">Voir nos programmes</Button>
            </Link>
            <Link to="/contact">
              <Button  className="btn-lg bg-gradient-primary">Nous rejoindre</Button>
            </Link>
          </div>
        </div>
      </Container>

      

      
    </>
  );
}

export default Home;
