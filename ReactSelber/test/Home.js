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
        <Container fluid>
          <Row>
            <Col>
              <Text style={styles.title}>Temperatur</Text>

              <AnimatedCircularProgress
                size={200}
                width={15}
                fill={reactApp.prototype.getTemperature()}
                tintColor="#00e0ff"
                backgroundColor="#3d5875">
                {(fill) => (
                  <Text style={styles.title}>{reactApp.prototype.getTemperature()}</Text>
                )}
              </AnimatedCircularProgress>
            </Col>
          </Row>

          <Row>
            <Col>
              <Text style={styles.title}>Humidity</Text>

              <AnimatedCircularProgress
                size={200}
                width={15}
                fill={reactApp.prototype.getHumidity()}
                tintColor="#00e0ff"
                backgroundColor="#3d5875">
                {(fill) => (
                  <Text style={styles.title}>{reactApp.prototype.getHumidity()} %</Text>
                )}
              </AnimatedCircularProgress>
            </Col>
          </Row>

          <Row>
            <Button variant="primary" onClick={this.synchronize}>SYNCRONICE</Button>
          </Row>
        </Container>
      </View>
    );
  }
}

//StyleSheet
//TODO: sachen mit flexbox/bootstrap zentrieren und responsive machen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },

  title: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 12,
    paddingVertical: 10,
    alignItems: "center",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "center",
  },
});
