
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import { User,  Star } from 'lucide-react';

const TeamSlideshow = () => {
  const teamMembers = [
    {
      name: "Rick-Daniel BOUANGA MAKAYA",
      role: "Fondateur & Moniteur Principal",
      description: "juste une petite description",
      color: "danger"
    },
    {
      name: "Joséphine KOUMBA IFOUNGA",
      role: "Responsable Administrative",
      description: "juste une petite description",
      color: "danger"
    },
    {
      name: "Olivier NGOMO NZANG",
      role: "Moniteur Gymnastique",
      specialty: "Acrobaties et techniques avancées",
      description: "juste une petite description",
      color: "danger"
    },
    {
      name: "Chris Laurent NGUI",
      role: "Moniteur Gymnastique",
      specialty: "Formation et comptabilité",
      description: "juste une petite description",
      color: "danger"
    },
    {
      name: "Manassé YANGARI",
      role: "Moniteur Danse",
      specialty: "Afro dance et Hip-hop",
      description: "juste une petite description",
      color: "danger"
    },
    {
      name: "Simone Grâce NZANG NDONG",
      role: "Monitrice Gymnastique",
      specialty: "Formation générale et accompagnement",
      description: "juste une petite description",
      color: "danger"
    }
  ];

  return (
    
    <Container>
      <Carousel indicators={false} className="team-carousel">
        {teamMembers.map((member, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              <Col lg={8}>
                <Card className="border-0 shadow-lg">
                  <Card.Body className="p-5 text-center">
                    <div className={`mx-auto mb-4 rounded-circle bg-${member.color} d-flex align-items-center justify-content-center`} 
                         style={{width: '80px', height: '80px'}}>
                      <User size={40} className="text-white" />
                    </div>
                    <h4 className="fw-bold mb-2">{member.name}</h4>
                    <h6 className={`text-${member.color} mb-3`}>{member.role}</h6>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                      <Star size={16} className={`text-${member.color} me-2`} />
                      <small className="text-muted fw-semibold">{member.specialty}</small>
                    </div>
                    <p className="lead text-muted">{member.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default TeamSlideshow;