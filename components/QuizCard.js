import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import tw from 'tailwind-rn';

const QuizCard = ({ wordDetails }) => {
	return (
		<View
			style={[
				tw(
					'flex-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg w-full'
				),
				styles.cardShadow
			]}
		>
			<Text>{wordDetails.word}</Text>
		</View>
	);
};

export default QuizCard;

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
