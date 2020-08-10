import React, { useEffect, useState } from "react";
import "./styles/app.css";
import "./styles/tailwind.css";
import Header from "./componentes/Header";
import Buscador from "./componentes/Buscador";
import Semanal from "./componentes/Semana";
import Footer from "./componentes/Footer";

const App = () => {
  const [temperatura, settemperatura] = useState({
    cityname: "",
    actual: "",
    feels_like: "",
    humidity: "",
    temp_max: "",
    temp_min: "",
    hour1: "",
    feels_like1: "",
    humidity1: "",
    temp_max1: "",
    temp_min1: "",
    description1: "",
    hour2: "",
    feels_like2: "",
    humidity2: "",
    temp_max2: "",
    temp_min2: "",
    description2: "",
    hour3: "",
    feels_like3: "",
    humidity3: "",
    temp_max3: "",
    temp_min3: "",
    description3: "",
    hour4: "",
    feels_like4: "",
    humidity4: "",
    temp_max4: "",
    temp_min4: "",
    description4: "",
    hour5: "",
    feels_like5: "",
    humidity5: "",
    temp_max5: "",
    temp_min5: "",
    description5: "",
    day1: "",
    feels_liked1: "",
    humidityd1: "",
    temp_maxd1: "",
    temp_mind1: "",
    descriptiond1: "",
    day2: "",
    feels_liked2: "",
    humidityd2: "",
    temp_maxd2: "",
    temp_mind2: "",
    descriptiond2: "",
    day3: "",
    feels_liked3: "",
    humidityd3: "",
    temp_maxd3: "",
    temp_mind3: "",
    descriptiond3: "",
    day4: "",
    feels_liked4: "",
    humidityd4: "",
    temp_maxd4: "",
    temp_mind4: "",
    descriptiond4: "",
  });

  useEffect(async () => {
    if (localStorage.getItem("city") === null) {
      let name = "bogota";
      let url =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        name +
        "&appid=89e83fd75a9cc2d874571ec4c3ac8d9f";
      let res = await fetch(url);
      let city = await res.json();
      settemperatura({
        name: city.city.name,
        actual: city.list[0].main.temp,
        feels_like: city.list[0].main.feels_like,
        humidity: city.list[0].main.humidity,
        temp_max: city.list[0].main.temp_max,
        temp_min: city.list[0].main.temp_min,
        description: city.list[0].weather[0].description,
        hour1: city.list[1].main.temp,
        feels_like1: city.list[1].main.feels_like,
        humidity1: city.list[1].main.humidity,
        temp_max1: city.list[1].main.temp_max,
        temp_min1: city.list[1].main.temp_min,
        description1: city.list[1].weather[0].description,
        hour2: city.list[2].main.temp,
        feels_like2: city.list[2].main.feels_like,
        humidity2: city.list[2].main.humidity,
        temp_max2: city.list[2].main.temp_max,
        temp_min2: city.list[2].main.temp_min,
        description2: city.list[2].weather[0].description,
        hour3: city.list[3].main.temp,
        feels_like3: city.list[3].main.feels_like,
        humidity3: city.list[3].main.humidity,
        temp_max3: city.list[3].main.temp_max,
        temp_min3: city.list[3].main.temp_min,
        description3: city.list[3].weather[0].description,
        hour4: city.list[4].main.temp,
        feels_like4: city.list[4].main.feels_like,
        humidity4: city.list[4].main.humidity,
        temp_max4: city.list[4].main.temp_max,
        temp_min4: city.list[4].main.temp_min,
        description4: city.list[4].weather[0].description,
        hour5: city.list[5].main.temp,
        feels_like5: city.list[5].main.feels_like,
        humidity5: city.list[5].main.humidity,
        temp_max5: city.list[5].main.temp_max,
        temp_min5: city.list[5].main.temp_min,
        description5: city.list[5].weather[0].description,
        day1: city.list[8].dt_txt,
        feels_liked1: city.list[8].main.feels_like,
        humidityd1: city.list[8].main.humidity,
        temp_maxd1: city.list[8].main.temp_max,
        temp_mind1: city.list[8].main.temp_min,
        descriptiond1: city.list[8].weather[0].description,
        day2: city.list[16].dt_txt,
        feels_liked2: city.list[16].main.feels_like,
        humidityd2: city.list[16].main.humidity,
        temp_maxd2: city.list[16].main.temp_max,
        temp_mind2: city.list[16].main.temp_min,
        descriptiond2: city.list[16].weather[0].description,
        day3: city.list[24].dt_txt,
        feels_liked3: city.list[24].main.feels_like,
        humidityd3: city.list[24].main.humidity,
        temp_maxd3: city.list[24].main.temp_max,
        temp_mind3: city.list[24].main.temp_min,
        descriptiond3: city.list[24].weather[0].description,
        day4: city.list[32].dt_txt,
        feels_liked4: city.list[32].main.feels_like,
        humidityd4: city.list[32].main.humidity,
        temp_maxd4: city.list[32].main.temp_max,
        temp_mind4: city.list[32].main.temp_min,
        descriptiond4: city.list[32].weather[0].description,
      });
    } else {
      var local = localStorage.getItem("city").replace(/['"]+/g, "");
      let url =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        local +
        "&appid=89e83fd75a9cc2d874571ec4c3ac8d9f";
      let res = await fetch(url);
      let city = await res.json();
      console.dir(city);
      settemperatura({
        name: city.city.name,
        actual: city.list[0].main.temp,
        feels_like: city.list[0].main.feels_like,
        humidity: city.list[0].main.humidity,
        temp_max: city.list[0].main.temp_max,
        temp_min: city.list[0].main.temp_min,
        description: city.list[0].weather[0].description,
        hour1: city.list[1].main.temp,
        feels_like1: city.list[1].main.feels_like,
        humidity1: city.list[1].main.humidity,
        temp_max1: city.list[1].main.temp_max,
        temp_min1: city.list[1].main.temp_min,
        description1: city.list[1].weather[0].description,
        hour2: city.list[2].main.temp,
        feels_like2: city.list[2].main.feels_like,
        humidity2: city.list[2].main.humidity,
        temp_max2: city.list[2].main.temp_max,
        temp_min2: city.list[2].main.temp_min,
        description2: city.list[2].weather[0].description,
        hour3: city.list[3].main.temp,
        feels_like3: city.list[3].main.feels_like,
        humidity3: city.list[3].main.humidity,
        temp_max3: city.list[3].main.temp_max,
        temp_min3: city.list[3].main.temp_min,
        description3: city.list[3].weather[0].description,
        hour4: city.list[4].main.temp,
        feels_like4: city.list[4].main.feels_like,
        humidity4: city.list[4].main.humidity,
        temp_max4: city.list[4].main.temp_max,
        temp_min4: city.list[4].main.temp_min,
        description4: city.list[4].weather[0].description,
        hour5: city.list[5].main.temp,
        feels_like5: city.list[5].main.feels_like,
        humidity5: city.list[5].main.humidity,
        temp_max5: city.list[5].main.temp_max,
        temp_min5: city.list[5].main.temp_min,
        description5: city.list[5].weather[0].description,
        day1: city.list[8].dt_txt,
        feels_liked1: city.list[8].main.feels_like,
        humidityd1: city.list[8].main.humidity,
        temp_maxd1: city.list[8].main.temp_max,
        temp_mind1: city.list[8].main.temp_min,
        descriptiond1: city.list[8].weather[0].description,
        day2: city.list[16].dt_txt,
        feels_liked2: city.list[16].main.feels_like,
        humidityd2: city.list[16].main.humidity,
        temp_maxd2: city.list[16].main.temp_max,
        temp_mind2: city.list[16].main.temp_min,
        descriptiond2: city.list[16].weather[0].description,
        day3: city.list[24].dt_txt,
        feels_liked3: city.list[24].main.feels_like,
        humidityd3: city.list[24].main.humidity,
        temp_maxd3: city.list[24].main.temp_max,
        temp_mind3: city.list[24].main.temp_min,
        descriptiond3: city.list[24].weather[0].description,
        day4: city.list[32].dt_txt,
        feels_liked4: city.list[32].main.feels_like,
        humidityd4: city.list[32].main.humidity,
        temp_maxd4: city.list[32].main.temp_max,
        temp_mind4: city.list[32].main.temp_min,
        descriptiond4: city.list[32].weather[0].description,
      });
    }
    return <div></div>;
  }, []);

  async function getWeather(e) {
    e.preventDefault();
    const [city] = e.target.elements;
    const cityValue = city.value;
    if (cityValue) {
      let url =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        `${cityValue}` +
        "&appid=89e83fd75a9cc2d874571ec4c3ac8d9f";
      const response = await fetch(url);
      const data = await response.json();
      settemperatura({
        name: data.city.name,
        actual: data.list[0].main.temp,
        feels_like: data.list[0].main.feels_like,
        humidity: data.list[0].main.humidity,
        temp_max: data.list[0].main.temp_max,
        temp_min: data.list[0].main.temp_min,
        description: data.list[0].weather[0].description,
        hour1: data.list[1].main.temp,
        feels_like1: data.list[1].main.feels_like,
        humidity1: data.list[1].main.humidity,
        temp_max1: data.list[1].main.temp_max,
        temp_min1: data.list[1].main.temp_min,
        description1: data.list[1].weather[0].description,
        hour2: data.list[2].main.temp,
        feels_like2: data.list[2].main.feels_like,
        humidity2: data.list[2].main.humidity,
        temp_max2: data.list[2].main.temp_max,
        temp_min2: data.list[2].main.temp_min,
        description2: data.list[2].weather[0].description,
        hour3: data.list[3].main.temp,
        feels_like3: data.list[3].main.feels_like,
        humidity3: data.list[3].main.humidity,
        temp_max3: data.list[3].main.temp_max,
        temp_min3: data.list[3].main.temp_min,
        description3: data.list[3].weather[0].description,
        hour4: data.list[4].main.temp,
        feels_like4: data.list[4].main.feels_like,
        humidity4: data.list[4].main.humidity,
        temp_max4: data.list[4].main.temp_max,
        temp_min4: data.list[4].main.temp_min,
        description4: data.list[4].weather[0].description,
        hour5: data.list[5].main.temp,
        feels_like5: data.list[5].main.feels_like,
        humidity5: data.list[5].main.humidity,
        temp_max5: data.list[5].main.temp_max,
        temp_min5: data.list[5].main.temp_min,
        description5: data.list[5].weather[0].description,
        day1: data.list[8].dt_txt,
        feels_liked1: data.list[8].main.feels_like,
        humidityd1: data.list[8].main.humidity,
        temp_maxd1: data.list[8].main.temp_max,
        temp_mind1: data.list[8].main.temp_min,
        descriptiond1: data.list[8].weather[0].description,
        day2: data.list[16].dt_txt,
        feels_liked2: data.list[16].main.feels_like,
        humidityd2: data.list[16].main.humidity,
        temp_maxd2: data.list[16].main.temp_max,
        temp_mind2: data.list[16].main.temp_min,
        descriptiond2: data.list[16].weather[0].description,
        day3: data.list[24].dt_txt,
        feels_liked3: data.list[24].main.feels_like,
        humidityd3: data.list[24].main.humidity,
        temp_maxd3: data.list[24].main.temp_max,
        temp_mind3: data.list[24].main.temp_min,
        descriptiond3: data.list[24].weather[0].description,
        day4: data.list[32].dt_txt,
        feels_liked4: data.list[32].main.feels_like,
        humidityd4: data.list[32].main.humidity,
        temp_maxd4: data.list[32].main.temp_max,
        temp_mind4: data.list[32].main.temp_min,
        descriptiond4: data.list[32].weather[0].description,
      });
      localStorage.setItem("city", JSON.stringify(cityValue));
    } else {
      alert("ingresa una ciudad válida");
    }
  }

  function hora() {
    var doce = document.getElementById("1");
    var uno = document.getElementById("2");
    var dos = document.getElementById("3");
    var tres = document.getElementById("4");
    var cuatro = document.getElementById("5");
    if (doce) {
      document.getElementById("informacion1").classList.add("show")
    }
    if (uno) {
      document.getElementById("informacion2").classList.add("show")
    }
    if (dos){
      document.getElementById("informacion3").classList.add("show")
    }
    if (tres){
      document.getElementById("informacion4").classList.add("show")
    }
    if(cuatro){
      document.getElementById("informacion5").classList.add("show")
    }
  }

  return (
    <div>
      <Header></Header>
      <Buscador
        descripcion={temperatura.description}
        ciudad={temperatura.name}
        actual={temperatura.actual}
        percepcion={temperatura.feels_like}
        humedad={temperatura.humidity}
        max={temperatura.temp_max}
        min={temperatura.temp_min}
        getWeather={getWeather}
        funcion={hora}
        hora1={temperatura.hour1}
        feellike1={temperatura.feels_like1}
        humedad1={temperatura.humidity1}
        tempmax1={temperatura.temp_max1}
        tempmin1={temperatura.temp_min1}
        descripcion1={temperatura.description1}
        hora2={temperatura.hour2}
        feellike2={temperatura.feels_like2}
        humedad2={temperatura.humidity2}
        tempmax2={temperatura.temp_max2}
        tempmin2={temperatura.temp_min2}
        descripcion2={temperatura.description2}
        hora3={temperatura.hour3}
        feellike3={temperatura.feels_like3}
        humedad3={temperatura.humidity3}
        tempmax3={temperatura.temp_max3}
        tempmin3={temperatura.temp_min3}
        descripcion3={temperatura.description3}
        hora4={temperatura.hour4}
        feellike4={temperatura.feels_like4}
        humedad4={temperatura.humidity4}
        tempmax4={temperatura.temp_max4}
        tempmin4={temperatura.temp_min4}
        descripcion4={temperatura.description4}
        hora5={temperatura.hour5}
        feellike5={temperatura.feels_like5}
        humedad5={temperatura.humidity5}
        tempmax5={temperatura.temp_max5}
        tempmin5={temperatura.temp_min5}
        descripcion5={temperatura.description5}
      ></Buscador>
      <Semanal
        dia1={temperatura.day1}
        feelliked1={temperatura.feels_liked1}
        humedadd1={temperatura.humidityd1}
        tempmaxd1={temperatura.temp_maxd1}
        tempmind1={temperatura.temp_mind1}
        descripciond1={temperatura.descriptiond1}
        dia2={temperatura.day2}
        feelliked2={temperatura.feels_liked2}
        humedadd2={temperatura.humidityd2}
        tempmaxd2={temperatura.temp_maxd2}
        tempmind2={temperatura.temp_mind2}
        descripciond2={temperatura.descriptiond2}
        dia3={temperatura.day3}
        feelliked3={temperatura.feels_liked3}
        humedadd3={temperatura.humidityd3}
        tempmaxd3={temperatura.temp_maxd3}
        tempmind3={temperatura.temp_mind3}
        descripciond3={temperatura.descriptiond3}
        dia4={temperatura.day4}
        feelliked4={temperatura.feels_liked4}
        humedadd4={temperatura.humidityd4}
        tempmaxd4={temperatura.temp_maxd4}
        tempmind4={temperatura.temp_mind4}
        descripciond4={temperatura.descriptiond4}
      ></Semanal>
      <Footer></Footer>
    </div>
  );
};

export default App;
