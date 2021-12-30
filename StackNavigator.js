import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import useAuth from './hooks/useAuth';
import DeckScreen from './screens/DeckScreen';
import HomeScreen from './screens/HomeScreen';
import InfoModalScreen from './screens/InfoModalScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
	const { user } = useAuth();

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			{user ? (
				<>
					<Stack.Group>
						<Stack.Screen name='Home' component={HomeScreen} />
						<Stack.Screen name='Deck' component={DeckScreen} />
					</Stack.Group>
					<Stack.Group screenOptions={{ presentation: 'modal' }}>
						<Stack.Screen name='Info' component={InfoModalScreen} />
					</Stack.Group>
				</>
			) : (
				<Stack.Screen name='Login' component={LoginScreen} />
			)}
		</Stack.Navigator>
	);
};

export default StackNavigator;
