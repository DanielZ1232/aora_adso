import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../constants';

const FormField = ({ title, value, placeholder,
handleChangetext, otherStyles, ...props}) => {
 const [showPassword, setshowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text style={{ fontSize: 16, color: '#E0E0E0', fontFamily: 'PMedium' }}>
        {title}
      </Text>


      <View className="border-2 border-black-200 w-full 
      h-16 px-4 bg-black-100 rounded-2xl
      focus:border-secondary items-center flex-row">
        <TextInput 
            className="flex-1 text-white font-pregular
            text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangetext}
            secureTextEntry={title === 'Password' &&
            !showPassword}
        />

        {title === 'Password' && (
            <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
                <Image source={!showPassword ? icons.eye :
                 icons.eyeHide } className="w-6 h-6" 
                 resizeMode="contain" />
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField;