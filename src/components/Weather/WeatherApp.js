import { useState, useEffect } from 'react'
import WeatherForm from './WeatherForm'
import WeatherMainInfo from './WeatherMainInfo';

import styles from './WeatherApp.module.css'
import Loading from './Loading';

export default function WeatherApp() {

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        //Si el array esta vacio cada vez que se renderize va actualizar la info
        // Si le paso una variable en el array es indicando que solo quiero que esa se renderize;

        loadInfo(); //Cargar la info por defecto parecido a en ngOinit
    }, [])

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name} ?? ""`;
    }, [weather])

    async function loadInfo(city = 'london'){
        try {
            const request = await fetch(
                `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
            );
            const json = await request.json();

            setTimeout(() => {
                setWeather(json)
              }, 2000)            

            console.log(json)
        } catch (error) {
            console.log(error)
        }
    }
    
    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city);
    }

    return (
       <div className={styles.weatherContainer}>
            <WeatherForm onChangeCity={handleChangeCity} />
            {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
            
       </div>
    )
}