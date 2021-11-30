import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {styles} from '../CSS/profile';
import {SliderBox} from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

export default class profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        'https://monoloop.com/wp-content/uploads/2017/08/photo-1511367461989-f85a21fda167.jpg',
      ],
    };
  }
  onscreen1(props) {
    this.props.navigation.navigate('home');
  }
  onscreen2(props) {
    this.props.navigation.navigate('profile');
  }
  onscreen3(props) {
    this.props.navigation.navigate('listmoney');
  }
  onscreen4(props) {
    this.props.navigation.navigate('historymonry');
  }
  onscreen5(props) {
    this.props.navigation.navigate('profile');
  }
  onscreen6(props) {
    this.props.navigation.navigate('settings');
  }
  componentDidMount() {
    this.setNavigationOption();
  }
  cuttext() {
    return 'Home';
  }
  setNavigationOption() {
    this.props.navigation.setOptions({
      title: 'ข้อมูลส่วนตัว',
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
            paginationBoxStyle={{display: 'none'}}
          />
        </View>
        <View style={styles.bgfeed}>
          <ScrollView style={{width: '100%'}}>
            <View style={styles.cardss}>
              <View style={styles.nname}>
                <View style={styles.nname1}>
                  <View style={styles.icon1}>
                    <Icon name="user" style={styles.iconcss} />
                  </View>
                  {/* <Text style={styles.ttitles}>ชื่อ :</Text> */}
                  <Text style={styles.detail_data}>มาดี มีนา</Text>
                </View>
                <View style={styles.nname1}>
                  <View style={styles.icon2}>
                    <Icon name="home" style={styles.iconcss} />
                  </View>
                  {/* <Text style={styles.ttitles}>เชียงราย พะเยา ลำปาง เชียงใหม่ </Text> */}
                  <Text style={styles.detail_data}>
                    เชียงราย พะเยา ลำปาง เชียงใหม่
                  </Text>
                </View>
                <View style={styles.nname1}>
                  <View style={styles.icon3}>
                    <Icon name="envelope-square" style={styles.iconcss} />
                  </View>
                  {/* <Text style={styles.ttitles}>ชื่อ :</Text> */}
                  <Text style={styles.detail_data}>
                    Sing_love108@hotmail.com
                  </Text>
                </View>
                <View style={styles.nname1}>
                  <View style={styles.icon4}>
                    <Icon name="mobile" style={styles.iconcss} />
                  </View>
                  <Text style={styles.ttitles}>โทร </Text>
                  <Text style={styles.detail_data}>096-779-1113</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
