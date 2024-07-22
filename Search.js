

import { Wind } from "./wind.js"


class Search {



    constructor() {

       /*var newName = document.getElementById("cityInput");
        var cityName = document.getElementById("cityName");
        cityName.innerHTML = "--" + newName.value + "--";*/

         this.input = document.querySelector('.js-search-input')
        this.form = document.querySelector('.js-search-form')
        this.init()
    }

    init() {

        this.getCities()
        this.watcherInput()
        
    }
    watcherInput() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault()
            this.getLatelong()
        })

    }
  
    getLatelong() {
        const name = this.input.value
        const cityData = this.getCitiesData(name)

        if (cityData) {

            const lon = cityData.lng
            const lat = cityData.lat
            const ville = cityData.city
            console.log(ville + ' a pour longitude ' + lon)
            console.log(ville + ' a pour lattitude ' + lat)
            new Wind(lat, lon, ville)


        }
        else {
            console.log('choisir ville')
        }


    }

    getCities() {
        
        fetch('./data/cameroun-cities.json')
            .then(Response => Response.json())
            .then(data => {
                this.cities = data
                console.log( 'getcities')
                

            })

    }


    getCitiesData(cityName) {
        const cityData = this.cities.find(
            (cityobject) => cityobject.city === cityName)
        console.log( cityData,'cityData')
        console.log( cityData.city,'cityData')
        console.log( 'cityData')

        return cityData
        
    }


    
    }









export { Search }


