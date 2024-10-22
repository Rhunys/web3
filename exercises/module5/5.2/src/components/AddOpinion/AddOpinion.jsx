import { useState, useContext } from "react";
import { Context as OpinionsContext } from "/src/contexts/OpinionsContext";

function AddOpinion() {
    const { addOpinion } = useContext(OpinionsContext);
    const [opinion, setOpinion] = useState(''); // State pour l'input

    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        addOpinion(opinion); // Appel de la fonction avec l'opinion saisie
        setOpinion(''); // Réinitialise l'input après ajout
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="opinion"
                    name="opinion"
                    value={opinion}
                    onChange={(e) => setOpinion(e.target.value)} // Met à jour l'état à chaque changement
                />
                <button type="submit">Add Opinion</button>
            </form>
        </div>
    );
}

export default AddOpinion;
