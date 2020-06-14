import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Row, Container, Col } from "react-bootstrap";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import reactApp from "./App";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fillTemp: 50,
      fillHumidity: 20,
    };
  }

  synchronize = (state) => {
    // TODO: mqtt verbindung
    console.log("get from mqtt");
    console.log(reactApp.prototype.getHumidity());
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.gauge}>
          <Text style={styles.title}>Temperatur</Text>   

          <AnimatedCircularProgress
            size={250}
            width={20}
            fill={reactApp.prototype.getTemperature()}
            tintColor="#ff0000"
            backgroundColor="#343A40">
            {(fill) => (
              <Text style={styles.title}>{reactApp.prototype.getTemperature()} °C</Text>
            )}
          </AnimatedCircularProgress>
        </View>
        
            
        <View style={styles.gauge}>
          <Text style={styles.title}>Luftfeuchtigkeit</Text>
          
          <AnimatedCircularProgress
            size={250}
            width={20}
            fill={reactApp.prototype.getHumidity()}
            tintColor="#00e0ff"
            backgroundColor="#343A40">
            {(fill) => (
              <Text style={styles.title}>{reactApp.prototype.getHumidity()} %</Text>
            )}
          </AnimatedCircularProgress>
        </View>

        <View style={styles.gauge}>
          <Text style={styles.title}>Gefühlt</Text>
          
          <AnimatedCircularProgress
            size={250}
            width={20}
            fill={reactApp.prototype.getHeatindex()}
            tintColor="#00e0ff"
            backgroundColor="#343A40">
            {(fill) => (
              <Text style={styles.title}>{reactApp.prototype.getHeatindex()} °C</Text>
            )}
          </AnimatedCircularProgress>
        </View>




      {/* <Button variant="primary" onClick={this.synchronize}>SYNCRONICE</Button> */}

      </View>
    );
  }
}

//StyleSheet
//TODO: sachen mit flexbox/bootstrap zentrieren und responsive machen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap:"wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // marginLeft: "auto",
    // marginRight: "auto",
  },

  gauge: {
    backgroundColor: "#f0ffff",
    padding: 25,
    margin: 10,
  },

  title: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 10,
    alignItems: "center",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "center",
  },
});
