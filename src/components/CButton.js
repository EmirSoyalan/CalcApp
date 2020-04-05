import React from 'react';
import { Text, TouchableOpacity, Dimensions } from 'react-native';

export default class CButton extends React.Component {
  handleChange(e) {
    if(this.props.mainText.length != 20){
      if(this.props.name=='=' ){ 
        if(!( this.props.mainText[this.props.mainText.length-1] == '+' || this.props.mainText[this.props.mainText.length-1] == '-' || this.props.mainText[this.props.mainText.length-1] == '/' || this.props.mainText[this.props.mainText.length-1] == '*' ))
        { this.props.changeText(eval(this.props.mainText)); }
      }
      else if(this.props.name == 'clear'){
        this.props.changeText(0);
      }
      else if(!((this.props.mainText[this.props.mainText.length-1] == '+' || this.props.mainText[this.props.mainText.length-1] == '-' || this.props.mainText[this.props.mainText.length-1] == '/' || this.props.mainText[this.props.mainText.length-1] == '*' ) && (this.props.name=='+' || this.props.name=='-' || this.props.name=='*' || this.props.name=='/') )){
        if(this.props.mainText==0){
          this.props.changeText(this.props.name);
        }
        else
        this.props.changeText(this.props.mainText + this.props.name);
      }
    }
  } 
  render() {
    return (
      <TouchableOpacity onPress={this.handleChange.bind(this)} style={{
          width: 85 ,
          height: 85,
          backgroundColor: (this.props.name == '-'||this.props.name == '+'||this.props.name == '*'||this.props.name == '/') ? 'gray' : 'darkgray',
          borderRadius: 50,
          padding: 10,
          margin: 2,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: "#000",
          shadowOffset: {
          width: 0,
          height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.30,
          elevation: 13,
      }}>
        <Text style={{fontSize:(this.props.name=='=')?50:25}}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}
const screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

export { CButton }; 