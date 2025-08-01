const apiKey = "ad7c0239d0c291b3be5fc5101e058787"; // Мына жерге өзүңдүн ачкычты кой

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");
  const errorP = document.getElementById("error");
  errorP.textContent = "";
  resultDiv.classList.add("hidden");

  if (!city) {
    errorP.textContent = "Шаарды жазыңыз!";
    return;
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kg`
    );
    if (!res.ok) {
      throw new Error("Шаар табылган жок");
    }
    const data = await res.json();
    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temp").textContent = `${data.main.temp}°C`;
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    resultDiv.classList.remove("hidden");
  } catch (err) {
    errorP.textContent = err.message;
  }
}
