import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button, Row, Container, Col} from 'react-bootstrap';

export class Home extends Component {
    render() {
        return (
    
          <View> 
            <Container fluid>
            <Row>
            <Col>
             <Text style={styles.title}>Temperatur</Text>

              {/* TODO: hier diagramm impl. */}

            </Col>
           
             <Col>
           
              <Text style={styles.title}>temp</Text>
           
              {/* TODO: hier diagramm impl. */}

             </Col>
            </Row>
          
           <Button variant="primary">SYNCRONICE</Button>

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

    button: {
      fontWeight: "bold",
      justifyContent: 'center',
    }
  });