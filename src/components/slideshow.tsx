
import dsc0733 from '../assets/DSC_0733.jpg'; 
type TeamMember = {
    name: string;
    role: string;
    img: string;
    alt: string;
};

import React, { useState } from 'react';

const teamMembers: TeamMember[] = [
    {
        name: "Rick-Daniel BOUANGA MAKAYA",
        role: "Fondateur & Moniteur Principal",
        img: dsc0733,
        alt: "Rick-Daniel BOUANGA MAKAYA"
    },
    {
        name: "Joséphine KOUMBA IFOUNGA",
        role: "Responsable Admin",
        img: dsc0733,
        alt: "Joséphine KOUMBA IFOUNGA"
    },
    {
        name: "Olivier NGOMO NZANG",
        role: "Moniteur Gymnastique/Acrobaties",
        img: dsc0733,
        alt: "Olivier NGOMO NZANG"
    },
    {
        name: "Chris Laurent NGUI",
        role: "Moniteur Gymnastique/Comptabilité",
        img: dsc0733,
        alt: "Chris Laurent NGUI"
    },
    {
        name: "Manassé YANGARI",
        role: "Moniteur Danse/Afro dance et hip-hop",
        img: dsc0733,
        alt: "Manassé YANGARI"
    },
    {
        name: "Simone Grâce NZANG NDONG",
        role: "Monitrice Gymnastique",
        img: dsc0733,
        alt: "Simone Grâce NZANG NDONG"
    }
];

const Slideshow: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    const next = () => setCurrent((prev) => (prev + 1) % teamMembers.length);

    return (
        <div className="d-flex flex-column align-items-center mb-5">
            <div style={{ position: "relative", width: 320, height: 420 }}>
                {teamMembers.map((member, idx) => {
                    // Calculate position relative to current
                    let offset = idx - current;
                    if (offset < -Math.floor(teamMembers.length / 2)) offset += teamMembers.length;
                    if (offset > Math.floor(teamMembers.length / 2)) offset -= teamMembers.length;

                    const isActive = idx === current;
                    const zIndex = isActive ? 2 : 1;
                    const scale = isActive ? 1 : 0.85;
                    const opacity = isActive ? 1 : 0.5;
                    const translateX = offset * 40;

                    return (
                        <div
                            key={member.name}
                            className="card shadow border-0 position-absolute"
                            style={{
                                top: 0,
                                left: "50%",
                                transform: `translateX(-50%) translateX(${translateX}px) scale(${scale})`,
                                zIndex,
                                opacity,
                                width: 300,
                                transition: "all 0.15s cubic-bezier(.4,2,.6,1)",
                                pointerEvents: isActive ? "auto" : "none"
                            }}
                        >
                            <img src={member.img} className="card-img-top" alt={member.alt} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{member.name}</h5>
                            </div>
                            <div className="card-footer bg-white border-0 text-center">
                                <small className="text-body-secondary">{member.role}</small>
                            </div>
                        </div>
                    );
                })}
                <button className="btn btn-outline-primary me-2" onClick={prev} aria-label="Précédent">
                    &#8592;
                </button>
                <button className="btn btn-outline-primary" onClick={next} aria-label="Suivant">
                    &#8594;
                </button>
            </div>
        </div>
    );
};

export default Slideshow;
