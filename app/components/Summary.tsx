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
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Enter city"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          Get Weather
        </button>

        {data && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800">{data.sys.country} {data.name}</h2>
            <p className="text-lg text-gray-600">Temperature: {data.main.temp}°C</p>
            <p className="text-lg text-gray-600 capitalize">Weather: {data.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Summary;