import React, { useLayoutEffect } from 'react';
import { Button, SafeAreaView } from 'react-native';
import useAuth from '../hooks/useAuth';
import tw from 'tailwind-rn';
import Header from '../components/Header';
import Cards from '../components/Cards';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
	const { logout, user } = useAuth();
	const navigation = useNavigation();

	useLayoutEffect(
		() =>
			onSnapshot(doc(db, 'users', user.uid), (snapshot) => {
				if (!snapshot.exists()) {
					navigation.navigate('Info');
				}
			}),
		[]
	);

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
