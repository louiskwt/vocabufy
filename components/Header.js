import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-rn';
import { FontAwesome5 } from '@expo/vector-icons';

const Header = (props) => {
	const { user, navigation } = props;
	return (
		<View style={tw('flex-row items-center justift-between px-5')}>
			<TouchableOpacity>
				<Image
					style={tw('h-10 w-10 rounded-full')}
					source={{ uri: user.photoURL }}
				/>
			</TouchableOpacity>
			<TouchableOpacity>
				<Image
					style={tw('h-14 w-14')}
					source={require('../assets/header.png')}
				/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Deck')}>
				<FontAwesome5 name='book' size={24} color='black' />
			</TouchableOpacity>
		</View>
	);
};

export default Header;
