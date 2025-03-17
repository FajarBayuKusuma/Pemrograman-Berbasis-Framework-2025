export default async function handler(req, res) {
    const CITY = "Malang";
    const url = `https://wttr.in/${CITY}?format=j1`;

    try {
        const response = await fetch(url);
        const weatherData = await response.json();

        res.status(200).json(weatherData);
    } catch (error) {
        res.status(500).json({ error: "Gagal mengambil data cuaca" });
    }
}
