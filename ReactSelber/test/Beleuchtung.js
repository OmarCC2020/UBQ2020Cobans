import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Row, Container, Col ,ToggleButton} from 'react-bootstrap';
import { SliderPicker } from 'react-color';

import reactApp from "./App";

export class Beleuchtung extends Component {
  
  state = {
    background: '#fff',
    checked: false,
    setChecked: false,
  };  

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
    //console.log("Selected Color" + { background: color.hex } )
  };

  setChecked(state){
    this.setState({checked:state});
  }

  callColor = (color) => {
    // TODO: mqtt verbindung zur LED lampe color muss von hex auf RGB 
    this.setState({ background: color.hex });
    //console.log("Selected Color" + {background: color.hex } )
    console.log(this.state.background);
    reactApp.prototype.setLedColor(this.state.background);
  }

    render() {
        return (    
          <View style={styles.container}> 
             <Container fluid>

              <Row>    
                <Text style={styles.title}>Beleuchtung</Text> 
              </Row>        

              <Row>
              <ToggleButton
                    type="checkbox"
                    variant="secondary"
                    checked={this.state.checked}
                    value="1"
                    onChange={(e) => this.setChecked(e.currentTarget.checked)}                            
                    >
                    Checked
                  </ToggleButton>  
              </Row>

                
                  
                        
                  

                           
                <SliderPicker 
                  color={ this.state.background }
                  onChangeComplete={ this.handleChangeComplete && this.callColor }
                  onPress={this.callColor}
                />
              
                 
            </Container>
          </View>
        );
      }
}

//Styles für aussehen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fffff',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      padding: 10,
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
      padding: 50,
      textAlign: 50
    }
  });