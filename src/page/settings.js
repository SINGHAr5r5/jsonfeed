import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView ,Linking, Platform, Alert } from "react-native";
import {styles} from '../CSS/setting_css';
import { SliderBox } from "react-native-image-slider-box";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
export default class settings extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          images: [
            // "https://source.unsplash.com/1024x768/?nature",
            // "https://source.unsplash.com/1024x768/?water",
            // "https://source.unsplash.com/1024x768/?girl",
            // "https://source.unsplash.com/1024x768/?girl",
            require('../img/498.jpg'),
            require('../img/489.jpg'),
            require('../img/490.jpg'),
            require('../img/491.jpg'),
            require('../img/492.jpg'),
            require('../img/493.jpg'),
            require('../img/494.jpg'),
            require('../img/495.jpg'),
            require('../img/496.jpg'),
            require('../img/497.jpg'),
            require('../img/499.jpg'),
            require('../img/500.jpg'),
            require('../img/501.jpg'),
          ]
        };
        
      }
      onscreen1(props){
        this.props.navigation.navigate("home")
      }
      onscreen2(props){
        this.props.navigation.navigate("profile")
      }
      onscreen3(props){
        this.props.navigation.navigate("listmoney")
      }
      onscreen4(props){
        this.props.navigation.navigate("historymonry")
      }
      onscreen5(props){
        this.props.navigation.navigate("profile")
      }
      onscreen6(props){
        this.props.navigation.navigate("settings")
      }
      reset() {
    
    }
      dialCall(){
        let phoneNumber = '';
        if (Platform.OS === 'android') {
          phoneNumber = 'tel:${0966791113}';
        } 
        else {
          phoneNumber = 'telprompt:${0966791113}';
        }
        Linking.openURL(phoneNumber);
      };
    componentDidMount(){
      this.setNavigationOption()
    }
     cuttext(){
      return 'Home'
    }
      setNavigationOption() {
        this.props.navigation.setOptions({
          title: 'ระบบหอพักอัจฉริยะ',
          headerStyle: {
            backgroundColor: '#102F3B',
          },
          headerTintColor: '#000',
          headerTitleStyle: {color: '#fff'},
          headerBackTitle: ' ',
        });
      }
      render() {
        return (
          <View style={styles.container}>
            <View>
            <SliderBox 
              style={styles.imgg}
              images={this.state.images}
              paginationBoxStyle={{display:'none'}}
            />
            </View>
            <View style={styles.bgfeed}>
        <ScrollView style={{width:'100%'}}>
          <View style={{flexDirection: 'row', height: 80}}>
            <View style={styles.viewss}>
            <TouchableOpacity onPress={this.dialCall} activeOpacity={0.7} style={styles.touchmenu}>
                <Icon name="phone" style={styles.iconn}/>
                <Text style={styles.textlabless}>
                ติดค่อส่วนกลาง
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row', height: 80}}>
            <View style={styles.viewss}>
            <TouchableOpacity onPress={this.reset.bind(this)} style={styles.touchmenu}>
                <Icon name="sign-out" style={styles.iconn}/>
                <Text style={styles.textlabless}>
                  ออกจากระบบ
                </Text>
              </TouchableOpacity> 
            </View>
          </View>
        </ScrollView>
        </View>
          </View>
          
        );
      }
    }
    