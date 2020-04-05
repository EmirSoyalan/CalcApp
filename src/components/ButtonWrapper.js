import React from 'react';
import { View, Text } from 'react-native';
import { CButton } from './CButton';

export default class ButtonWrapper extends React.Component {
  render() {
    return (
        <View>
                <View style={{flex: 1, }}>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor:'yellow'}} >
                        <CButton><Text>1</Text></CButton>
                        <CButton><Text>2</Text></CButton>
                        <CButton><Text>3</Text></CButton>
                    </View>
                </View>
                <View style={{flex: 1, }}>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor:'orange'}} >
                        <CButton><Text>4</Text></CButton>
                        <CButton><Text>5</Text></CButton>
                        <CButton><Text>6</Text></CButton>
                    </View>
                </View>
                <View style={{flex: 1, }}>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor:'red'}} >
                        <CButton><Text>7</Text></CButton>
                        <CButton><Text>8</Text></CButton>
                        <CButton><Text>9</Text></CButton>
                    </View>
                </View>

        </View>
    );
  }
}



export { ButtonWrapper }; 