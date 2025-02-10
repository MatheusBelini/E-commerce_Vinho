import React from 'react'
import { View, Text, ImageBackground } from 'react-native'


import styles from './estilo' // Ajuste o caminho conforme necessário

const backgroundImage = require('../../assets/santos.jpg') // Ajuste o caminho conforme necessário

const Index = () => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Santástico</Text>
        <Text style={styles.subtitulo}>aqui voçe vai conhecer um pouco sobre o clube da baixada santista</Text>
      </View>
    </ImageBackground>
  )
}

export default Index
