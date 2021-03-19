//HTML CACHED ELEMENTS
const input = document.querySelector("#user-input");
const submit = document.querySelector("#submit")
const weatherContainer = document.querySelector("#weather-container")
    //FUNCTION TO GET THE INFO FROM THE API

const addTempDom = (data) => {
    console.log(data);
    const weatherDiv = `<div>${data.name}</div>
    </div>The Current Weather: ${data.weather[0].description}</div> 
    <div>It is currently: ${data.main.temp}</div> 
    <div>With a High of ${data.main.temp_max} and a low of ${data.main.temp_min}
        </div>`
    weatherContainer.innerHTML = weatherDiv;
}

const weatherTime = async() => {

    const apiKey = ",us&units=imperial&appid=39da52614d4a14d697506d6ed598e957";
    const zipCode = input.value;
    const root = "https://api.openweathermap.org/data/2.5/weather?zip=";
    try {
        const response = await fetch(`${root}${zipCode}${apiKey}`);
        const data = await response.json();
        // addWeatherDom(data);
        addTempDom(data);
    } catch (err) {
        console.log(err);
    }
}
submit.addEventListener("click", weatherTime);