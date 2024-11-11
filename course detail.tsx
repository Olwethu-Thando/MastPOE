import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const courses = {
  starters: {
    title: 'Starters',
    description: 'Explore a variety of delicious starters to kick off your meal. Our selection includes:',
    dishes: [
      { name: 'Caesar Salad', description: 'Romaine lettuce, croutons, and parmesan cheese, tossed with Caesar dressing. Price:R185' },
      { name: 'Spinach and Artichoke Dip', description: ' Creamy dip made with spinach, artichokes, cream cheese, and parmesan, usually served warm with crackers or sliced bread. Price:R80' },
      { name: 'Chicken Wings', description: 'Small, crispy chicken wings served with a variety of sauces such as buffalo, BBQ, or honey mustard. Price:R70' },
    ],
  },
  mainCourse: {
    title: 'Main Course',
    description: 'Enjoy our range of hearty and flavorful main courses. Choose from:',
    dishes: [
      { name: 'Vegetable Lasagna', description: 'Layers of pasta, ricotta cheese, spinach, zucchini, mushrooms, and marinara sauce, all baked to perfection. Price:R350' },
      { name: 'Chicken and Mushroom Pie', description: 'A hearty pie filled with creamy chicken and mushrooms, all encased in a flaky pastry crust. Price:R175' },
      { name: 'Pasta Primavera', description: 'A pasta dish featuring fresh, sautéed vegetables in a light garlic and olive oil sauce. Price:R352' },
    ],
  },
  dessert: {
    title: 'Dessert',
    description: 'Indulge in our sweet and delectable desserts:',
    dishes: [
      { name: ' Pineapple Upside-Down Cake', description: 'Rich chocolate cake with a gooey molten center. Price:R152' },
      { name: 'Strawberry Shortcake', description: 'Classic Italian dessert with layers of coffee-soaked sponge and mascarpone cream. Price:R170' },
      { name: ' Pavlova', description: 'A meringue-based dessert topped with whipped cream and fresh fruits like kiwi, berries, and passion fruit. Price:R270' },
    ],
  },
};

const CourseDetailScreen = ({ route }) => {
  const { courseType } = route.params;
  const course = courses[courseType];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.description}>{course.description}</Text>

      {course.dishes.map((dish, index) => (
        <View key={index} style={styles.dishContainer}>
          <Text style={styles.dishTitle}>{index + 1}. {dish.name}</Text>
          <Text style={styles.dishDescription}>{dish.description}</Text>
        </View>
        
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'nude',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#7D4CC1',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  dishContainer: {
    marginBottom: 20,
  },
  dishTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dishDescription: {
    fontSize: 16,
  },
});

export default CourseDetailScreen;
