const apiKey = "a8ac7c6d35fc42259a482935250105";

function getWeather() {
  const location = document.getElementById("locationInput").value;
  if (!location) {
    alert("Please enter a location.");
    return;
  }

  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}&aqi=yes`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Location not found");
      return response.json();
    })
    .then(data => {
      document.querySelector(".weather-widgets").classList.remove("hidden");

      document.getElementById("locationName").textContent =
        `${data.location.name}, ${data.location.country}`;
      document.getElementById("temperature").textContent =
        `${data.current.temp_c} °C`;
      document.getElementById("condition").textContent =
        data.current.condition.text;
      document.getElementById("humidity").textContent =
        `${data.current.humidity} %`;
      document.getElementById("wind").textContent =
        `${data.current.wind_kph} km/h`;
    })
    .catch(error => {
      document.querySelector(".weather-widgets").classList.add("hidden");
      alert("Error: " + error.message);
    });
}

  