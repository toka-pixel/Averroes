
// Define an async function
export async function getWeather() {
  const key = "64ac30a4391b61da1211ed68dd21e524";
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${key}`
    );
    // Await for the json parsing
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
