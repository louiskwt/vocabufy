import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native';
import useAuth from '../hooks/useAuth';
import tw from 'tailwind-rn';
import Header from '../components/Header';
import Cards from '../components/Cards';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
	const { user } = useAuth();
	const navigation = useNavigation();

	// Show modal on first sign in
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
			<Cards user={user} />
		</SafeAreaView>
	);
};

export default HomeScreen;
