import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>
      <Text style={styles.subtitle}>Entre em contato conosco para comprar nossos produtos</Text>

      <TouchableOpacity style={styles.contactItem}>
        <View>
        <Icon name="phone" size={30} color="#333" style={styles.icon} />
        </View>
        
        <View>
          <Text style={styles.contactLabel}>Telefone:</Text>
          <Text style={styles.contactInfo}>+55 1599012457</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contactItem}>
        <Icon name="map-marker" size={30} color="#333" style={styles.icon} />
        <View>
          <Text style={styles.contactLabel}>Endereço:</Text>
          <Text style={styles.contactInfo}>Ar. 123, 222 - CASA DE GUILHERME</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contactItem}>
        <Icon name="envelope" size={30} color="#333" style={styles.icon} />
        <View>
          <Text style={styles.contactLabel}>Email:</Text>
          <Text style={styles.contactInfo}>GUILHERME.LADINO.com.br</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contactItem}>
        <Icon name="instagram" size={30} color="#333" style={styles.icon} />
        <View>
          <Text style={styles.contactLabel}>Instagram:</Text>
          <Text style={styles.contactInfo}>@adegapreferida</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  icon: {
    marginRight: 20,
  },
  contactLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  contactInfo: {
    fontSize: 14,
    color: '#333',
  },
});

export default Contact;
