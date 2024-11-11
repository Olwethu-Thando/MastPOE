import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home';  // Your home screen
import MenuScreen from './Menu';  // Your menu screen
import StartersScreen from './course detail';  // New Starters screen
import MainCourseScreen from './Main Course Page';  // New Main Course screen
import DessertScreen from './Dessert';  // New Dessert screen
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
          name="Starters" 
          component={StartersScreen} 
          options={{ title: 'Starters' }} 
        />
        <Stack.Screen 
          name="Main Course" 
          component={MainCourseScreen} 
          options={{ title: 'Main Course' }} 
        />
        <Stack.Screen 
          name="Dessert" 
          component={DessertScreen} 
          options={{ title: 'Dessert' }} 
        />
        <Stack.Screen 
          name="Add Dish" 
          component={AddDishScreen} 
          options={{ title: 'Add New Dish' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
