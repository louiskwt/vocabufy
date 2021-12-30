import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import useAuth from '../hooks/useAuth';
import tw from 'tailwind-rn';
import Header from '../components/Header';
import Cards from '../components/Cards';

const HomeScreen = () => {
	const { logout, user } = useAuth();
	return (
		<SafeAreaView style={tw('flex-1')}>
			{/* Header */}
			<Header user={user} />
			{/* Learning Feed  */}
			<Cards />
			<Button title='Log out' onPress={logout} />
		</SafeAreaView>
	);
};

export default HomeScreen;
