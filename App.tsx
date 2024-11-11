import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home';  // Your home screen
import MenuScreen from './Menu';  // Your menu screen
import CourseDetailScreen from './course detail';  // Course Detail screen
import AddDishScreen from './new dish';  // New Add Dish screen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Culinary Courier' }} 
        />
        <Stack.Screen 
          name="Menu" 
          component={MenuScreen} 
          options={{ title: 'Menu' }} 
        />
        <Stack.Screen 
          name="CourseDetail" 
          component={CourseDetailScreen} 
          options={{ title: 'Course Detail' }}  // Title dynamically handled by CourseDetailScreen
        />
        <Stack.Screen 
          name="Add Dish" 
          component={AddDishScreen} 
          options={{ title: 'Add New Dish' }}  // Title for Add Dish screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
