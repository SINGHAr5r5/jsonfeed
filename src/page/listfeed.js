import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {styles} from '../CSS/listfeed_css';
import {SliderBox} from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
export default class App extends Component {
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
            paginationBoxStyle={{display: 'none'}}
          />
        </View>
        <View style={styles.bgfeed}>
          <ScrollView style={{width: '100%'}}>
            <View style={{flexDirection: 'row', height: 130}}>
              <View style={styles.viewss}>
                <TouchableOpacity
                  onPress={this.onscreen1.bind(this)}
                  style={styles.touchmenu}>
                  <Icon name="home" style={styles.iconn} />
                  <Text style={styles.textlabless}>
                    {this.cuttext('หน้าแรก')}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.viewss}>
                <TouchableOpacity
                  onPress={this.onscreen2.bind(this)}
                  style={styles.touchmenu}>
                  <Icon name="address-card" style={styles.iconn} />
                  <Text style={styles.textlabless}>ข้อมูลส่วนตัว</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: 'row', height: 130}}>
              <View style={styles.viewss}>
                <TouchableOpacity
                  onPress={this.onscreen3.bind(this)}
                  style={styles.touchmenu}>
                  <Icon name="list" style={styles.iconn} />
                  <Text style={styles.textlabless}>รายการชำระเงิน</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.viewss}>
                <TouchableOpacity
                  onPress={this.onscreen4.bind(this)}
                  style={styles.touchmenu}>
                  <Icon name="file-text" style={styles.iconn} />
                  <Text style={styles.textlabless}>ประวัติการชำระเงิน</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: 'row', height: 130}}>
              <View style={styles.viewss}>
                <TouchableOpacity
                  onPress={this.onscreen5.bind(this)}
                  style={styles.touchmenu}>
                  <Icon name="list-ol" style={styles.iconn} />
                  <Text style={styles.textlabless}>กฎระเบียบหอพัก</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.viewss}>
                <TouchableOpacity
                  onPress={this.onscreen6.bind(this)}
                  style={styles.touchmenu}>
                  <Icon name="cog" style={styles.iconn} />
                  <Text style={styles.textlabless}>ตั้งค่า</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
