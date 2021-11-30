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
} from 'react-native';
import {AsyncStorage, AsyncStorageStatic} from 'react-native';
import {styles} from '../CSS/style';

export class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  async onsave() {
    try {
      const {username, password} = this.state;
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
    } catch (error) {}
    this.props.navigation.navigate('Login');
  }
  onregister(props) {
    Alert.alert('register');
    this.props.navigation.navigate('register');
  }
  onCancel(props) {
    Alert.alert('Login');
    this.props.navigation.navigate('Login');
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
                  <TouchableOpacity onPress={this.onCancel.bind(this)}>
                    <Text
                      style={
                        (styles.ttedbtn1,
                        {
                          color: 'red',
                          textAlign: 'center',
                          backgroundColor: 'red',
                          color: '#fff',
                          height: 40,
                          width: '100%',
                          padding: 10,
                        })
                      }>
                      ยกเลิก
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{flex: 1}}>
                  <TouchableOpacity onPress={this.onsave.bind(this)}>
                    <Text style={styles.ttedbtn2}>บันทึกข้อมูล</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.edbtn}>
                <Text
                  style={styles.ttedbtn}
                  onPress={() => {
                    props.navigation.navigate('listfeed');
                  }}>
                  สำหรับคณะกรรมการ
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
export default register;
