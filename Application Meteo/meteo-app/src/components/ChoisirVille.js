import React, { useState } from 'react';

function ChoisirVille({setCoordinatesByInput, getUserLocation, setLoading}) {
    const [town, setTown] = useState('');

    function handleInput(town) {
        setLoading('', true);
        setCoordinatesByInput(town);
        setTown('');
    }

    function handleMaPosition() {
        setLoading('', true);
        getUserLocation();
    }

    return(
        <div className='choisirVille'>
            <input
                value={town}
                onChange={e => {setTown(e.target.value)}}
                placeholder="Cherchez une ville">
            </input>
            <button
                className='btnGo'
                onClick={() => handleInput(town)}>
                GO
            </button>
            <button
                className='btnFindMe'
                onClick={() => handleMaPosition()}>
                Ma position
            </button>
        </div>
    )
}

export default ChoisirVille;