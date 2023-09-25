const key = 'rhll5ZF88VHWqBx6petKbfMn1zljYL6o';


async function getData(city){
   
    try {
        const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        const query = `?apikey=${key}&q=${city}`;
        const apiUrl = baseUrl + query;
        const response = await fetch(apiUrl);
        const data = await response.json();
    
        console.log(data[0].Type)
    } catch (error) {
        alert("Something went wrong, Check your internet connection and try again")
    }
}

getData("Tema");