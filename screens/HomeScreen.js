import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';
import useAuth from '../hooks/useAuth';

const HomeScreen = () => {
	const navigation = useNavigation();
	const { logout } = useAuth();
	return (
		<View>
			<Text>Vocabufy Home</Text>
			<Button
				title='Explore deck'
				onPress={() => navigation.navigate('Deck')}
			/>
			<Button title='Log out' onPress={logout} />
		</View>
	);
};

export default HomeScreen;
