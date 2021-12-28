import React from 'react';
import {
	View,
	Text,
	Button,
	ImageBackground,
	TouchableOpacity
} from 'react-native';

import tw from 'tailwind-rn';
import useAuth from '../hooks/useAuth';

const LoginScreen = () => {
	const { signInWithGoogle } = useAuth();
	return (
		<View style={tw('flex-1')}>
			<ImageBackground
				resizeMode='cover'
				style={tw('flex-1')}
				source={require('../assets/logo.png')}
			>
				<TouchableOpacity
					style={[
						tw('absolute bottom-40 w-52 bg-white p-4 rounded-2xl'),
						{ marginHorizontal: '25%' }
					]}
				>
					<Text
						style={tw('font-semibold text-center')}
						onPress={signInWithGoogle}
					>
						Login in with Google
					</Text>
				</TouchableOpacity>
			</ImageBackground>
		</View>
	);
};

export default LoginScreen;
