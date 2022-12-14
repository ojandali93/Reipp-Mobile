import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { Feather } from 'react-native-vector-icons'

import { convertToDollars } from '../../../utilities'

const TaxComponent = (props) => {
  const {
    currentHome,
    setPropertyTax,
    propertyTax
  } = props

  const [openEdit, setOpenEdit] = useState(false)
  const [propertyTaxRate, setPropertyTaxRate] = useState('1.01')

  const updateOpenEdit = () => {
    if(openEdit == false){
      setOpenEdit(true)
    } else {
      setOpenEdit(false)
    }
  }

  const updatePropertyTaxRate = (value) => {
    setPropertyTaxRate(value)
    let taxRate = parseFloat(propertyTaxRate) / 100
    let annualTax = Math.round((currentHome.price * taxRate)/12)
    setPropertyTax(Math.round(annualTax))
  }

  return (
    <View style={styles.taxContainer}>
      <TouchableOpacity onPress={() => {updateOpenEdit()}}>
        <View style={styles.taxHeader}>
          <Text style={styles.label}>Property Tax:</Text>
          <View style={styles.dropDown}>
            <Text style={styles.label}>${convertToDollars(propertyTax)}</Text>
            <Feather style={styles.chevronDown} size={20} name='chevrons-down'/>
          </View>
        </View>
      </TouchableOpacity>
      {
        openEdit == false ? null : <><View style={styles.keyValueRow}>
                                        <Text style={styles.title}>Property Tax:</Text>
                                        <View style={styles.values}>
                                          <Text style={styles.value}>${currentHome.price} X %</Text>
                                          <TextInput 
                                            value={propertyTaxRate}
                                            onChangeText={(value) => {updatePropertyTaxRate(value)}}
                                            keyboardType='numeric'
                                            style={styles.input}
                                          />
                                        </View>
                                      </View>
                                      <View style={styles.disclaimer}>
                                        <Text>* Local tax rates might differ. *</Text>
                                      </View></>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  taxContainer: {
    width: '94%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '3%'
  },
  taxHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 17,
    fontWeight: '600'
  },
  disclaimer: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: '5%',
    marginBottom: 8
  },
  keyValueRow: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '5%',
    marginVertical: 8
  },
  title: {
    fontSize: 17,
    fontWeight: '500'
  },
  values: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4
  },
  value: {
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 4
  },
  icon: {
    marginLeft: 8
  },
  dropDown: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  disclaimer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    width: 100,
    fontSize: 17,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: 'lightgrey',
    paddingLeft: 4,
    paddingTop: 2
  },
  chevronDown: {
    marginLeft: 8,
    color: '#1560bd'
  },
})

export default TaxComponent