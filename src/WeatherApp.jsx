import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import {useState} from "react"
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState ({  //UI me change lane ke liye state vari
        city : "Wonderland",
        temp :25.05, //inisalization weather info 
        tempMin : 25.05,
        tempMax : 25.05,
        humidity : 47,
       feels_like : 24.84,
        weather : "haze",
    });

    let updateInfo = (newInfo) => { //rerendring
        setWeatherInfo(newInfo); //updateInfo ek result obj. lega orr setWeatherInfo-->WEATHERInfo me result ko set kar dega 
    }

    return (
       <div className="border-[0.1px] rounded-2xl bg-purple-300 p-11 border-black font-serif"> 
        <p></p>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info= {weatherInfo}/>
       </div>
    )
}