import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { CButton } from './src/components/CButton';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { mainText: 0 };
  }


changeText(mainText){
  this.setState({mainText});
}
  
  render() {
    return (
      <View style={styles.container}>

        <View style={{width: screen.width, height: screen.height*0.2, backgroundColor:'lightgray',marginBottom: 10, flex: 1, marginTop: 24,  paddingHorizontal: 20, alignItems: 'flex-end', justifyContent: 'center' }}>
          <Text style={{fontSize: 50}}>{this.state.mainText}</Text>
        </View>


        <View style={{flex: 1, flexDirection: 'row', backgroundColor:'',width: screen.width, alignItems:'center', justifyContent:'center'}}>
          <CButton mainText={this.state.mainText} changeText={this.changeText.bind(this)} name='+'/>
          <CButton mainText={this.state.mainText} changeText={this.changeText.bind(this)} name='-'/>
          <CButton mainText={this.state.mainText} changeText={this.changeText.bind(this)} name='/'/>
          <CButton mainText={this.state.mainText} changeText={this.changeText.bind(this)} name='*'/>
        </View>
        <View style={{ flex: 4 }}>
                 <View style={{flexDirection: 'row', backgroundColor:'', width: screen.width, alignItems:'center', justifyContent:'center'}} >
                        <CButton mainText={this.state.mainText} changeText={this.changeText.bind(this)} name='1'/>
                        <CButton mainText={this.state.mainText} changeText={this.changeText.bind(this)} name='2'/>
                        <CButton mainText={this.state.mainText} changeText={this.changeText.bind(this)} name='3'/>
                    </View>
                    <View style={{flexDirection: 'row', backgroundColor:'',width: screen.width, alignItems:'center', justifyContent:'center'}} >
                        <CButton mainText={this.state.mainText} changeText={this.changeText.bind(this)} name='4'/>
                        <CButton mainText={this.state.mainText} changeText={this.changeText.bind(this)} name='5'/>
                        <CButton mainText={this.state.mainText} changeText={this.changeText.bind(this)} name='6'/>
                    </View>
                    <View style={{flexDirection: 'row', backgroundColor:'',width: screen.width, alignItems:'center', justifyContent:'center'}} >
                        <CButton mainText={this.state.mainText} changeText={this.changeText.bind(this)} name='7'/>
                        <CButton mainText={this.state.mainText} changeText={this.changeText.bind(this)} name='8'/>
                        <CButton mainText={this.state.mainText} changeText={this.changeText.bind(this)} name='9'/>
                    </View>
                  <View style={{flexDirection: 'row', backgroundColor:'',width: screen.width, alignItems:'center', justifyContent:'center'}}>
                    <CButton mainText={this.state.mainText} changeText={this.changeText.bind(this)} name='clear'/>
					<CButton mainText={this.state.mainText} changeText={this.changeText.bind(this)} name='0'/>
                    <CButton mainText={this.state.mainText} changeText={this.changeText.bind(this)} name='='/>
                  </View>
      </View>
    </View>
    );
  }
}

const screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
