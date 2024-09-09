import { View, Text } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View>
      <Text style={styles.titulo}>Entre em contato conosco para comprar nossos produtos</Text>
    </View>
  )
}


const styles = StyleSheet.create({

    titulo: {
      fontSize: 24,
      color: '#fff',
      fontWeight: 'bold',
      textAlign:"center",

  }})
  
export default index

