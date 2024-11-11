import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MENU</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('CourseDetail', { courseType: 'starters' })}
      >
        <Text style={styles.buttonText}>Starters</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('CourseDetail', { courseType: 'mainCourse' })}
      >
        <Text style={styles.buttonText}>Main Course</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('CourseDetail', { courseType: 'dessert' })}
      >
        <Text style={styles.buttonText}>Dessert</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',  
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'green', 
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MenuScreen;
