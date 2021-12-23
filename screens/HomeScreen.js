import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = () => {
	const navigation = useNavigation();
	return (
		<View>
			<Text>Vocabufy Home</Text>
			<Button
				title='Explore deck'
				onPress={() => navigation.navigate('Deck')}
			/>
		</View>
	);
};

export default HomeScreen;
