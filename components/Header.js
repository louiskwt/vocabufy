import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-rn';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {
	const navigation = useNavigation();
	const { user } = props;
	return (
		<View
			style={tw('flex-row items-center justify-between px-5 mt-3 mb-5')}
		>
			<TouchableOpacity onPress={() => navigation.navigate('Info')}>
				<Image
					style={tw('h-8 w-8 rounded-full')}
					source={{ uri: user.photoURL }}
				/>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text style={tw('text-gray-800 text-xl font-medium')}>
					Vocabufy
				</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Deck')}>
				<FontAwesome5 name='book' size={28} color='black' />
			</TouchableOpacity>
		</View>
	);
};

export default Header;
