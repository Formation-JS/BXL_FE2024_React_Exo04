import { useId, useState } from "react";

const Calculatrice = () => {

    //! Le state des élément du formulaire
    const [nb1, setNb1] = useState('');
    const [nb2, setNb2] = useState('');
    const [op, setOp] = useState('');
    const [result, setResult] = useState('');

    //! Génération d'un identifiant pour l'unicité des id des element du formulaire
    const formId = useId();
    // formId -> :r1:

    //! Rendu du composant
    return (
        <form>
            <div>
                <label htmlFor={formId+'-nb1'}>Nombre 1 : </label>
                <input id={formId+'-nb1'} type="text" required
                    value={nb1}
                    onChange={e => setNb1(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor={formId+'-op'}>Operation : </label>
                <select id={formId+'-op'} required
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
                <label htmlFor={formId+'-nb2'}>Nombre 2 : </label>
                <input id={formId+'-nb2'} type="text" required
                    value={nb2}
                    onChange={e => setNb2(e.target.value)}
                />
            </div>
            <div>
                <button type="submit">Calculer</button>
            </div>
            <div>
                <label htmlFor={formId+'-res'}>Resultat : </label>
                <input id={formId+'-res'} type="text"
                    value={result} readOnly
                />
            </div>
        </form>
    );
};

export default Calculatrice;