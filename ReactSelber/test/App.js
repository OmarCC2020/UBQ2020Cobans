import React, {Component} from 'react';
import { Beleuchtung } from "./Beleuchtung";
import { Navigation } from "./Navigation";
import { Home }   from "./Home";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import mqtt from "mqtt";

var client; //mqtt client object
var mqttBrokerIP="mqtt://34.107.25.251";
var portNum = 1888;



import GLOBAL from './globalData.js'

export default class reactApp extends Component{
  constructor() {
    super();
    this.state = {
      myText: "My Original Text",
      data: 'Jordan Belfort',
      hum : 4224,
    };
    GLOBAL.temperature=this;
    GLOBAL.humidity=this;
    GLOBAL.heatindex=this;
    GLOBAL.gauge=this;

    this.getHumidity=this.getHumidity.bind(this);
  }

  getHumidity(){    
    if(GLOBAL.humidity.state.humidity!==undefined){
      return parseFloat(GLOBAL.humidity.state.humidity);
    }else{
      return 42;
    }
  }

  getTemperature(){    
    if(GLOBAL.temperature.state.temperature!==undefined){
      return parseFloat(GLOBAL.temperature.state.temperature);
    }else{
      return 42;
    }
  }

  getHeatindex(){    
    if(GLOBAL.heatindex.state.heatindex!==undefined){
      return parseFloat(GLOBAL.heatindex.state.heatindex);
    }else{
      return 42;
    }
  }

  setLedColor(color){
    console.log("from color picker: "+color);
    client.publish("led1/color", color.toString(),{qos: 1});
  }
  
  setLedState(state){
    //TODO: led state topic hinzufugen 
  }
  

  componentWillMount() {  
    client = mqtt.connect(mqttBrokerIP,{
      clientId: 'SmartCoban',
      port: portNum,
      path: '/mqtt',
      protocolId: 'MQIsdp',
        protocolVersion: 3,
        connectTimeout:5000,
        //incomingStore:manager.incoming,
        //outgoingStore:manager.outgoing
      });


      client.on("connect",function(err){
        console.log(">>>"+err);

        client.subscribe("dht22/humidity", function (err) {
          if (!err) { 
            //client.publish("dht22/humidity", "Hello on startup",{qos: 1});
          }else{
            console.log(err);
          }
        });

        //TODO: restlichen topics hinzufugen
        client.subscribe("dht22/temperature" , function(err){if(err){console.log(err)}});
        client.subscribe("dht22/humidity" ,function(err){if(err){console.log(err)}});
        client.subscribe("dht22/heatindex" , function(err){if(err){console.log(err)}});
       
      });


      //TODO: restliche topics switchen
      client.on("message",function(topic,message){
        console.log(topic+": "+message.toString());

        switch(topic){
          case "dht22/temperature":
            GLOBAL.temperature.setState({temperature:message.toString()}); 
            break;

          case "dht22/humidity":
            GLOBAL.humidity.setState({humidity:message.toString()}); 
            break;

          case "dht22/heatindex":
            GLOBAL.humidity.setState({heatindex:message.toString()}); 
            break;
        }

      });
      
      
  }

  componentDidMount(){
    
  }


  render(){
    return(
      <BrowserRouter>
      <Navigation/>
      <div className="container">
        <Switch>
          <Route path='/Beleuchtung' component={Beleuchtung} />
          <Route path='/Home' component={Home} />
          <Redirect to='/Home' component={Home} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

