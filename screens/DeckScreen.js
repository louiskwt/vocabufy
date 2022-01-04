import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

const DeckScreen = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView>
			<Button
				title='Back to Home Page'
				onPress={() => navigation.navigate('Home')}
			/>
		</SafeAreaView>
	);
};

export default DeckScreen;
