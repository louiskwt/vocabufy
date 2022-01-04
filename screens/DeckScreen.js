import React from 'react';
import { SafeAreaView } from 'react-native';
import SecondaryHeader from '../components/SecondaryHeader';

const DeckScreen = () => {
	return (
		<SafeAreaView>
			<SecondaryHeader title='Your Deck' />
		</SafeAreaView>
	);
};

export default DeckScreen;
