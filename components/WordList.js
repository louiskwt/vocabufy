import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import tw from 'tailwind-rn';
import WordRow from './WordRow';
import {
	collection,
	onSnapshot,
	getDocs,
	query,
	where
} from 'firebase/firestore';
import { db } from '../firebase';

const WordList = ({ user }) => {
	const [wordList, setWordList] = useState([]);
	useEffect(() => {
		let unsub;

		const fetchStoredWords = async () => {
			const knowns = await getDocs(
				collection(db, 'users', user.uid, 'knowns')
			).then((snapshot) => snapshot.docs.map((doc) => doc.id));

			const unknowns = await getDocs(
				collection(db, 'users', user.uid, 'unknowns')
			).then((snapshot) => snapshot.docs.map((doc) => doc.id));

			const knownWordIds = knowns.length > 0 ? knowns : ['test'];
			const unknownWordIds = unknowns.length > 0 ? unknowns : ['test'];

			console.log(knownWordIds);
			console.log(unknownWordIds);
			const list = [...knownWordIds, ...unknownWordIds];
			console.log(list);

			unsub = onSnapshot(
				query(
					collection(db, 'words'),
					where('id', 'array-contains', list)
				),
				(snapshot) => {
					setWordList(
						snapshot.docs.map((doc) => ({ ...doc.data() }))
					);
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
			renderItem={({ item }) => <WordRow wordDetails={item} />}
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
