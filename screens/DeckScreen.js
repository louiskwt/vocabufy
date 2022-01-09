import React from 'react';
import { SafeAreaView } from 'react-native';
import SecondaryHeader from '../components/SecondaryHeader';
import WordList from '../components/WordList';
import useAuth from '../hooks/useAuth';

const DeckScreen = () => {
	const { user } = useAuth();
	return (
		<SafeAreaView>
			<SecondaryHeader title='詞彙集' deck={true} />
			{/* Word List */}
			<WordList user={user} />
		</SafeAreaView>
	);
};

export default DeckScreen;
