import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button, Row, Container, Col} from 'react-bootstrap';

export class Beleuchtung extends Component {
    render() {
        return (
    
          <View> 
          <Container fluid>
          <Row>
           <Col><Text style={styles.title}>Beleuchtung</Text></Col>
          </Row>
           <Row>
            <Button variant="primary">Primary</Button>
            <Button variant="outline-primary">Primary</Button>
            <Button variant="outline-danger">Danger</Button>
            <Button variant="outline-success">Success</Button>
            <Button variant="outline-success">Success</Button>
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
    },
  
    title: {
      marginTop: 16,
      paddingVertical: 8,
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    }
  
  
  });