import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button, Row, Container, Col} from 'react-bootstrap';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export class Home extends Component {

  state = {
    fillTemp: 50,
    fillHumdity: 20,
  };

  syncronice = (state) => {
    // TODO: mqtt verbindung
    console.log("get from mqtt")
  }

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
                fill={this.state.fillTemp}
                tintColor="#00e0ff"
                backgroundColor="#3d5875">
                {
                  (fill) => (
                    <Text style={styles.title}>
                    { this.state.fillTemp }
                  </Text>
                  )
                }
              </AnimatedCircularProgress>
            </Col>

            </Row>

            <Row>
             <Col>
           
              <Text style={styles.title}>Humidity</Text>
           
              <AnimatedCircularProgress
                size={200}
                width={15}
                fill={this.state.fillHumdity}
                tintColor="#00e0ff"
                backgroundColor="#3d5875">
                {
                  (fill) => (
                    <Text style={styles.title}>
                    { this.state.fillHumdity }
                  </Text>
                  )
                }
              </AnimatedCircularProgress>

             </Col>
            </Row>

            <Row>
              <Button variant="primary"
              onClick={ this.syncronice }>SYNCRONICE</Button>
            </Row>

           </Container> 
          </View>
        );
      }
}

//Styles für aussehen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: "auto",
      marginRight: "auto",
    },
  
    title: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 12,
      paddingVertical: 10,
      alignItems: 'center',
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
      justifyContent: 'center',
    },
  });