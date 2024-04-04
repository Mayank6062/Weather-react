import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function InfoBox({info}) { //information come in the form of props fromweather.jsx
    const HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/497639283/photo/caution.jpg?s=612x612&w=0&k=20&c=dbWfyDy0Ny_NyGBaiBGQL5NljsFBg_M9n5J03Y3YQjw=";

//     let info = {
//         city : "Delhi",
//         temp :25.05,
//         tempMin : 25.05,
//         tempMax : 25.05,
//         humidity : 47,
//        feels_like : 24.84,
//         weather : "haze",
// };

return (
    <div className="InfoBox">
        <h1 className=" text-2xl mt-7 font-semibold font-serif">WeatherInfo - {info.weather}...</h1>
    <Card sx={{ maxWidth: 345 }} className=" border-black mx-auto mt-5 ">
      <CardMedia sx={{ height: 140 }} image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL} title="green iguana"/>
      <CardContent className=" border-black  ">
      <p>{info.humidity > 80 ?<ThunderstormIcon/>  : info.temp > 15 ? <LightModeIcon/> : <AcUnitIcon/>  }</p> 
        <Typography gutterBottom variant="h6" component="div">{info.city}</Typography>
        <Typography variant="body2" color="text.secondary" component={"span"} className="mt-2 ">
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>The weather can be described as <i>{info.weather}</i> & feels like {info.feels_like}&deg;C</p>
        </Typography>
      </CardContent>
    
    </Card>
    </div>
)
}


//App --> weatherapp -->1. searchBox
//                      2.InfoBox

//weatherapp donot ko render karayega orr phir searchBox ke ander jo bhi deta return hokar aayega 
//bo deta ham statevar ke through weatherapp ko bhej dege
//then wheather app us val ko InfoBox ko as a props ppass kar dega 