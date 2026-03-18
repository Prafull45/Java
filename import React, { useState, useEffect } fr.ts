import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [drugs, setDrugs] = useState([]);
    const [newDrug, setNewDrug] = useState({ name: '', quantity: 0, expiry_date: '', supplier: '' });

    useEffect(() => {
        axios.get('http://localhost:3000/drugs')
            .then(response => setDrugs(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleSubmit = () => {
        axios.post('http://localhost:3000/drugs', newDrug)
            .then(response => {
                setDrugs([...drugs, response.data]);
                setNewDrug({ name: '', quantity: 0, expiry_date: '', supplier: '' });
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Drug Inventory</h1>
            <input type="text" value={newDrug.name} onChange={(e) => setNewDrug({ ...newDrug, name: e.target.value })} placeholder="Drug Name" />
            <input type="number" value={newDrug.quantity} onChange={(e) => setNewDrug({ ...newDrug, quantity: e.target.value })} placeholder="Quantity" />
            <input type="date" value={newDrug.expiry_date} onChange={(e) => setNewDrug({ ...newDrug, expiry_date: e.target.value })} placeholder="Expiry Date" />
            <input type="text" value={newDrug.supplier} onChange={(e) => setNewDrug({ ...newDrug, supplier: e.target.value })} placeholder="Supplier" />
            <button onClick={handleSubmit}>Add Drug</button>
            <ul>
                {drugs.map(drug => (
                    <li key={drug.id}>{drug.name} - {drug.quantity}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
