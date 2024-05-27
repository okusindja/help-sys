import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 18,
  },
  boxe: {
    width: 323,
    height: 142,
    backgroundColor: '#FFDC7C',
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    margin: 12,
  },
  boxe2: {
    width: 323,
    height: 142,
    backgroundColor: '#FFCF4B',
    borderRadius: 10,
  },
  boxe3: {
    width: 323,
    height: 142,
    backgroundColor: '#FFC423',
    borderRadius: 10,
  },
  textos: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 9,
    marginBottom: 9,
  },
  Modal1: {
    margin: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#fff',
    width: 343,
    height: 603,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Fundo semitransparente para o efeito escuro
  },
  input: {
    width: '100%',
    height: 55,
    borderStyle: 'solid',
    borderWidth: 1.3,
    borderRadius: 2,
    borderColor: '#E9E9E9',
    backgroundColor: '#E9E9E9',
  },
  inputs: {
    gap: 8,
    width: '80%',
  },
  titleModal: {
    marginBottom: 42,
    fontSize: 16,
  },
  button: {
    width: 269,
    height: 55,
    backgroundColor: '#ffc423',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 28,
    top: 90,
  },
  finalButton: {
    alignItems: 'center',
    backgroundColor: '#FFC423',
    padding: 10,
    margin: 12,
    borderRadius: 12,
  },
});
