import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain, faCloudSun } from "@fortawesome/free-solid-svg-icons";

class Semanal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="text-center">
            <div className="daily">
              <p className="">{this.props.dia1}</p>
              <h1>{this.props.descripciond1}</h1>
              <p className="">
                <FontAwesomeIcon icon={faCloudSun}></FontAwesomeIcon>Max.
                temperature: {this.props.tempmaxd1}
              </p>
              <p className="">Min. temperature: {this.props.tempmind1}</p>
            </div>
            <div className=" daily">
              <p className="">{this.props.dia2}</p>
              <h1>{this.props.descripciond2}</h1>
              <p className="">
                <FontAwesomeIcon icon={faCloudRain}></FontAwesomeIcon>Max.
                temperature: {this.props.tempmaxd2}
              </p>
              <p className="">Min. temperature: {this.props.tempmind2}</p>
            </div>
            <div className=" daily">
              <p className="">{this.props.dia3}</p>
              <h1>{this.props.descripciond3}</h1>
              <p className="">
                <FontAwesomeIcon icon={faCloudRain}></FontAwesomeIcon>Max.
                temperature: {this.props.tempmaxd3}
              </p>
              <p className="">Min. temperature: {this.props.tempmind3}</p>
            </div>
            <div className=" daily">
              <p className="">{this.props.dia4}</p>
              <h1>{this.props.descripciond4}</h1>
              <p className="">
                <FontAwesomeIcon icon={faCloudSun}></FontAwesomeIcon>Max.
                temperature: {this.props.tempmaxd4}
              </p>
              <p className="">Min. temperature: {this.props.tempmind4}</p>
            </div>
          </div>
         );
    }
}
 
export default Semanal;
