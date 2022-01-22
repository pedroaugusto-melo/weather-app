import './City.css';

export default function City(props) {
    const { city } = props;

    const cityHeaderStyle = {
        backgroundImage: `url(${city.image})`
    };

    return (
        <div className="City">
            <div className='CityHeader' style={cityHeaderStyle}>
                
            </div>

            <div className='CityBody'>
                <div className='Country'>
                    <h3>{city.name},</h3>
                    <h4>{city.country}</h4>
                </div>

                <h3 className='Temp'>{city.temp} °C</h3>

                <div className='Weather'>
                    <img src={city.icon} alt='Weather Icon'/>
                    <h3>{city.weather}</h3>
                </div>
            </div>
        </div>
    );
}