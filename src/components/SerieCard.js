import React from 'react'
import {Text, View, Image, StyleSheet, Dimensions,TouchableOpacity} from 'react-native'


const SerieCard = ({ serie, isFirstColumn,  onPress}) => (
  <TouchableOpacity
    onPress={onPress}
      style={[styles.container,
        isFirstColumn ? styles.firstColumn : styles.lastColumn
    ]}>
      <View style={styles.card}>
      { serie.img64 ? <Image source={{
            uri: `data:image/jpeg;base64, ${serie.img64}`

          }}
                 aspectRatio={1}
                resizeMode="cover"/>
                     : null
          }
              <View style={styles.cardTitleWrapper}>
                  <Text style={styles.cardTitle}>{serie.title}</Text>
              </View>

        </View>
  </TouchableOpacity>

)


const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: 5,
    height: Dimensions.get('window').width / 2
  },
   card: {
     flex: 1,
     borderWidth: 1
  },
  cardTitleWrapper: {
    backgroundColor: '#000',
    height: 50,

    position: 'absolute',
    bottom: 0,
    opacity: .8,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,

    paddingLeft:5,
    paddingRight:5,
    alignItems:'center'



  },

  cardTitle: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold'
  },
   firstColumn: {
     paddingLeft: 10,
   },

  lastColumn:{
    paddingRight: 10,
  },

})

export default SerieCard
