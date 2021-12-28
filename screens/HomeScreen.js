import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, Button, SafeAreaView } from 'react-native';
import useAuth from '../hooks/useAuth';
import tw from 'tailwind-rn';
import Header from '../components/Header';
import Cards from '../components/Cards';

const HomeScreen = () => {
	const navigation = useNavigation();
	const { logout, user } = useAuth();
	return (
		<SafeAreaView style={tw('flex-1')}>
			{/* Header */}
			<Header navigation={navigation} user={user} />
			{/* Learning Feed  */}
			<Cards />
			<Button
				title='Explore deck'
				onPress={() => navigation.navigate('Deck')}
			/>
			<Button title='Log out' onPress={logout} />
		</SafeAreaView>
	);
};

export default HomeScreen;
