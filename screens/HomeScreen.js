import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, Button, SafeAreaView } from 'react-native';
import useAuth from '../hooks/useAuth';
import tw from 'tailwind-rn';
import Header from '../components/Header';

const HomeScreen = () => {
	const navigation = useNavigation();
	const { logout, user } = useAuth();
	return (
		<SafeAreaView style={tw('flex-1')}>
			{/* Header */}
			<Header navigation={navigation} user={user} />
			{/* Swiper */}
			<Text>Vocabufy Home</Text>
			<Button
				title='Explore deck'
				onPress={() => navigation.navigate('Deck')}
			/>
			<Button title='Log out' onPress={logout} />
		</SafeAreaView>
	);
};

export default HomeScreen;
