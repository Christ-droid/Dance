import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form() {
  type FormDataKeys = 'nom' | 'prenom' | 'email' | 'telephone' | 'niveau' | 'horaires' | 'commentaires';
  type FormDataType = Record<FormDataKeys, string>;

  const [formData, setFormData] = useState<FormDataType>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    niveau: '',
    horaires: '',
    commentaires: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Données récupérées :", formData);
    // ici tu peux envoyer formData à une API
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ maxWidth: '900px', width: '100%' }}>
        <div className="card-header bg-primary text-white text-center">
          <h2 className="mb-0">Formulaire d'adhésion à l'école de Danse</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Champs texte */}
            {([
              { label: 'Nom', name: 'nom' },
              { label: 'Prénom', name: 'prenom' },
              { label: 'Email', name: 'email', type: 'email',placeholder:'name@gmail.com' },
              { label: 'Téléphone', name: 'telephone', type: 'tel' }
            ] as { label: string; name: FormDataKeys; type?: string }[]).map(({ label, name, type = 'text' }) => (
              <div className="mb-3" key={name}>
                <label className="form-label">{label}</label>
                <input
                  type={type}
                  className="form-control"
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}

                />
              </div>
            ))}

            {/* Sélecteur de niveau */}
            <div className="mb-3">
              <label className="form-label">Niveau de danse</label>
              <select
                className="form-select"
                name="niveau"
                value={formData.niveau}
                onChange={handleChange}
              >
                <option value="">-- Sélectionner --</option>
                <option value="Débutant">Débutant</option>
                <option value="Intermédiaire">Intermédiaire</option>
                <option value="Avancé">Avancé</option>
              </select>
            </div>

            {/* Horaires */}
            <div className="mb-3">
              <label className="form-label">Horaire souhaité</label>
              <select
                className="form-select"
                name="time"
                value={formData.horaires}
                onChange={handleChange}
              >
                <option value="">-- Sélectionner --</option>
                <option value="10h">10h</option>
                <option value="11H">11H</option>
                <option value="15h30">15h30</option>
                <option value="17H">17H</option>
                <option value="20h30">20h30</option>
              </select>
            </div>

            {/* Commentaires */}
            <div className="mb-3">
              <label className="form-label">Commentaires</label>
              <textarea
                className="form-control"
                name="commentaires"
                rows={4}
                placeholder="Vos préférences…"
                value={formData.commentaires}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary px-4">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
