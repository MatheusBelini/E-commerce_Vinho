// // import React from 'react';
// // import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

// // import styles from './estilo'
// // import estilo from '../TelaInicio/estilo';

// // export default function TelaCatalogo() {
// //     return (
// //         <ScrollView style={styles.container}>
// //           <Text style={styles.header}>Nossos vinhos</Text>
// //           <Text style={styles.subHeader}>
// //             Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.
// //           </Text>
    
// //           <View style={styles.card}>
// //             <Image source={require('../../assets/vinho-branco.jpg')} style={styles.image} />
// //             <View style={styles.textContainer}>
// //               <Text style={styles.title}>Chatigny Chardonnay</Text>
// //               <Text style={styles.description}>
// //                 Vinho leve, refrescante e levemente cítrico da cor amarela pálida. Perfeito com carnes brancas e massas ao pesto.
// //               </Text>
// //             </View>
// //           </View>
    
// //           <View style={styles.card}>
// //             <Image source={require('../../assets/vinho-especial.jpg')} style={styles.image} />
// //             <View style={styles.textContainer}>
// //               <Text style={styles.title}>Concha y Toro Exportacion</Text>
// //               <Text style={styles.description}>
// //                 Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.
// //               </Text>
// //             </View>
// //           </View>
    
// //           <View style={styles.card}>
// //             <Image source={require('../../assets/vinho-rose.jpg')} style={styles.image} />
// //             <View style={styles.textContainer}>
// //               <Text style={styles.title}>Portada Winemaker's</Text>
// //               <Text style={styles.description}>
// //                 Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi. Perfeito com queijo parmesão e carnes assadas ou grelhadas.
// //               </Text>
// //             </View>
// //           </View>
    
// //           <View style={styles.card}>
// //             <Image source={require('../../assets/vinho-seco.jpg')} style={styles.image} />
// //             <View style={styles.textContainer}>
// //               <Text style={styles.title}>Elvio Cogno Ravera Barolo</Text>
// //               <Text style={styles.description}>
// //                 Vinho estruturado, com sabor de cereja vermelha madura, framboesas, notas de tabaco e taninos aveludados. Sua cor é vermelho-granada.
// //               </Text>
// //             </View>
// //           </View>
// //         </ScrollView>
// //       );
// // }
// import React from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import { ScrollView } from 'react-native-web';
// const vinho1 = require('../../assets/vinho-branco.jpg')
// const vinho2 = require('../../assets/vinho-especial.jpg')
// const vinho3 = require('../../assets/vinho-rose.jpg')
// const vinho4 = require('../../assets/vinho-seco.jpg')
// const vinho5 = require('../../assets/vinho-tinto.jpg')

// const App = () => {
//   return (
//     <ScrollView>
//     <View style={styles.container}>
      
//       <View style={styles.content}>
//         <Text style={styles.title}>Nossos vinhos</Text>
//         <Text style={styles.subtitle}>Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.</Text>
//         <View style={styles.wineItem}>
//           <Image
//           source={vinho1}
//           style={styles.wineImage}
//           />
//           <View style={styles.wineInfo}>
//             <Text style={styles.wineName}>Chatigny Chardonnay</Text>
//             <Text style={styles.wineDescription}>Vinho leve, refrescante e levemente cítrico de cor amarelo palha. Perfeito com carnes brancas e massas ao pesto.</Text>
//           </View>
//         </View>

//         <View style={styles.wineItem}>
//         <Image
//           source={vinho2}
//           style={styles.wineImage}
//           />
//           <View style={styles.wineInfo}>
//             <Text style={styles.wineName}>Concha y Toro Exportacion</Text>
//             <Text style={styles.wineDescription}>Vinho  tinto leve,  com aromas de frutas vermelhas. Perfeito com  saladas e aperitivos.</Text>
//           </View>
//         </View>

//         <View style={styles.wineItem}>
//         <Image
//           source={vinho3}
//           style={styles.wineImage}
//           />
//           <View style={styles.wineInfo}>
//             <Text style={styles.wineName}>Portada Winemaker's</Text>
//             <Text style={styles.wineDescription}>Vinho encorpado, saboroso e frutado, com final  levemente adocicado.  Tanto o vermelho rubi. Perfeito com queijo parmesão e carnes assadas ou grelhadas.</Text>
//           </View>
//         </View>

//         <View style={styles.wineItem}>
//         <Image
//           source={vinho4}
//           style={styles.wineImage}
//           />
//           <View style={styles.wineInfo}>
//             <Text style={styles.wineName}>Elvie Cogno Ravera Barolo</Text>
//             <Text style={styles.wineDescription}>Vinho encorpado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e  taninos  aveludados. Sua cor é</Text>
//           </View>
//         </View>

//         <View style={styles.wineItem}>
//         <Image
//           source={vinho5}
//           style={styles.wineImage}
//           />
//           <View style={styles.wineInfo}>
//             <Text style={styles.wineName}>Elvie Cogno Ravera Barolo</Text>
//             <Text style={styles.wineDescription}>Vinho encorpado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e  taninos  aveludados. Sua cor é</Text>
//           </View>
//         </View>
//       </View>
    
//     </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     backgroundColor: '#8B0000',
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   content: {
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     marginBottom: 20,
//   },
//   wineItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   wineImage: {
//     width: 80,
//     height: 280,
//     marginRight: 15,
//   },
//   wineInfo: {
//     flex: 1,
//   },
//   wineName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   wineDescription: {
//     fontSize: 14,
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     height: 60,
//     backgroundColor: '#8B0000',
//   },
//   footerButton: {
//     padding: 10,
//   },
//   footerButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default App;
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const vinho1 = require('../../assets/vinho-branco.jpg');
const vinho2 = require('../../assets/vinho-especial.jpg');
const vinho3 = require('../../assets/vinho-rose.jpg');
const vinho4 = require('../../assets/vinho-seco.jpg');
const vinho5 = require('../../assets/vinho-tinto.jpg');

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Nossos vinhos</Text>
          <Text style={styles.subtitle}>
            Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.
          </Text>
          
          <View style={styles.wineItem}>
            <Image
              source={vinho1}
              style={styles.wineImage}
              resizeMode='contain'
            />
            <View style={styles.wineInfo}>
              <Text style={styles.wineName}>Chatigny Chardonnay</Text>
              <Text style={styles.wineDescription}>
                Vinho leve, refrescante e levemente cítrico de cor amarelo palha. Perfeito com carnes brancas e massas ao pesto.
              </Text>
            </View>
          </View>

          <View style={styles.wineItem}>
            <Image
              source={vinho2}
              style={styles.wineImage}
              resizeMode='contain'
            />
            <View style={styles.wineInfo}>
              <Text style={styles.wineName}>Concha y Toro Exportacion</Text>
              <Text style={styles.wineDescription}>
                Vinho tinto leve, com aromas de frutas vermelhas. Perfeito com saladas e aperitivos.
              </Text>
            </View>
          </View>

          <View style={styles.wineItem}>
            <Image
              source={vinho3}
              style={styles.wineImage}
              resizeMode='contain'
            />
            <View style={styles.wineInfo}>
              <Text style={styles.wineName}>Portada Winemaker's</Text>
              <Text style={styles.wineDescription}>
                Vinho encorpado, saboroso e frutado, com final levemente adocicado. Tanto o vermelho rubi. Perfeito com queijo parmesão e carnes assadas ou grelhadas.
              </Text>
            </View>
          </View>

          <View style={styles.wineItem}>
            <Image
              source={vinho4}
              style={styles.wineImage}
              resizeMode='contain'
            />
            <View style={styles.wineInfo}>
              <Text style={styles.wineName}>Elvie Cogno Ravera Barolo</Text>
              <Text style={styles.wineDescription}>
                Vinho encorpado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados.
              </Text>
            </View>
          </View>

          <View style={styles.wineItem}>
            <Image
              source={vinho5}
              style={styles.wineImage}
              resizeMode='contain'
            />
            <View style={styles.wineInfo}>
              <Text style={styles.wineName}>Elvie Cogno Ravera Barolo</Text>
              <Text style={styles.wineDescription}>
                Vinho encorpado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  wineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  wineImage: {
    width: 80,
    height: 120,
    marginRight: 15,
    borderRadius: 10,
  },
  wineInfo: {
    flex: 1,
  },
  wineName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  wineDescription: {
    fontSize: 14,
  },
});

export default App;
