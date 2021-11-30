import * as React from 'react';
import { View, Text , StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './src/page/home';
import Login from './src/page/Login';
import detail from './src/page/detail';
import insertfeed from './src/page/insertfeed';
import listfeed from './src/page/listfeed';
import register from './src/page/register';
import profile from './src/page/profile';
import settings from './src/page/settings';
import historymonry from './src/page/historymonry';
import listmoney from './src/page/listmoney';

const Stack = createNativeStackNavigator();

const App=(props) => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="home" component={home} options={{title:""}}/>
        <Stack.Screen name="Login" component={Login} options={{title:""}} />
        <Stack.Screen name="detail" component={detail} options={{title:""}} />
        <Stack.Screen name="insertfeed" component={insertfeed} options={{title:""}} />
        <Stack.Screen name="listfeed" component={listfeed} options={{title:"ระบบหอพักอัจฉริยะ"}} />
        <Stack.Screen name="register" component={register} option={{title:""}}/>
        <Stack.Screen name="profile" component={profile} option={{title:""}}/>
        <Stack.Screen name="settings" component={settings} option={{title:""}}/>
        <Stack.Screen name="historymonry" component={historymonry} option={{title:""}}/>
        <Stack.Screen name="listmoney" component={listmoney} option={{title:""}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;