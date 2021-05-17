//HTML CACHED ELEMENTS

const input = document.querySelector("#user-input");
const submit = document.querySelector("#submit")
const weatherContainer = document.querySelector("#weather-container")

const addTempDom = (data) => {
    console.log(data);
    const weatherDiv = `<div #city>${data.name}</div>
    </div>The Current Weather: ${data.weather[0].description}</div> 
    <div>It is currently:</div>
    <div id="temp"> ${data.main.temp}</div> 
    <div>With a High of ${data.main.temp_max} and a low of ${data.main.temp_min}
    </div>`
        // <div>Sunrise: ${moment(data.sys.sunrise)} | Sunset: ${moment(data.sys.sunset)}`

    weatherContainer.innerHTML = weatherDiv;
}

//FUNCTION TO GET THE INFO FROM THE API
const weatherTime = async() => {

    const preKey = ",us&units=imperial&appid=";
    const apiKey = process.env.SECRET_KEY
    const zipCode = input.value;
    const root = "https://api.openweathermap.org/data/2.5/weather?zip=";
    try {
        const response = await fetch(`${root}${zipCode}${preKey}${apiKey}`);
        const data = await response.json();
        // addWeatherDom(data);
        addTempDom(data);
        //create an if else statement to determine the color of the temperature reading based on the temperature data given from the API
        if (data.main.temp < 40) {
            temp.style.color = "blue";
        } else if (data.main.temp > 90) {
            temp.style.color = "red";
        }
    } catch (err) {
        console.log(err);
    }
}



submit.addEventListener("click", weatherTime);