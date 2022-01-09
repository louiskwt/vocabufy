import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'tailwind-rn';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

const SecondaryHeader = ({ title, deck }) => {
	const navigation = useNavigation();
	return (
		<View style={tw('p-2 flex-row items-center justify-between')}>
			<View style={tw('flex flex-row items-center')}>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={tw('p-2')}
				>
					<Ionicons
						name='chevron-back-circle-outline'
						size={34}
						color='#FF5864'
					/>
				</TouchableOpacity>
				<Text style={tw('text-2xl font-bold pt-2')}>{title}</Text>
			</View>
			{deck && (
				<TouchableOpacity
					style={tw('rounded-full mr-4 p-3 ')}
					onPress={() => navigation.navigate('Quiz')}
				>
					<FontAwesome name='edit' size={24} color='black' />
				</TouchableOpacity>
			)}
		</View>
	);
};

export default SecondaryHeader;
