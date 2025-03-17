import { useState, useEffect } from "react";

const WeatherPage = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch("/api/weather");
                const data = await response.json();
                setWeather(data.current_condition[0]); // Ambil kondisi cuaca saat ini
                setLoading(false);
            } catch (error) {
                console.error("Error fetching weather:", error);
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Cuaca di Malang</h1>
            {weather ? (
                <div>
                    <p><strong>Suhu:</strong> {weather.temp_C}°C</p>
                    <p><strong>Cuaca:</strong> {weather.weatherDesc[0].value}</p>
                    <p><strong>Kecepatan Angin:</strong> {weather.windspeedKmph} km/h</p>
                </div>
            ) : (
                <p>Gagal mengambil data cuaca.</p>
            )}
        </div>
    );
};

export default WeatherPage;
