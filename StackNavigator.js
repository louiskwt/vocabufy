import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import useAuth from './hooks/useAuth';
import DeckScreen from './screens/DeckScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
	const { user } = useAuth();

	return (
		<Stack.Navigator>
			{user ? (
				<>
					<Stack.Screen name='Home' component={HomeScreen} />
					<Stack.Screen name='Deck' component={DeckScreen} />
				</>
			) : (
				<Stack.Screen name='Login' component={LoginScreen} />
			)}
		</Stack.Navigator>
	);
};

export default StackNavigator;
