//HTML CACHED ELEMENTS
const input = document.querySelector("#user-input");
const submit = document.querySelector("#submit")
const weatherContainer = document.querySelector("#weather-container")
    //FUNCTION TO GET THE INFO FROM THE API
const addWeatherDom = (data) => {
    const weatherDiv data.map((weather, ) => {
        return `<div>The Current Weather is $`
    });
}


const weatherTime = async() => {

    const apiKey = "39da52614d4a14d697506d6ed598e957";
    const zipCode = input.value;
    const root = "api.openweathermap.org/data/2.5/weather?";
    try {
        const response = await fetch(`${root}zipCode${apiKey}`);
        const data = await response.json();

    }
}
submit.addEventListener("click", weatherTime);