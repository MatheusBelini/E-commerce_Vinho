import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // ou 'contain', dependendo do efeito desejado
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adiciona um fundo semitransparente para melhorar a legibilidade do texto
  },
  titulo: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 13,
    color: '#fff',
    marginTop: 5, // Use número em vez de string
  },
})

export default styles
