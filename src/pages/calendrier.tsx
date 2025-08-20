import React from "react";
import { 
  Zap, 
  Music, 
  Heart, 
  Clock, 
  Star, 
  Trophy,
  Sparkles,
  Target
} from "lucide-react";
import clsx from "clsx";
import "../styles/globale.css"



export default function GrilleTarifaire() {
  const danseDisciplines = [
    { name: "Hip-Hop", price: "45.000 FCFA", color: "from-orange-100 to-red-100" },
    { name: "Krump", price: "40.000 FCFA", color: "from-red-100 to-pink-100" },
    { name: "Danse Contemporaine", price: "60.000 FCFA", color: "from-purple-100 to-indigo-100" },
    { name: "Ikoku Fitness", price: "35.000 FCFA", color: "from-green-100 to-teal-100", duration: "1h" },
    { name: "Afro Dance", price: "45.000 FCFA", color: "from-yellow-100 to-orange-100" }
  ];

  const danseTherapieForfaits = [
    { name: "Solo (Enfants)", price: "65.000 FCFA", icon: "👶" },
    { name: "Solo (Adultes)", price: "80.000 FCFA", icon: "👤" },
    { name: "Duo", price: "100.000 FCFA", icon: "👥" },
    { name: "Trio", price: "150.000 FCFA", icon: "👥👤" },
    { name: "Groupe (+5 pers.)", price: "200.000 FCFA", sessions: "1 séance", duration: "1h", icon: "👥👥" }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* En-tête principal */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Grilles Tarifaires
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos offres complètes pour la gymnastique, la danse et la thérapie par le mouvement
          </p>
        </div>

        {/* Gymnastique */}
        <section>
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Gymnastique</h2>
                  <p className="text-purple-100">Excellence et performance</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Inscription */}
              <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-200">
                <div className="flex items-center gap-3 mb-2">
                  <Star className="h-5 w-5 text-purple-600" />
                  <span className="font-semibold text-purple-800">Inscription annuelle</span>
                </div>
                <p className="text-3xl font-bold text-purple-700">10.000 FCFA</p>
              </div>

              {/* Tableau */}
              <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                      <th className="border-b px-6 py-4 text-left font-semibold text-gray-700">Options</th>
                      <th className="border-b px-6 py-4 text-left font-semibold text-gray-700">Séances/semaine</th>
                      <th className="border-b px-6 py-4 text-left font-semibold text-gray-700">Durée</th>
                      <th className="border-b px-6 py-4 text-left font-semibold text-gray-700">Prix mensuel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* GYMNASTIQUE */}
                    <tr className="hover:bg-purple-50 transition-colors">
                      <td className="border-b px-6 py-4 font-medium text-purple-700" rowSpan={4}>
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4" />
                          GYMNASTIQUE
                        </div>
                      </td>
                      <td className="border-b px-6 py-4">2 séances</td>
                      <td className="border-b px-6 py-4">2h</td>
                      <td className="border-b px-6 py-4 font-bold text-green-600">45.000 FCFA</td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition-colors">
                      <td className="border-b px-6 py-4">3 séances</td>
                      <td className="border-b px-6 py-4">2h</td>
                      <td className="border-b px-6 py-4 font-bold text-green-600">55.000 FCFA</td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition-colors">
                      <td className="border-b px-6 py-4">4 séances</td>
                      <td className="border-b px-6 py-4">2h</td>
                      <td className="border-b px-6 py-4 font-bold text-green-600">65.000 FCFA</td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition-colors">
                      <td className="border-b px-6 py-4">Week-end</td>
                      <td className="border-b px-6 py-4">3h</td>
                      <td className="border-b px-6 py-4 font-bold text-green-600">60.000 FCFA</td>
                    </tr>
                    {/* GYMNASTIQUE & DANSE */}
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="border-b px-6 py-4 font-medium text-blue-700" rowSpan={4}>
                        <div className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4" />
                          GYMNASTIQUE & DANSE
                        </div>
                      </td>
                      <td className="border-b px-6 py-4">2 séances</td>
                      <td className="border-b px-6 py-4">2h</td>
                      <td className="border-b px-6 py-4 font-bold text-green-600">50.000 FCFA</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="border-b px-6 py-4">3 séances</td>
                      <td className="border-b px-6 py-4">2h</td>
                      <td className="border-b px-6 py-4 font-bold text-green-600">60.000 FCFA</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="border-b px-6 py-4">4 séances</td>
                      <td className="border-b px-6 py-4">2h</td>
                      <td className="border-b px-6 py-4 font-bold text-green-600">75.000 FCFA</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4">Week-end</td>
                      <td className="px-6 py-4">3h</td>
                      <td className="px-6 py-4 font-bold text-green-600">65.000 FCFA</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Programme spécial */}
              <div className="mt-8 p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl border-l-4 border-orange-400">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="h-6 w-6 text-orange-600" />
                  <span className="font-bold text-orange-800">Programme Spécial BEPC & BAC</span>
                </div>
                <p className="text-2xl font-bold text-red-600">100.000 FCFA</p>
                <p className="text-orange-700 mt-1">Trimestre intensif (Mars, Avril, Mai)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Danse */}
        <section>
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Music className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Danse</h2>
                  <p className="text-pink-100">Rythme et créativité</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border border-pink-200">
                <div className="flex items-center gap-3 mb-2">
                  <Star className="h-5 w-5 text-pink-600" />
                  <span className="font-semibold text-pink-800">Inscription annuelle</span>
                </div>
                <p className="text-3xl font-bold text-pink-700">10.000 FCFA</p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                      <th className="border-b px-6 py-4 text-left font-semibold text-gray-700">Discipline</th>
                      <th className="border-b px-6 py-4 text-left font-semibold text-gray-700">Séances/semaine</th>
                      <th className="border-b px-6 py-4 text-left font-semibold text-gray-700">Durée</th>
                      <th className="border-b px-6 py-4 text-left font-semibold text-gray-700">Prix mensuel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {danseDisciplines.map((discipline, index) => (
                      <tr
                        key={index}
                        className={clsx(
                          "transition-all duration-300 hover:bg-gradient-to-r",
                          `hover:${discipline.color}`
                        )}
                      >
                        <td className="border-b px-6 py-4 font-medium text-gray-800">
                          <div className="flex items-center gap-2">
                            <Music className="h-4 w-4 text-pink-600" />
                            {discipline.name}
                          </div>
                        </td>
                        <td className="border-b px-6 py-4">2 séances</td>
                        <td className="border-b px-6 py-4">{discipline.duration || "2h"}</td>
                        <td className="border-b px-6 py-4 font-bold text-green-600">{discipline.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Danse Thérapie */}
        <section>
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Danse Thérapie</h2>
                  <p className="text-emerald-100">Bien-être et guérison</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                      <th className="border-b px-6 py-4 text-left font-semibold text-gray-700">Forfait</th>
                      <th className="border-b px-6 py-4 text-left font-semibold text-gray-700">Séances/semaine</th>
                      <th className="border-b px-6 py-4 text-left font-semibold text-gray-700">Durée</th>
                      <th className="border-b px-6 py-4 text-left font-semibold text-gray-700">Prix mensuel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {danseTherapieForfaits.map((forfait, index) => (
                      <tr key={index} className="hover:bg-emerald-50 transition-colors">
                        <td className="border-b px-6 py-4 font-medium text-gray-800">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{forfait.icon}</span>
                            {forfait.name}
                          </div>
                        </td>
                        <td className="border-b px-6 py-4">{forfait.sessions || "2 séances"}</td>
                        <td className="border-b px-6 py-4">{forfait.duration || "45 min"}</td>
                        <td className="border-b px-6 py-4 font-bold text-green-600">{forfait.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Horaires */}
        <section className="text-center">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Horaires d'ouverture</h3>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                08h00 - 20h30
              </p>
              <p className="text-gray-600 mt-2">Tous les jours de la semaine</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
