
import { 
  Music, 
  Heart, 
  Star, 
  Target
} from "lucide-react";
import { useState } from "react";

// Petits utilitaires couleur
const gradients: Record<string, [string, string]> = {
  orangeRed: ["#FFEDD5", "#FEE2E2"],        // orange-100 -> red-100
  redPink: ["#FEE2E2", "#FCE7F3"],          // red-100 -> pink-100
  purpleIndigo: ["#E9D5FF", "#E0E7FF"],     // purple-100 -> indigo-100
  greenTeal: ["#DCFCE7", "#CCFBF1"],        // green-100 -> teal-100
  yellowOrange: ["#FEF9C3", "#FFEDD5"],     // yellow-100 -> orange-100
};

const toGradient = (colors: [string, string]) => `linear-gradient(90deg, ${colors[0]}, ${colors[1]})`;

export default function GrilleTarifaire() {
  // Pour gérer le hover des lignes "Danse"
  const [hoverRow, setHoverRow] = useState<number | null>(null);

  const danseDisciplines = [
    { name: "Hip-Hop", price: "45.000 FCFA", gradient: gradients.orangeRed },
    { name: "Krump", price: "40.000 FCFA", gradient: gradients.redPink },
    { name: "Danse Contemporaine", price: "60.000 FCFA", gradient: gradients.purpleIndigo },
    { name: "Ikoku Fitness", price: "35.000 FCFA", duration: "1h", gradient: gradients.greenTeal },
    { name: "Afro Dance", price: "45.000 FCFA", gradient: gradients.yellowOrange }
  ];

  const danseTherapieForfaits = [
    { name: "Solo (Enfants)", price: "65.000 FCFA", icon: "👶" },
    { name: "Solo (Adultes)", price: "80.000 FCFA", icon: "👤" },
    { name: "Duo", price: "100.000 FCFA", icon: "👥" },
    { name: "Trio", price: "150.000 FCFA", icon: "👥👤" },
    { name: "Groupe (+5 pers.)", price: "200.000 FCFA", sessions: "1 séance", duration: "1h", icon: "👥👥" }
  ];

  return (
    <div style={{ background: "linear-gradient(135deg, #FAF5FF, #EFF6FF, #FDF2F8)" }}>
      <div className="container-xxl py-5 px-3">

        {/* En-tête */}
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5 mb-3" style={{
            background: "linear-gradient(90deg,#7C3AED,#2563EB,#DB2777)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "#D20F45"
          }}>
            Grilles Tarifaires
          </h1>
          <p className="lead text-muted">
            Découvrez nos offres complètes pour la gymnastique, la danse et la thérapie par le mouvement
          </p>
        </div>

        {/* GYMNASTIQUE */}
        <section className="mb-5">
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
            <div className="px-4 py-3" style={{ background: "#D20F45" }}>
              <div className="d-flex align-items-center gap-3">
                <div className="rounded-3 p-2" style={{ background: "rgba(255,255,255,0.2)" }}>
                
                </div>
                <div>
                  <h2 className="h3 fw-bold mb-0 text-white">Gymnastique</h2>
                  
                </div>
              </div>
            </div>

            <div className="p-4">
              {/* Inscription */}
              <div className="rounded-4 p-3 mb-4 border" style={{ 
                background: "linear-gradient(90deg,#F5F3FF,#EFF6FF)", 
                borderColor: "#DDD6FE" 
              }}>
                <div className="d-flex align-items-center gap-2 mb-1">
                  <Star size={18} color="#D20F45" />
                  <span className="fw-semibold" style={{ color: "#D20F45" }}>Inscription annuelle</span>
                </div>
                <div className="fs-3 fw-bold" style={{ color: "#D20F45" }}>10.000 FCFA</div>
              </div>

              {/* Tableau */}
              <div className="rounded-4 border overflow-auto">
                <table className="table align-middle mb-0">
                  <thead>
                    <tr style={{ background: "linear-gradient(90deg,#F9FAFB,#F3F4F6)" }}>
                      <th className="text-secondary fw-semibold">Options</th>
                      <th className="text-secondary fw-semibold">Séances/semaine</th>
                      <th className="text-secondary fw-semibold">Durée</th>
                      <th className="text-secondary fw-semibold">Prix mensuel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* GYMNASTIQUE */}
                    <tr className="table-row">
                      <td rowSpan={4} className="fw-medium" style={{ color: "#D20F45", verticalAlign: "middle" }}>
                        <span className="d-inline-flex align-items-center gap-2">
                          
                          GYMNASTIQUE
                        </span>
                      </td>
                      <td>2 séances</td>
                      <td>2h</td>
                      <td className="fw-bold" style={{ color: "#16A34A" }}>45.000 FCFA</td>
                    </tr>
                    <tr>
                      <td>3 séances</td>
                      <td>2h</td>
                      <td className="fw-bold" style={{ color: "#16A34A" }}>55.000 FCFA</td>
                    </tr>
                    <tr>
                      <td>4 séances</td>
                      <td>2h</td>
                      <td className="fw-bold" style={{ color: "#16A34A" }}>65.000 FCFA</td>
                    </tr>
                    <tr>
                      <td>Week-end</td>
                      <td>3h</td>
                      <td className="fw-bold" style={{ color: "#16A34A" }}>60.000 FCFA</td>
                    </tr>

                    {/* GYMNASTIQUE & DANSE */}
                    <tr>
                      <td rowSpan={4} className="fw-medium" style={{ color: "#D20F45", verticalAlign: "middle" }}>
                        <span className="d-inline-flex align-items-center gap-2">
                          
                          GYMNASTIQUE & DANSE
                        </span>
                      </td>
                      <td>2 séances</td>
                      <td>2h</td>
                      <td className="fw-bold" style={{ color: "#16A34A" }}>50.000 FCFA</td>
                    </tr>
                    <tr>
                      <td>3 séances</td>
                      <td>2h</td>
                      <td className="fw-bold" style={{ color: "#16A34A" }}>60.000 FCFA</td>
                    </tr>
                    <tr>
                      <td>4 séances</td>
                      <td>2h</td>
                      <td className="fw-bold" style={{ color: "#16A34A" }}>75.000 FCFA</td>
                    </tr>
                    <tr>
                      <td>Week-end</td>
                      <td>3h</td>
                      <td className="fw-bold" style={{ color: "#16A34A" }}>65.000 FCFA</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Programme spécial */}
              <div className="rounded-4 mt-4 p-3 border" style={{
                background: "linear-gradient(90deg,#FEF3C7,#FFEDD5)",
                borderLeft: "4px solid #FB923C",
                borderColor: "#FED7AA"
              }}>
                <div className="d-flex align-items-center gap-2 mb-1">
                  <Target size={20} color="#EA580C" />
                  <span className="fw-bold" style={{ color: "#9A3412" }}>
                    Programme Spécial BEPC & BAC
                  </span>
                </div>
                <div className="fs-4 fw-bold" style={{ color: "#DC2626" }}>100.000 FCFA</div>
                <div className="text-muted">Trimestre intensif (Mars, Avril, Mai)</div>
              </div>
            </div>
          </div>
        </section>

        {/* DANSE */}
        <section className="mb-5">
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
            <div className="px-4 py-3" style={{ background: "#EFBF04" }}>
              <div className="d-flex align-items-center gap-3">
                <div className="rounded-3 p-2" style={{ background: "rgba(255,255,255,0.2)" }}>
                  <Music size={28} color="#fff" />
                </div>
                <div>
                  <h2 className="h3 fw-bold mb-0 text-white">Danse</h2>
                </div>
              </div>
            </div>

            <div className="p-4">
              {/* Inscription */}
              <div className="rounded-4 p-3 mb-4 border" style={{ 
                background: "linear-gradient(90deg,#FDF2F8,#F3E8FF)", 
                borderColor: "#FBCFE8" 
              }}>
                <div className="d-flex align-items-center gap-2 mb-1">
                  <Star size={18} color="#DB2777" />
                  <span className="fw-semibold" style={{ color: "#9D174D" }}>Inscription annuelle</span>
                </div>
                <div className="fs-3 fw-bold" style={{ color: "#BE185D" }}>10.000 FCFA</div>
              </div>

              {/* Tableau */}
              <div className="rounded-4 border overflow-auto">
                <table className="table align-middle mb-0">
                  <thead>
                    <tr style={{ background: "linear-gradient(90deg,#F9FAFB,#F3F4F6)" }}>
                      <th className="text-secondary fw-semibold">Discipline</th>
                      <th className="text-secondary fw-semibold">Séances/semaine</th>
                      <th className="text-secondary fw-semibold">Durée</th>
                      <th className="text-secondary fw-semibold">Prix mensuel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {danseDisciplines.map((d, i) => {
                      const hovered = hoverRow === i;
                      return (
                        <tr
                          key={i}
                          onMouseEnter={() => setHoverRow(i)}
                          onMouseLeave={() => setHoverRow(null)}
                          style={{
                            background: hovered ? toGradient(d.gradient) : undefined,
                            transition: "background 200ms ease"
                          }}
                        >
                          <td className="fw-medium">
                            <span className="d-inline-flex align-items-center gap-2">
                              <Music size={16} color="#DB2777" />
                              {d.name}
                            </span>
                          </td>
                          <td>2 séances</td>
                          <td>{d.duration || "2h"}</td>
                          <td className="fw-bold" style={{ color: "#16A34A" }}>{d.price}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* DANSE THÉRAPIE */}
        <section className="mb-5">
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
            <div className="px-4 py-3" style={{ background: "#EFBF04" }}>
              <div className="d-flex align-items-center gap-3">
                <div className="rounded-3 p-2" style={{ background: "rgba(255,255,255,0.2)" }}>
                  <Heart size={28} color="#fff" />
                </div>
                <div>
                  <h2 className="h3 fw-bold mb-0 text-white">Danse Thérapie</h2>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="rounded-4 border overflow-auto">
                <table className="table align-middle mb-0">
                  <thead>
                    <tr style={{ background: "linear-gradient(90deg,#F9FAFB,#F3F4F6)" }}>
                      <th className="text-secondary fw-semibold">Forfait</th>
                      <th className="text-secondary fw-semibold">Séances/semaine</th>
                      <th className="text-secondary fw-semibold">Durée</th>
                      <th className="text-secondary fw-semibold">Prix mensuel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {danseTherapieForfaits.map((f, i) => (
                      <tr key={i} style={{ transition: "background 200ms ease" }}
                        onMouseEnter={(e) => e.currentTarget.style.background = "#ECFDF5"}
                        onMouseLeave={(e) => e.currentTarget.style.background = ""}>
                        <td className="fw-medium">
                          <span className="d-inline-flex align-items-center gap-2">
                            <span style={{ fontSize: 18 }}>{f.icon}</span>
                            {f.name}
                          </span>
                        </td>
                        <td>{f.sessions || "2 séances"}</td>
                        <td>{f.duration || "45 min"}</td>
                        <td className="fw-bold" style={{ color: "#16A34A" }}>{f.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        
      </div>
    </div>
  );
}
