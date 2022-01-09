import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import tw from 'tailwind-rn';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import QuizCard from './QuizCard';

const QuizPanel = ({ user }) => {
	const [quizWords, setQuizWords] = useState([]);
	useEffect(() => {
		let unsub;

		const fetchStoredWords = async () => {
			unsub = onSnapshot(
				collection(db, 'users', user.uid, 'swiped'),
				(snapshot) => {
					setQuizWords(
						snapshot.docs
							.map((doc) => ({ ...doc.data() }))
							.sort((a, b) => {
								if (a.word < b.word) {
									return -1;
								}
								if (a.word > b.word) {
									return 1;
								}
								return 0;
							})
					);
					console.log(quizWords);
				}
			);
		};

		fetchStoredWords();

		return unsub;
	}, [db]);

	return quizWords.length > 0 ? (
		<FlatList
			style={tw('h-80 w-full')}
			data={quizWords}
			horizontal={true}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => <QuizCard wordDetails={item} />}
		/>
	) : (
		<View style={tw('p-5')}>
			<Text style={tw('text-center text-lg')}>
				You have no words in your deck 😭
			</Text>
		</View>
	);
};

export default QuizPanel;
