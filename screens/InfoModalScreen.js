import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-rn';
import useAuth from '../hooks/useAuth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const InfoModalScreen = () => {
	const { user, logout } = useAuth();
	const navigation = useNavigation();
	const [name, setName] = useState(null);
	const [level, setLevel] = useState(null);
	const [target, setTarget] = useState(null);
	const incompleteForm = !name || !level || !target;

	// db interaction
	const updateUserProfile = () => {
		setDoc(doc(db, 'users', user.uid), {
			id: user.uid,
			displayName: name,
			educaton: level,
			aim: target,
			timestamp: serverTimestamp()
		})
			.then(() => {
				navigation.navigate('Home');
			})
			.catch((error) => {
				console.warn(error.message);
			});
	};

	return (
		<View style={tw('flex-1 items-center pt-1')}>
			<Text style={tw('text-gray-800 text-xl font-extrabold')}>
				Vocabufy
			</Text>
			<Text style={tw('text-xl text-gray-500 p-2')}>Welcome!!</Text>
			<Text style={tw('text-center p-4 font-bold text-red-400')}>
				Step 1: 你的名字
			</Text>
			<TextInput
				style={tw('text-center text-xl pb-2')}
				placeholder='Your preferred name'
				value={name}
				onChangeText={(text) => setName(text)}
			/>
			<Text style={tw('text-center p-4 font-bold text-red-400')}>
				Step 2: 就讚年級
			</Text>
			<TextInput
				style={tw('text-center text-xl pb-2')}
				placeholder='F.5 / F.6 / 自修生'
				value={level}
				onChangeText={(text) => setLevel(text)}
			/>
			<Text style={tw('text-center p-4 font-bold text-red-400')}>
				Step 2: 學習目標
			</Text>
			<TextInput
				style={tw('text-center text-xl pb-2')}
				placeholder='DSE Lv 3 | IELTS 6.5'
				value={target}
				onChangeText={(text) => setTarget(text)}
			/>

			<View style={tw('mt-10')}>
				{/* Update Profile Btn */}
				<TouchableOpacity
					disabled={incompleteForm}
					style={[
						tw('w-64 p-3 rounded-xl'),
						incompleteForm ? tw('bg-gray-400') : tw('bg-red-400')
					]}
				>
					<Text
						style={tw('text-center text-white text-xl')}
						onPress={updateUserProfile}
					>
						Update Profile
					</Text>
				</TouchableOpacity>
				{/* logout btn */}
				<TouchableOpacity
					style={tw('w-64 p-3 rounded-xl mt-10 bg-red-400')}
				>
					<Text
						style={tw('text-center text-white text-xl')}
						onPress={logout}
					>
						Log Out
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default InfoModalScreen;
