
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/home.css";
import { useState } from "react";
import dsc0733 from "../assets/DSC_0733.jpg";
import TeamSlideshow from "../components/slideshow";

function Home() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className="hero text-center py-5" >
                <h1 className="display-1 fw-bold ">Zéro A Héro </h1>
            </div>
            <div className="container my-5">
                <div className="zero text-center" data-aos="fade-up">
                    {/* <h1 className="display-1"> Zéro à Héro </h1> */}
                    <p className="lead">
                        ZERO A HERO est une école de Danse et de Gymnastique à Libreville au Gabon qui propose des enseignements de qualité pour tous âges et tous les niveaux. Des plus jeunes aux adultes, nous proposons une formation en Gymnastique et danse, dans un environnement dynamique et communautaire.
                    </p>
                </div>
            </div>

            {/* <h1 className="display-1"> Zéro à Héro </h1> */}
            <div className="container my-5">
                <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">
                    <hr className="featurette-divider" />
                    <div className="row featurette align-items-center">
                        <div className="col-md-7">
                            <h2 className="featurette-heading fw-bold lh-1 ">
                                Nos Objectifs
                            </h2>
                            <p className="lead">
                                Nous mettons tout en œuvre pour développer les compétences techniques, la force, la souplesse, la confiance et l’estime de soi de chaque élève. Nous croyons que la Gymnastique et la danse sont des activités ludiques et enrichissantes qui favorisent le développement physique, mental et émotionnel de tous un chacun.
                            </p>
                        </div>
                        <div className="col-md-5 d-flex align-items-center justify-content-center">
                            <img
                                src={dsc0733}
                                alt="Nos Objectifs"
                                className="img-fluid rounded shadow"
                                style={{ maxHeight: "300px", objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine">
                    <div className="row featurette align-items-center">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading fw-bold lh-1 ">
                                Nos Valeurs
                            </h2>
                            <p className="lead">
                                Le respect, la persévérance, l’honnêteté, l’entraide et l’esprit d’équipe sont des valeurs que nous prônons dans l’optique de permettre aux élèves de les accroître en vivant des expériences positives et mémorables.
                            </p>
                        </div>
                        <div className="col-md-5 d-flex align-items-center justify-content-center">
                            <img
                                src={dsc0733}
                                alt="Nos Valeurs"
                                className="img-fluid rounded shadow"
                                style={{ maxHeight: "300px", objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <hr className="featurette-divider" />
            <h2 className="text-center my-5" id="about">Qui sommes-nous ?</h2>
            <div className="container my-5">
                <div className="container my-5">
                    <TeamSlideshow />
                </div>
            </div>
        </>
    );
}

// Remplace la grille de cards par le slideshow
// Remplace la grille de cards par le slideshow

export default Home;

