import React from 'react';
import { SafeAreaView } from 'react-native';
import QuizPanel from '../components/QuizPanel';
import SecondaryHeader from '../components/SecondaryHeader';
import useAuth from '../hooks/useAuth';

const QuizScreen = () => {
	const { user } = useAuth();
	return (
		<SafeAreaView>
			<SecondaryHeader title='詞彙測試' deck={false} />
			{/* Quiz Cards */}
			<QuizPanel user={user} />
		</SafeAreaView>
	);
};

export default QuizScreen;
