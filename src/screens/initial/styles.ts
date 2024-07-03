import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  buttonsContainer: {
    width: '100%',
    backgroundColor: '#414851',
    height: 260,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    justifyContent: 'center',
    bottom: 0,
  },
  button: {
    margin: 20,
    padding: 20,
    backgroundColor: '#FDC326',
    borderRadius: 12,
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
  },
});
