import React from 'react'
import { View, Text, ImageBackground } from 'react-native'


import styles from './estilo' // Ajuste o caminho conforme necessário

const backgroundImage = require('../../assets/capa.jpg') // Ajuste o caminho conforme necessário

const Index = () => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Adega Preferida</Text>
        <Text style={styles.subtitulo}>Aqui você encontra os melhores e mais saborosos vinhos</Text>
      </View>
    </ImageBackground>
  )
}

export default Index
