import { useState } from 'react';
import { fetchWeatherData } from '../services/weatherService';
import { setCity, setWeatherData } from '../redux/slices/weatherSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Summary = () => {
  const dispatch = useDispatch();
  const { city, data } = useSelector((state: RootState) => state.weather);


  const [inputCity, setInputCity] = useState('');
  const handleSearch = async () => {
    try {
      dispatch(setCity(inputCity));
      const weatherData = await fetchWeatherData(inputCity);
      dispatch(setWeatherData(weatherData));
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  return <div>

    <input
      type="text"
      value={inputCity}
      onChange={(e) => setInputCity(e.target.value)}
      placeholder="Enter city"
    />
    <button onClick={handleSearch}>Get Weather</button>

    {data && (
      <div>
        <h2>{data.name}</h2>
        <p>Temperature: {data.main.temp}°C</p>
        <p>Weather: {data.weather[0].description}</p>
      </div>
    )}
  </div>

}

export default Summary;
