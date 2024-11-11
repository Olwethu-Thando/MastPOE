import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For the "+" icon, you can use Ionicons or another icon set.

const DessertScreen = () => {
  return (
   
      <View style={styles.container}>
        {/* Header Text */}
        <Text style={styles.headerText}>Dessert</Text>
        
        {/* Center Icon */}
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="add-circle" size={100} color="#D8BFD8" />
        </TouchableOpacity>

        {/* Bottom Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ADD TO LIST</Text>
        </TouchableOpacity>
      </View>
    
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
  headerText: {
    fontSize: 24,
    color: '#D8BFD8',
    fontWeight: 'bold',
    marginBottom: 40,
    textTransform: 'capitalize',
  },
  iconContainer: {
    marginBottom: 60,
  },
  button: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#D8BFD8',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default DessertScreen;
