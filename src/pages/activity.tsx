import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, Card, Button, Badge, Carousel } from 'react-bootstrap';
import { CalendarDays, History, Clock, ChevronRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/globale.css'

// ✅ Importation directe des images (dans /src/assets/...)
import img1 from '../assets/SPECTACLE/IMG_2383.jpg';
import img2 from '../assets/SHOOTING/IMG_2808.jpg';
import img3 from '../assets/SPECTACLE/spectacle_2.jpg';
import img4 from '../assets/SPECTACLE/spectacle_1.jpg';
import img5 from '../assets/SHOOTING/IMG_2808.jpg';

const Activities = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const navigate = useNavigate();

  const calendarActivities = [
    {
      title: "Formations",
      date: "7 Octobre 2025 - 30 Juin 2026",
      description:
        "Nous dispensons des cours de gymnastique et de danse durant une période de 09 mois consécutifs pour les élèves passionnés.",
    },
    {
      title: "Journées Récréatives",
      date: "   Non définis",
      description:
        "Ce sont des journées durant lesquelles nous permettons aux enfants de sortir du cadre des cours et de sociabiliser, mais aussi des moments de partage dont le but est de resserrer les liens et de faire naître l’esprit d’équipe et d’entraide.",
    },
    {
      title: "Journées Intensives",
      date: "Non défini -5H",
      description:
        "Ce sont des journées de travail intense avec les élèves. Nous prenons 5h de temps dans les journées pendant une semaine ou plus pour accélérer la formation ou juste approfondir certains éléments gymniques ou en danse.",
    },
    {
      title: "Cours en Plein Air",
      date: "Non défini",
      description:
        "Nous mettons en place des journées de cours en plein air dans des espaces publics pour confronter les élèves aux regards extérieurs, travailler leur assurance et faire découvrir nos activités au public.",
    },
    {
      title: "Préparation aux Examens",
      date: "1er Mars – 31 Mai 2025",
      description:
        "Programme mis en place pour renforcer les capacités et accompagner les collégiens et lycéens en gymnastique pour la préparation de leurs examens BEPC et BAC.",
    },
    {
      title: "Compétition Interne",
      date: "Non défini",
      description:
        "Évaluation entre élèves pour observer leur progression et leur capacité à se surpasser dans un contexte compétitif.",
    },
    {
      title: "Spectacle de Fin d’Année",
      date: "Non défini",
      description:
        "Évènement qui présente tout le travail effectué par les élèves durant l’année en danse et gymnastique.",
    },
  ];

  const pastEvents = [
    {
      title: "Sortie ",
      date: "jsp la date",
      details: [
        "2 ou 3 info",
      ],
    },
    {
      title: "Spectacle",
      date: "jsp la date",
      details: [
        "2 ou 3 info",
      ],
    },
  ];

  return (
   <div className="activities-page">
  <Carousel fade className="w-100 fixed-carousel">
    <Carousel.Item>
      <img className="d-block w-100 carousel-img" src={img1} alt="Slide 1" />
      <Carousel.Caption>
        <h3>Premier évènement</h3>
        <p>Description de cet évènement</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100 carousel-img" src={img2} alt="Slide 2" />
      <Carousel.Caption>
        <h3>Second évènement</h3>
        <p>Description de cet évènement</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100 carousel-img" src={img3} alt="Slide 3" />
      <Carousel.Caption>
        <h3>Troisième évènement</h3>
        <p>Description de cet évènement</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100 carousel-img" src={img4} alt="Slide 4" />
      <Carousel.Caption>
        <h3>Quatrième évènement</h3>
        <p>Description de cet évènement</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100 carousel-img" src={img5} alt="Slide 5" />
      <Carousel.Caption>
        <h3>Cinquième évènement</h3>
        <p>Description de cet évènement</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>



      {/* ✅ Calendrier annuel */}
      <Container className="my-5">
        <div className="text-center mb-5" data-aos="fade-up">
          <CalendarDays size={32} className="text-gradient-primary mb-2" />
          <h2 className="fw-bold">Calendrier des Activités 2025</h2>
          <p className="text-muted">
            Toutes les activités prévues pour vivre une année complète.
          </p>
        </div>

        <Row className="g-4">
          {calendarActivities.map((act, index) => (
            <Col md={6} data-aos="fade-up" data-aos-delay={index * 100} key={index}>
              <Card className="shadow-sm border-0 hover-card">
                <Card.Body>
                  <h5 className="fw-bold mb-1">{act.title}</h5>
                  <Badge  className="bg-gradient-secondary mb-2">
                    <Clock size={14} className="me-1" /> {act.date}
                  </Badge>
                  <p className="text-muted small mb-0">{act.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ✅ Activités passées */}
      <Container className="my-5">
        <div className="text-center mb-5" data-aos="fade-up">
          <History size={32} className="text-gradient-primary mb-2" />
          <h2 className="fw-bold">Retour sur les Activités Précédentes</h2>
          <p className="text-muted">
            Les événements marquants des années passées.
          </p>
        </div>

        <Row className="g-4">
          {pastEvents.map((event, index) => (
            <Col md={6} data-aos="fade-up" data-aos-delay={index * 100} key={index}>
              <Card className="shadow-sm border-0 hover-card">
                <Card.Body>
                  <h5 className="fw-bold">{event.title}</h5>
                  <p className="small text-muted mb-2">
                    <Clock size={14} className="me-1" /> {event.date}
                  </p>
                  <ul className="ps-3">
                    {event.details.map((detail, i) => (
                      <li key={i} className="small text-muted">{detail}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ✅ Call to action */}
      <Container className="mb-5">
        <div data-aos="fade-up">
          <Card className="border-0 bg-gradient-primary text-white text-center">
            <Card.Body className="p-5">
              <Sparkles size={48} className="mb-4" />
              <h3 className="fw-bold mb-4">Prêt(e) à devenir un HÉROS ?</h3>
              <p className="lead">
                Rejoignez une aventure humaine, artistique et sportive exceptionnelle.
              </p>
              <div className="mt-4">
                <Button
                  onClick={() => navigate('/contact')}
                  variant="light"
                  size="lg"
                  className="me-3"
                >
                  Nous contacter
                </Button>
                <Button
                  onClick={() => navigate('/cours')}
                  variant="outline-light"
                  size="lg"
                >
                  Voir nos programmes
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Activities;
