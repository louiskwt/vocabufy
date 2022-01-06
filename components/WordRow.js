import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import tw from 'tailwind-rn';
import { Entypo } from '@expo/vector-icons';

const WordRow = ({ wordDetails }) => {
	return (
		<TouchableOpacity
			style={[
				tw(
					'flex-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg'
				),
				styles.cardShadow
			]}
		>
			<View style={[tw('rounded-full h-8 w-16 mr-4 items-center')]}>
				{wordDetails.tag === 'known' ? (
					<Entypo name='check' size={24} color='green' />
				) : (
					<Entypo name='cross' size={24} color='red' />
				)}
			</View>
			<View>
				<Text style={tw('text-lg font-semibold')}>
					{wordDetails.word} ({wordDetails.pos})
				</Text>
				<Text style={tw('text-lg mt-3')}>{wordDetails.meaning}</Text>
			</View>
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
