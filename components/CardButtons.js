import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import tw from 'tailwind-rn';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

const CardButtons = (props) => {
	const { swipeRef } = props;
	return (
		<View style={tw('flex-row justify-evenly mb-5')}>
			<TouchableOpacity
				style={tw(
					'items-center justify-center rounded-full w-16 h-16 bg-red-200'
				)}
				onPress={() => swipeRef.current.swipeLeft()}
			>
				<FontAwesome5 name='question' size={24} />
			</TouchableOpacity>
			<TouchableOpacity
				style={tw(
					'items-center justify-center rounded-full w-16 h-16 bg-green-200'
				)}
				onPress={() => swipeRef.current.swipeRight()}
			>
				<FontAwesome name='check' size={24} />
			</TouchableOpacity>
		</View>
	);
};

export default CardButtons;
