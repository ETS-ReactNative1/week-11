import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);
    
    const history = useHistory();
    
    const ngoID = localStorage.getItem('ngoID');
    const ngoName = localStorage.getItem('ngoName');
    
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ngoID,
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ngoID]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ngoID,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente.');
        }
    };

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, {ngoName}</span>

                <Link className='button' to='/incidents/new'>Cadastrar novo caso</Link>
                <button onClick={handleLogout} type='button'>
                    <FiPower size={18} color='#e02041' />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL' }).format(incident.value)}</p>

                        <button onClick={ () => handleDeleteIncident(incident.id) } type='button'>
                            <FiTrash2 size={20} color='#a8a8b3' />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
