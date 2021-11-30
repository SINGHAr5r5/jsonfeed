import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { styles } from '../CSS/css_home';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from 'react-native/Libraries/NewAppScreen';
export default function detail(props) {
    React.useEffect(() => {
        setNavigationOption()
    }, [])
    setNavigationOption = () => {
        props.navigation.setOptions({
          title: "รายละเอียดสินค้า",
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {color: '#000'},
          headerBackTitle: ' ',
        });
      };
      renderRow = (item) => (
        <TouchableOpacity style={styles.listCard}
        onPress={() =>  Alert.alert(
       "แจ้งเตือน","Go to login",
            [
              {text: 'NO', onPress:() => {props.navigation.navigate('home')}},
              {text: 'YES', onPress:() => {props.navigation.navigate('Login')}},
            ]
          )}>        
                {/* Youtube Image */}
          <Image
            source={{uri: item.youtube_image}}
            style={styles.listYoutbeImage}
          />
          {/* Avatar and title, subtitle */}
          <View style={styles.listCardView}>
            {/* Avatar */}
            <Image style={styles.listAvatar} source={{uri: item.avatar_image}} />
    
            {/* Title and Subtitle */}
            <View style={styles.listTitleSubtitleContainer}>
              <Text style={styles.listTitle}>{item.title}</Text>
              <Text style={styles.listSubTitle}>{item.subtitle}</Text>
            </View>
          </View>  
        </TouchableOpacity>
      );
    return (
        <View style={{flex: 1}}>
            {renderRow(props.route.params.item)}
        </View>
    )
}
