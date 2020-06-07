import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Button, Row, Container, Col, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends React.Component {

  onPressButton(){
      <TouchableOpacity>
        <Text> nice </Text>
      </TouchableOpacity>
  }

  render() {
    return (

      <View> 
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">SmartHome</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Beleuchtung</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
      <Container fluid>
      <Row>
       <Col><Text style={styles.title}>Die Cobans</Text></Col>
      </Row>
       <Row>
        <Button variant="primary" onPress={this.onPressButton}>Primary</Button>
        <Button variant="outline-primary">Primary</Button>
        <Button variant="outline-danger">Danger</Button>
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
    fontWeight: "bold",
    texttransform: 'uppercase'
  }


});