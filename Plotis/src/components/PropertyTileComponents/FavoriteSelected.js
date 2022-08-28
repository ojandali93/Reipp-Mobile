import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Feather, FontAwesome } from 'react-native-vector-icons'

const FavoriteSelected = () => {
  return (
    <View style={styles.iconContainer}>
      <FontAwesome style={styles.icon} size={20} name='heart'/>
    </View>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    marginLeft: 8,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 50,
  },
  icon: {
    color: '#1560bd'
  }
})

export default FavoriteSelected