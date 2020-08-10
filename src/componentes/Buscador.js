import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faUniversalAccess } from "@fortawesome/free-solid-svg-icons";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="bg-gray-500">
        <div className="flex justify-center">
          <form onSubmit={this.props.getWeather} className="w-full max-w-sm">
            <div className="flex items-center py-2">
              <input
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                name="city"
                id="buscador"
                type="search"
                placeholder="Busca una ciudad"
                aria-label="Search"
              />
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                id="boton"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="text-center" id="ciudad">
          <h1 className="text-xl">{this.props.ciudad}</h1>
          <h1>{this.props.descripcion}</h1>
          <p className="text-gray-800">
            <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
            {this.props.actual}°F
          </p>
          <p className="text-gray-800">
            <FontAwesomeIcon icon={faUniversalAccess}></FontAwesomeIcon> Se
            siente como: {this.props.percepcion}°F
          </p>
          <p className="text-gray-800">
            Temperatura minima: {this.props.min}°F
          </p>
          <p className="text-gray-800">
            Temperatura máxima: {this.props.max}°F{" "}
          </p>
          <h4 className="text-gray-800">Humedad: {this.props.humedad}</h4>
          <div className="flex justify-center">
            <div className="text-center">
              <div className="timeline">
                <button className="period" id="1" onClick={this.props.funcion}>
                  12pm
                </button>
                <button className="period" id="2" onClick={this.props.funcion}>
                  1pm
                </button>
                <button className="period" id="3" onClick={this.props.funcion}>
                  2pm
                </button>
                <button className="period" id="4" onClick={this.props.funcion}>
                  3pm
                </button>
                <button className="period" id="5" onClick={this.props.funcion}>
                  4pm
                </button>
              </div>
              <div className="bloque">
                <div id="informacion1" className="oculto">
                  <p className="text-xl">{this.props.descripcion1}</p>
                  <p>Temperatura: {this.props.hora1}</p>
                  <p>Sensacion bioclimática: {this.props.feellike1}</p>
                  <p>Humedad: {this.props.humedad1}</p>
                  <p>Temperatura máxima: {this.props.tempmax1}</p>
                  <p>Temperatura mínima: {this.props.tempmin1}</p>
                </div>
                <div id="informacion2" className="oculto">
                  <p className="text-xl">{this.props.descripcion2}</p>
                  <p>Temperatura: {this.props.hora2}</p>
                  <p>Sensacion bioclimática: {this.props.feellike2}</p>
                  <p>Humedad: {this.props.humedad2}</p>
                  <p>Temperatura máxima: {this.props.tempmax2}</p>
                  <p>Temperatura mínima: {this.props.tempmin2}</p>
                </div>
                <div id="informacion3" className="oculto">
                  <p className="text-xl">{this.props.descripcion3}</p>
                  <p>Temperatura: {this.props.hora3}</p>
                  <p>Sensacion bioclimática: {this.props.feellike3}</p>
                  <p>Humedad: {this.props.humedad3}</p>
                  <p>Temperatura máxima: {this.props.tempmax3}</p>
                  <p>Temperatura mínima: {this.props.tempmin3}</p>
                </div>
                <div id="informacion4" className="oculto">
                  <p className="text-xl">{this.props.descripcion4}</p>
                  <p>Temperatura: {this.props.hora4}</p>
                  <p>Sensacion bioclimática: {this.props.feellike4}</p>
                  <p>Humedad: {this.props.humedad4}</p>
                  <p>Temperatura máxima: {this.props.tempmax4}</p>
                  <p>Temperatura mínima: {this.props.tempmin4}</p>
                </div>
                <div id="informacion5" className="oculto">
                  <p className="text-xl">{this.props.descripcion5}</p>
                  <p>Temperatura: {this.props.hora5}</p>
                  <p>Sensacion bioclimática: {this.props.feellike5}</p>
                  <p>Humedad: {this.props.humedad5}</p>
                  <p>Temperatura máxima: {this.props.tempmax5}</p>
                  <p>Temperatura mínima: {this.props.tempmin5}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Buscador;
