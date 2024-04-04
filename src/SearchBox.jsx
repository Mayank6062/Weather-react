import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState(""); //state var ke sath associated karne ke bad ham input fied me data ko put kar sakte h
    let[error, setError] = useState(false); //this state used for error ko handle karne ke liye 
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "181157d4de4d6f8c9d5d27863f1ea83a";
    
    let getweatherInfo = async() => { //api call always async call hoti h 
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`); //es complete url ke pass ham req bhejna chahte h 
       let jsonResponse = await response.json();
      // console.log(jsonResponse);
       let result = {
        city :city,
        temp : jsonResponse.main.temp,
        tempMin : jsonResponse.main.temp_min,
        tempMax : jsonResponse.main.temp_max,
        humidity : jsonResponse.main.humidity,
       feels_like : jsonResponse.main.feels_like,
        pressure : jsonResponse.main.pressure,
        weather : jsonResponse.weather[0].description,
       };
       //console.log(result);
       return result;
    } catch (err) {
       throw err;
    }

};

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async(event) => {
        try {
            event.preventDefault();
            //console.log(city);
            setCity("");
          let newinfo = await getweatherInfo();
          updateInfo(newinfo);
        } catch(err) {
             setError(true);
        }
    }
        

  return (
        <div>
            <h1 className=" text-2xl font-serif">Search for weather.....</h1>
            <form className="mt-5 " onSubmit={handleSubmit}>
            <label className="mr-5 font-serif">Put Here  :</label>
            <TextField id="city" label="City Name.." variant="outlined" required value={city} onChange={handleChange}/>
            <br></br><br></br>
            <Button variant="contained" type="submit">SEARCH</Button>
            {error && <p className="mt-4 text-lg font-serif">No such place adgist...</p>}
            </form>
        </div>
    )
}

//react me every form ke sath state varible ko associated karna hoga bhai 

