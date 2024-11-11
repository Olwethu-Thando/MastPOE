import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Sample data for menu items
const menuItems = [
  { name: 'Caesar Salad', course: 'Appetizer', price: 48 },
  { name: 'Bruschetta', course: 'Appetizer', price: 190.00 },
  { name: 'Spaghetti Carbonara', course: 'Main Course', price: 195 },
  { name: 'Grilled Salmon', course: 'Main Course', price: 370 },
  { name: 'Chocolate Cake', course: 'Dessert', price: 185 },
  { name: 'Ice Cream', course: 'Dessert', price: 190 },
];

// Function to calculate average prices by course
const calculateAveragePriceByCourse = () => {
  const courseSums = {};
  const courseCounts = {};

  // Calculate total prices and counts by course
  menuItems.forEach(item => {
    const { course, price } = item;
    courseSums[course] = (courseSums[course] || 0) + price;
    courseCounts[course] = (courseCounts[course] || 0) + 1;
  });

  // Calculate averages
  const averages = {};
  for (const course in courseSums) {
    averages[course] = (courseSums[course] / courseCounts[course]).toFixed(2);
  }

  return averages;
};

const HomeScreen = ({ navigation }) => {
  const averagePrices = calculateAveragePriceByCourse();

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        
        <Text style={styles.title}>Chef App</Text>
      </View>

      {/* Display Average Prices by Course */}
      <View style={styles.averagePricesContainer}>
        <Text style={styles.averageTitle}>Average Prices by Course</Text>
        {Object.entries(averagePrices).map(([course, avgPrice]) => (
          <Text key={course} style={styles.courseText}>
            {course}: R{avgPrice}
          </Text>
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Menu')}
      >
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Add Dish')}
      >
        <Text style={styles.addButtonText}>Add a Dish</Text>
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
    padding: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
 
  },
  title: {
    color: 'purple',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  averagePricesContainer: {
    marginBottom: 20,
  },
  averageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  courseText: {
    fontSize: 16,
    color: 'white',
  },
  button: {
    backgroundColor: 'purple',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'purple ',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
