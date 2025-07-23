
import "../styles/home.css"



function Home() {
    return (
        <div className="home">
        <div className="hero">
            <h1><strong>Zéro</strong> à <strong>Héro</strong></h1>
        </div>        
        <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="./src/assets/DSC_0733.jpg" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">presentattion 1</h5>
                            <p className="card-text">This is a short description.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">
                            First featurette heading.{" "}
                            <span className="text-body-secondary">It’ll blow your mind.</span>
                        </h2>
                        
              <p></p>
              <p></p>

                        <p className="lead">
                            ZERO A HERO est une école de Danse et de Gymnastique à Libreville au Gabon qui propose des enseignements de qualité pour tous âges et tous les niveaux. Des plus jeunes aux adultes, nous proposons une formation en Gymnastique et danse, dans un environnement dynamique et communautaire.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <svg
                            aria-label="Placeholder: someImage"
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500"
                            height="500"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            preserveAspectRatio="xMidYMid slice"
                        >
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
                            <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em" textAnchor="middle">
                                500x500
                            </text>
                        </svg>
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1">
                            Oh yeah, it’s that good.{" "}
                            <span className="text-body-secondary">See for yourself.</span>
                        </h2>
                        <p className="lead">
                            Nous mettons tout en œuvre pour développer les compétences techniques, la force, la souplesse, la confiance et l’estime de soi de chaque élève. Nous croyons que la Gymnastique et la danse sont des activités ludiques et enrichissantes qui favorisent le développement physique, mental et émotionnel de tous un chacun.
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <svg
                            aria-label="Placeholder: 500x500"
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500"
                            height="500"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            preserveAspectRatio="xMidYMid slice"
                        >
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
                            <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em" textAnchor="middle">
                                500x500
                            </text>
                        </svg>
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">
                            And lastly, this one. <span className="text-body-secondary">Checkmate.</span>
                        </h2>
                        <p className="lead">
Le respect, la persévérance, l’honnêteté, l’entraide et l’esprit d’équipe sont des valeurs que nous prônons dans l’optique de permettre aux élèves de les accroître en vivant des expériences positives et mémorables.</p>
              <p>Nous sommes ravis de vous accueillir à ZERO A HERO et de vous offrir une expérience inoubliable dans cet univers qui est le nôtre. Explorer notre site web pour en savoir plus sur nos programmes, nos installations et nos réalisations. Rejoignez-nous et faites partie de la grande famille des Héros, où la croissance et l’innovation sont notre partage.                        </p>
                    </div>
                    <div className="col-md-5">
                        <svg
                            aria-label="Placeholder: 500x500"
                            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500"
                            height="500"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            preserveAspectRatio="xMidYMid slice"
                        >
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
                            <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em" textAnchor="middle">
                                500x500
                            </text>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home