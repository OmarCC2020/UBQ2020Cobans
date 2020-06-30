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
    //add global variables to this class
    GLOBAL.temperature=this;
    GLOBAL.humidity=this;
    GLOBAL.heatindex=this;
    GLOBAL.gauge=this;
    GLOBAL.pressure=this;

    this.getHumidity=this.getHumidity.bind(this);
  }

  //functions for returning the right data 
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

  getPressure(){    
    if(GLOBAL.pressure.state.pressure!==undefined){
      return parseFloat(GLOBAL.pressure.state.pressure);
    }else{
      return 42;
    }
  }

  //setting the led color
  setLedColor(color){    
    //transforms from hex to rgb color scheme
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    result = result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
    } : null;

    //console.log(">>> "+color+" -> r:"+result.r+" g:"+result.g+" b:"+result.b);
    //client.publish("led1/color", color.toString(),{qos: 1});

    client.publish("led1/r", result.r.toString(),{qos: 1});
    client.publish("led1/g", result.g.toString(),{qos: 1});
    client.publish("led1/b", result.b.toString(),{qos: 1});

  }
  
  //turning the led on an off 
  setLedState(state){  
    console.log(state);
    if(state==true){
      client.publish("led1/state", "1",{qos: 1});    
    }else{
      client.publish("led1/state", "0",{qos: 1}); 
    }
    
  }
  
  //runs once on start-> here all the mqtt-communications are handled 
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

        //subscribing to the topics
        client.subscribe("dht22/temperature" , function(err){if(err){console.log(err)}});
        client.subscribe("dht22/humidity" ,function(err){if(err){console.log(err)}});
        client.subscribe("dht22/heatindex" , function(err){if(err){console.log(err)}});

        client.subscribe("bmp280/pressure" , function(err){if(err){console.log(err)}});       
       
      });

      //function gets called when a new message gets added to a topics
      client.on("message",function(topic,message){
        console.log(topic+": "+message.toString());

        //switching the message, depending on topic
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
          case "bmp280/pressure":
            GLOBAL.pressure.setState({pressure:message.toString()}); 
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

