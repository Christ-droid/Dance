import React, { useEffect } from 'react';
import AOS from 'aos';
import "../styles/cours.css";
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Activity, Music, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';



import gym from '../assets/SHOOTING/IMG_2370.jpg';
import dance from '../assets/SPECTACLE/IMG_2327.jpg';

import gymFloor from '../assets/SPECTACLE/IMG_2334.jpg';
import gymEquipment from '../assets/SPECTACLE/IMG_2334.jpg';
import rhythmicGym from '../assets/SPECTACLE/IMG_2334.jpg';
import cheerleading from '../assets/SPECTACLE/IMG_2334.jpg';

import hiphop from '../assets/SPECTACLE/IMG_2334.jpg';
import contempDance from '../assets/SPECTACLE/IMG_2334.jpg';
import afroDance from '../assets/SPECTACLE/IMG_2334.jpg';
import krump from '../assets/SPECTACLE/IMG_2334.jpg';
import ikoku from '../assets/SPECTACLE/IMG_2334.jpg';
import danceTherapy from '../assets/SPECTACLE/IMG_2334.jpg';
import GrilleTarifaire from '../components/grille';



const Programs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const navigate = useNavigate();

  const gymnasticsPrograms = [
  {
    name: "Gymnastique au sol",
    description: "Ceci est une petite description du cours",
    image: gymFloor
  },
  {
    name: "Gymnastique sur engin",
    description: "Ceci est une petite description du cours",
    image: gymEquipment
  },
  {
    name: "Gymnastique Rythmique",
    description: "Ceci est une petite description du cours",
    image: rhythmicGym
  },
  {
    name: "Cheerleading",
    description: "Ceci est une petite description du cours",
    image: cheerleading
  }
];

const dancePrograms = [
  {
    name: "Hip-Hop",
    description: "Ceci est une petite description du cours",
    image: hiphop
  },
  {
    name: "Danse Contemporaine",
    description: "Ceci est une petite description du cours",
    image: contempDance
  },
  {
    name: "Afro Dance",
    description: "Ceci est une petite description du cours",
    image: afroDance
  },
  {
    name: "Krump",
    description: "Ceci est une petite description du cours",
    image: krump
  },
  {
    name: "Ikoku Fitness",
    description: "Ceci est une petite description du cours",
    image: ikoku
  },
  {
    name: "Danse Thérapie",
    description: "Ceci est une petite description du cours",
    image: danceTherapy
  }
];

  return (
    <div className="programs-page">

      {/* Hero Section */}
      <div className="hero-section py-5 bg-light">
        <Container>
          <div className="text-center" data-aos="fade-up">
            <h1 className="display-4 fw-bold mb-4">
              Nos <span className="text-gradient-primary">Programmes</span>
            </h1>
            <p className="lead mt-4 px-3" data-aos="fade-up" data-aos-delay="200">
              Je suis belle(beau), je suis fort(e),je suis intelligent(e), et je tout peux faire.
            </p>
           {/* <p className="lead mb-4">
              Découvrez notre gamme complète de programmes de gymnastique et de danse, adaptés à tous les âges et niveaux.
            </p>*/}
            <div className="hero-line mx-auto mb-4"></div>
          </div>
        </Container>
      </div>

      {/* Gymnastique Background Section */}
      <div
        style={{
          backgroundImage: `url(${gym})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          minHeight: '400px',
          color: 'white',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Container>
          <h2 className="fw-bold display-5">Gymnastique</h2>
          <p>Force, souplesse et technique</p>
        </Container>
      </div>

      {/* Gymnastique Program List */}
      <Container className="my-5">
        <Row className="g-4">
          {gymnasticsPrograms.map((program, index) => (
            <Col key={index} lg={6} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start mb-3">
                    <img
                      src={program.image}
                      alt={program.name}
                      className="me-3 rounded"
                      style={{ width: "60px", height: "60px", objectFit: "cover" }}
                    />
                    <div className="flex-grow-1">
                      <h5 className="fw-bold mb-1">{program.name}</h5>
                    </div>
                  </div>
                  <p className="text-muted mb-0">{program.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Danse Background Section */}
      <div
        style={{
          backgroundImage: `url(${dance})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          minHeight: '400px',
          color: 'white',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Container>
          <h2 className="fw-bold display-5 ">Danse</h2>
          <p>Rythme, expression et créativité</p>
        </Container>
      </div>

      {/* Danse Program List */}
      <Container className="my-5">
        <Row className="g-4">
          {dancePrograms.map((program, index) => (
            <Col key={index} lg={6} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start mb-3">
                    <img
                      src={program.image}
                      alt={program.name}
                      className="me-3 rounded"
                      style={{ width: "60px", height: "60px", objectFit: "cover" }}
                    />
                    <div className="flex-grow-1">
                      <h5 className="fw-bold mb-1">{program.name}</h5>
                    </div>
                  </div>
                  <p className="text-muted mb-0">{program.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Levels Section */}
      
      <GrilleTarifaire />


      <Container>
        {/* Call to Action */}
        <div className="text-center bg-gradient-secondary mt-5" data-aos="fade-up">
          <Card className="border-0 bg-gradient-primary">
            <Card.Body className="p-5">
              <h3 className="fw-bold mb-3">Prêt à commencer ?</h3>
              <p className="lead mb-4">
                Rejoignez notre communauté dynamique et commencez votre parcours vers l'excellence.
              </p>
              <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
                <Button onClick={() => navigate('/contact')} size="lg" className="bg-gradient-primary">
                  S'inscrire maintenant <ChevronRight size={20} className="ms-2" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Programs;
