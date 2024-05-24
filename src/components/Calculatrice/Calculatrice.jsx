import { useState } from "react";

const Calculatrice = () => {

    // Le state des élément du formulaire
    const [nb1, setNb1] = useState('');
    const [nb2, setNb2] = useState('');
    const [op, setOp] = useState('');
    const [result, setResult] = useState('');

    // Rendu du composant
    return (
        <form>
            <div>
                <label htmlFor="">Nombre 1 : </label>
                <input id="" type="text" required
                    value={nb1}
                    onChange={e => setNb1(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="">Operation : </label>
                <select id="" required
                    value={op}
                    onChange={e => setOp(e.target.value)}
                >
                    <option value='' disabled>Selectionner une opération</option>
                    <option value='plus'>+</option>
                    <option value='minus'>-</option>
                    <option value='mult'>X</option>
                    <option value='div'>/</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Nombre 2 : </label>
                <input id="" type="text" required
                    value={nb2}
                    onChange={e => setNb2(e.target.value)}
                />
            </div>
            <div>
                <button type="submit">Calculer</button>
            </div>
            <div>
                <label htmlFor="">Resultat : </label>
                <input id="" type="text"
                    value={result} readOnly
                />
            </div>
        </form>
    );
};

export default Calculatrice;