import React from 'react';
import { SafeAreaView } from 'react-native';
import SecondaryHeader from '../components/SecondaryHeader';
import WordList from '../components/WordList';

const DeckScreen = () => {
	return (
		<SafeAreaView>
			<SecondaryHeader title='Your Deck' />
			{/* Word List */}
			<WordList />
		</SafeAreaView>
	);
};

export default DeckScreen;
