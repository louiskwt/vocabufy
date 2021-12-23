import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-rn';

const LoginScreen = () => {
	return (
		<View style={tw('flex-1 justify-center items-center')}>
			<Text>Login in to the app</Text>
		</View>
	);
};

export default LoginScreen;
