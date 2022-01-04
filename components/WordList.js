import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import tw from 'tailwind-rn';
import WordRow from './WordRow';

const WordList = () => {
	const [wordList, setWordList] = useState([]);

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
