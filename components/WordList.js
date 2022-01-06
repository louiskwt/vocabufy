import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import tw from 'tailwind-rn';
import WordRow from './WordRow';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const WordList = ({ user }) => {
	const [wordList, setWordList] = useState([]);
	useEffect(() => {
		let unsub;

		const fetchStoredWords = async () => {
			unsub = onSnapshot(
				collection(db, 'users', user.uid, 'swiped'),
				(snapshot) => {
					setWordList(
						snapshot.docs.map((doc) => ({ ...doc.data() }))
					);
					console.log(wordList);
				}
			);
		};

		fetchStoredWords();

		return unsub;
	}, [db]);

	return wordList.length > 0 ? (
		<FlatList
			style={tw('h-full')}
			data={wordList}
			keyExtractor={(item) => item.id}
			renderItem={({ item, index }) => (
				<WordRow wordDetails={item} index={index} />
			)}
		/>
	) : (
		<View style={tw('p-5')}>
			<Text style={tw('text-center text-lg')}>
				No words at the moment 😭
			</Text>
		</View>
	);
};

export default WordList;
