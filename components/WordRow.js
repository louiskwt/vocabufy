import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import tw from 'tailwind-rn';

const WordRow = ({ wordDetails, index }) => {
	return (
		<TouchableOpacity
			style={[
				tw(
					'flex-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg'
				),
				styles.cardShadow
			]}
		>
			<Text style={tw('rounded-full h-16 w-16 mr-4 items-center')}>
				{index + 1}
			</Text>
			<Text>{wordDetails.word}</Text>
		</TouchableOpacity>
	);
};

export default WordRow;

const styles = StyleSheet.create({
	cardShadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2
	}
});
