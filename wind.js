
class Wind {
    constructor(latitude, longitude, ville) {

        this. city = ville
        this.lat = latitude
        this.long = longitude
        this.url = ''

        this.init()
    }

    init() {

        this.buildUrl()
        this.getWindData()
        
        console.log(this.long, this.lat, this.city)
    }

    buildUrl() {
        const base = 'https://api.open-meteo.com/v1/forecast'
        const requiredLatitude = 'latitude=' + this.lat
        const requiredLongitude = 'longitude=' + this.long

        const params = ['temperature_2m', 'wind_speed_10m']
        const paramsStringList = params.join(',')

        this.url = `${base}?${requiredLatitude}&${requiredLongitude}&current=${paramsStringList}`
    }

    /*getWindData() {
        fetch('https://api.open-meteo.com/v1/forecast?latitude=4.0483&longitude=9.7043&current=temperature_2m,wind_speed_10m&timezone=Africa%2FCairo&forecast_days=1')
            .then(response => response.json())
            .then((data) => {
                
                
                this.afficherMeteo(data);
                console.log(this.ville)
            }

            )
    }*/

    getWindData() {
        fetch(this.url)
            .then(response => response.json())
            .then((data) => {
                const ville = this.city
                console.log(ville, 'ville')
               this. afficherMeteo(data, ville);
            })
    }
    afficherMeteo(data, ville) {
        console.log(data)
        const cityDiv = document.getElementById(ville);
        if (cityDiv) {
            const temperature = data.current.temperature_2m;
            const windSpeed = data.current.wind_speed_10m
            ;
            cityDiv.innerHTML = `<p>Météo pour ${ville}</p><p>Temp: ${temperature}°C</p><p>Vent: ${windSpeed} m/s</p>`;
        } else {
            console.error('Div pour la ville non trouvée');
        }
    }



}

export { Wind }