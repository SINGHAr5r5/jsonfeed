import React from 'react';
import {View, Text} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

export default function listfeed(props) {\
  o
  
  React.useEffect(() => {
    setNavigationOption();
  }, []);
  setNavigationOption = () => {
    props.navigation.setOptions({
      title: 'ระบบหอพักอัจฉริยะ',
      headerStyle: {
        // backgroundColor: '#FFF',
      },
      // headerTintColor: '#000',
      // headerTitleStyle: {color: '#000'},
      // headerBackTitle: ' ',
    });
  };
  return (
   <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>

    <View
        style={{flexDirection:'row',height:150,}}
      >
        <View 
        style={{flex: 1,flexDirection:'column', backgroundColor: '#F21111'}}>
          <Text style={{textAlign:'center', fontSize:40, color:'#FFF',justifyContent:'center'}}>1</Text>
        </View>
        <View 
        style={{flex: 1,flexDirection:'column', backgroundColor: '#FFF222'}}>
          <Text style={{textAlign:'center', fontSize:40, color:'#000',justifyContent:'center'}}>1</Text>
        </View>
     
    </View>
    <View
        style={{flexDirection:'row',height:150,}}
      >
        <View 
        style={{flex: 1,flexDirection:'column', backgroundColor: '#0048FE'}}>
            <Text style={{textAlign:'center', fontSize:40, color:'#FFF',justifyContent:'center'}}>1</Text>
        </View>
        <View 
        style={{flex: 1,flexDirection:'column', backgroundColor: '#FA0000'}}>
 <Text style={{textAlign:'center', fontSize:40, color:'#FFF',justifyContent:'center'}}>1</Text>
        </View>
   
    </View>
    <View
        style={{flexDirection:'row',height:150,}}
      >
        <View 
        style={{flex: 1,flexDirection:'column', backgroundColor: '#00FA0E'}}>
 <Text style={{textAlign:'center', fontSize:40, color:'#000',justifyContent:'center'}}>1</Text>
        </View>
        <View 
        style={{flex: 1,flexDirection:'column', backgroundColor: '#FFF222'}}>
 <Text style={{textAlign:'center', fontSize:40, color:'#000',justifyContent:'center'}}>1</Text>
        </View>

    </View>
    </View>
  );
}
