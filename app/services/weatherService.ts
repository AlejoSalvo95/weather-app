const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export const fetchWeatherData = async (city: string) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

  if (!response.ok) {
    throw new Error('Error al obtener los datos del clima');
  }

  return response.json();
};
