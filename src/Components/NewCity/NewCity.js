import { useState } from 'react';
import './NewCity.css';

export default function NewSearch(props) {
    const { addNewCity } = props;

    const [ cityName, setCityName ] = useState('');

    const handleCityNameChange = ({ target }) => {
        setCityName(target.value);
    };

    const handleAddNewCity = () => {
        addNewCity(cityName);
        setCityName('');
    };

    return (
        <div className='NewSearch'>
            <div className='SearchHeader'>
                <h2>Search New <br /> City Weather</h2>
            </div>

            <div className='SearchBody'>
                <input 
                    type="text" 
                    value={cityName} 
                    placeholder='Name of the city here'
                    onChange={handleCityNameChange}
                    required />

                <button onClick={handleAddNewCity}>Add City</button>
            </div>
        </div>
    );
}