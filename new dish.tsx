import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';

const AddDishScreen = () => {
  const [dishName, setDishName] = useState('');
  const [dishDescription, setDishDescription] = useState('');
  const [dishPrice, setDishPrice] = useState('');
  const [course, setCourse] = useState('Starters');
  const [dishes, setDishes] = useState([]);  // To hold the dishes for the selected course

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const existingCoursesJSON = await AsyncStorage.getItem('courses');
        const existingCourses = existingCoursesJSON ? JSON.parse(existingCoursesJSON) : {
          Starters: [],
          'Main Course': [],
          Dessert: [],
        };
        setDishes(existingCourses[course]);
      } catch (error) {
        console.error('Error loading dishes', error);
      }
    };
    fetchDishes();
  }, [course]);

  const handleAddDish = async () => {
    if (dishName && dishDescription && dishPrice) {
      const newDish = { name: dishName, description: dishDescription, price: dishPrice };

      try {
        const existingCoursesJSON = await AsyncStorage.getItem('courses');
        const existingCourses = existingCoursesJSON ? JSON.parse(existingCoursesJSON) : {
          Starters: [],
          'Main Course': [],
          Dessert: [],
        };

        existingCourses[course].push(newDish);
        await AsyncStorage.setItem('courses', JSON.stringify(existingCourses));

        Alert.alert('Dish Added', `Dish Name: ${dishName}\nDescription: ${dishDescription}\nPrice: R${dishPrice}\nCourse: ${course}`);
        
        setDishes([...existingCourses[course]]);
        setDishName('');
        setDishDescription('');
        setDishPrice('');
        setCourse('Starters');
      } catch (error) {
        Alert.alert('Error', 'Failed to save dish. Please try again.');
      }
    } else {
      Alert.alert('Input Error', 'Please fill in all fields.');
    }
  };

  const handleRemoveDish = async (dishNameToRemove) => {
    try {
      const existingCoursesJSON = await AsyncStorage.getItem('courses');
      const existingCourses = existingCoursesJSON ? JSON.parse(existingCoursesJSON) : {
        Starters: [],
        'Main Course': [],
        Dessert: [],
      };

      const updatedDishes = existingCourses[course].filter(dish => dish.name !== dishNameToRemove);
      existingCourses[course] = updatedDishes;

      await AsyncStorage.setItem('courses', JSON.stringify(existingCourses));
      setDishes(updatedDishes);
    } catch (error) {
      Alert.alert('Error', 'Failed to remove dish. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Dish</Text>

      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />

      <TextInput
        style={styles.input}
        placeholder="Dish Description"
        value={dishDescription}
        onChangeText={setDishDescription}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Dish Price (in Rands)"
        value={dishPrice}
        onChangeText={setDishPrice}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Select Course:</Text>
      <Picker
        selectedValue={course}
        style={styles.picker}
        onValueChange={(itemValue) => setCourse(itemValue)}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Main Course" value="Main Course" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <Button title="Add Dish" onPress={handleAddDish} color="#7D4CC1" />

      <Text style={styles.dishesTitle}>Dishes in {course}:</Text>
      <FlatList
        data={dishes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.dishItem}>
            <Text>{item.name} - R{item.price}</Text>
            <Button title="Remove" onPress={() => handleRemoveDish(item.name)} color="red" />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'pink',
  },
  input: {
    height: 50,
    borderColor: 'pink',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  picker: {
    height: 50,
    borderColor: 'pink',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: 'white ',
  },
  dishesTitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  dishItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default AddDishScreen;
