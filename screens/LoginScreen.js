import React from 'react';
import { View, Text, Button } from 'react-native';
import tw from 'tailwind-rn';
import useAuth from '../hooks/useAuth';

const LoginScreen = () => {
	const { signInWithGoogle } = useAuth();
	return (
		<View style={tw('flex-1 justify-center items-center')}>
			<Text>Login in to the app</Text>
			<Button title='Log in with Google' onPress={signInWithGoogle} />
		</View>
	);
};

export default LoginScreen;
