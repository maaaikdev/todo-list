import styles from './WeatherMainInfo.module.css'

export default function WeatherMainInfo({weather}) {
    return(
        <div className={styles.mainInfo} >
            <div className={styles.city}>{weather?.location.name}</div>
            <div className={styles.country}>{weather?.location.country}</div>
            <div className={styles.row}>
                <div>
                    <img 
                        src={`https:${weather?.current.condition.icon}`} 
                        width="128"
                        alt={weather?.current.condition.text}
                    />
                </div>
                <div className={styles.weatherConditions}>
                    <div className={styles.condition}>{weather?.current.condition.text}</div>
                    <div className={styles.current}>{weather?.current.temp_c}º</div>
                </div>
            </div>
            <div>
                {/* despues del primer 2d es longitud y despues del 3d es latitud siempre contando despues del .(punto) 14 caracteres*/}
                <iframe 
                    title="mapa"
                    src={`https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d200795.87950191222!2d${weather?.location.lon}58!3d${weather?.location.lat}!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d36.704605!2d-4.459998!5e0!3m2!1ses!2sco!4v1695239882151!5m2!1ses!2sco`} 
                    width="100%" 
                    height="450" 
                    style={{border:0}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}