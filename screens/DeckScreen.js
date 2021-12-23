import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const DeckScreen = () => {
	const navigation = useNavigation();
	return (
		<View>
			<Text>Explore deck</Text>
			<Button
				title='Back to Home Page'
				onPress={() => navigation.navigate('Home')}
			/>
		</View>
	);
};

export default DeckScreen;
