import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import React from 'react';

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        {
          backgroundColor: '#FF9F1C', // Color secundario
          borderRadius: 20, // Coincide con rounded-2xl del campo
          height: 64, // Coincide con la altura del campo (h-16 en Tailwind CSS)
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%', // Ancho completo para igualar el campo (w-full en Tailwind CSS)
          paddingHorizontal: 16, // Coincide con el padding horizontal del campo (px-4 en Tailwind CSS)
          marginTop: 20, // Similar a containerStyles={{ marginTop: 20 }}
        },
        containerStyles,
        isLoading && { opacity: 0.5 } // Si está cargando, baja la opacidad
      ]}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" /> // Indicador de carga
      ) : (
        <Text style={[{ color: '#161622', fontSize: 18, fontFamily: 'PSemibold' }, textStyles]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
