import React, {Component} from 'react';
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Image,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  ScrollView,
  Alert,
  View,
  Text,
  AsyncStorage,
} from 'react-native';
import {styles} from '../CSS/style';
import {useCallback, useRef} from 'react';
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  async onlogin(props) {
    const {username, password} = this.state;
    let reUsername = await AsyncStorage.getItem('username');
    let rePassword = await AsyncStorage.getItem('password');
    if (reUsername == null || rePassword == null) {
      Alert.alert('กรุณากรอกข้อมูล');
    }
    if (reUsername == username && rePassword == password) {
      Alert.alert('ยินดีต้อนรับ');
      this.props.navigation.navigate('listfeed');
    } else {
      Alert.alert('ไม่ตรง');
    }
  }
  onregister(props) {
    Alert.alert('register');
    this.props.navigation.navigate('register');
  }
  onlistfeed(props) {
    Alert.alert('listfeed');
    this.props.navigation.navigate('listfeed');
  }
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View style={styles.bimg}>
              <View>
                <Image
                  source={require('../img/qq.png')}
                  style={styles.imgLogo}
                />
              </View>
              <View>
                <View></View>
                <View>
                  <TextInput
                    onChangeText={text => this.setState({username: text})}
                    placeholder="ชื่อผู้ใช้(Username)"
                    keyboardType={'email-address'}
                    autoCorrect={false}
                    style={styles.textInput}
                    autoCapitalize={'none'}
                  />
                </View>
              </View>
              <View>
                <View></View>
                <View>
                  <TextInput
                    onChangeText={text => this.setState({password: text})}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    placeholder="รหัสผ่าน(Password)"
                    style={styles.textInput}
                    secureTextEntry={true}
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  position: 'relative',
                }}>
                <View style={{flex: 1}}>
                  <TouchableOpacity onPress={this.onregister.bind(this)}>
                    <Text style={styles.ttedbtn1}>ลืมรหัสผ่าน</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flex: 1}}>
                  <TouchableOpacity onPress={this.onlogin.bind(this)}>
                    <Text style={styles.ttedbtn2}>เข้าสู่ระบบ</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.edbtn}
                onPress={this.onlistfeed.bind(this)}>
                <Text style={styles.ttedbtn}>สำหรับคณะกรรมการ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
export default Login;
