import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cima: {
    width: "100%",
    height: 345,
    backgroundColor: "#414851",
    alignItems: "center",
    justifyContent: "center",
  },
  baixo: {
    width: "100%",
    height: 440,
    top: -10,
    backgroundColor: "white",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  bottomContainer: {
    gap: 8,
    top: -30,
  },
  logo: {
    top: 90,
    width: 172,
    height: 130,
  },
  infoStudent: {
    flex: 1,
    flexDirection: "row",
    marginTop: 100,
  },
  nome: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 18,
  },
  infoUni: {
    color: "#fff",
  },
  infoUniT: {
    color: "#fff",
    marginLeft: -55,
  },
  logout: {
    marginLeft: 90,
  },
  infoCard: {
    width: 323,
    height: 79,
    backgroundColor: "#FDC326",
    borderRadius: 8,
    flexDirection: "row",
    padding: 10,
    alignSelf: "center",
  },
  estudantes: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
  },
  analisados: {
    flex: 1,
    borderRightWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ajudados: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoTextNumber: {
    fontWeight: "700",
  },
  infoText: {
    fontSize: 9,
    textTransform: "uppercase",
  },
  addDados: {
    width: 323,
    height: 219,
    borderRadius: 8,
    alignSelf: "center",
    backgroundColor: "blue",
    justifyContent: "flex-end",
    padding: 20,
  },
  addDadosTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  addDadosParagraph: {
    color: "white",
    fontSize: 9,
  },
  sugestao: {
    width: 323,
    height: 79,
    borderRadius: 8,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#414851",
  },
  sugestaoWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  sugestaoText: {
    color: "#FDC326",
  },

  /*
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
  },*/
});
