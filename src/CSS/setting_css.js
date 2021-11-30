import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102F3B',
  },
  viewss: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
  },
  textlabless: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '900',
    color: '#fff',
    justifyContent: 'center',
    top: 15,
  },
  iconn: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    top: 10,
    zIndex: 10,
    opacity: 1,
  },
  touchmenu: {
    flex: 1,
    backgroundColor: '#034E6D',
    borderRadius: 30,
    opacity: 1,
    borderColor: '#fff',
    borderWidth: 0.3,
    borderColor: 'thistle',
    borderRadius: 20,
  },
  bgfeed: {
    flex: 1,
    alignItems: 'center',
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    opacity: 8.5,
    height: 1000,
    position: 'absolute',
    width: '100%',
    zIndex: 11,
    marginTop: 320,
    padding: 10,
    backgroundColor: '#102F3B',
  },
  imgg: {
    resizeMode: 'center',

    marginBottom: 0,
    zIndex: 0,
    position: 'relative',
    borderRadius: 10,
    width: '100%',
    height: 350,
  },
});
