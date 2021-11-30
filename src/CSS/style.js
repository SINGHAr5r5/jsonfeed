import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
  },

  textInput: {
    fontSize: 16,
    height: 40,
    borderColor: '#C0C0C0',
    borderBottomWidth: 1,
    marginBottom: 30,
    textAlign: 'center',
  },
  btnContainer: {
    backgroundColor: 'white',
    marginBottom: 135,
  },
  imgLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 70,
    marginBottom: 60,
    height: 150,
    width: 200,
  },
  edbtn: {
    alignItems: 'center',
    borderColor: '#2740B0',
    borderWidth: 0.5,
    height: 45,
    padding: 10,
  },
  ttedbtn: {
    color: '#2740B0',
    fontWeight: '800',
  },
  ttedbtn1: {
    textAlign: 'center',
    color: '#2740B0',
    textDecorationLine: 'underline',
  },
  ttedbtn2: {
    textAlign: 'center',
    backgroundColor: '#2740B0',
    height: 40,
    color: '#FFF',
    padding: 11.5,
    fontWeight: '800',
  },

  bimg: {
    marginBottom: 150,
  },
});
