import React from 'react';
import { SafeAreaView } from 'react-native';
import SecondaryHeader from '../components/SecondaryHeader';
import useAuth from '../hooks/useAuth';

const QuizScreen = () => {
	return (
		<SafeAreaView>
			<SecondaryHeader title='詞彙測試' deck={false} />
		</SafeAreaView>
	);
};

export default QuizScreen;
