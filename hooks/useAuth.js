import React, {
	createContext,
	useContext,
	useMemo,
	useState,
	useEffect
} from 'react';
import { IOS_CLIENT, ANDROID_CLIENT } from '@env';
import * as Google from 'expo-google-app-auth';
import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithCredential,
	signOut
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext({
	// initial states
});

const config = {
	iosClientId: IOS_CLIENT,
	androidClientId: ANDROID_CLIENT,
	scopes: ['profile', 'email'],
	permissions: ['public_profile', 'email', 'gender', 'loation']
};

export const AuthProvider = ({ children }) => {
	// Error
	const [error, setError] = useState(null);
	// User state
	const [user, setUser] = useState(null);
	// Loading pattern
	const [loadingInitial, setLoadingInitial] = useState(true);
	const [loading, setLoading] = useState(false);

	useEffect(
		() =>
			onAuthStateChanged(auth, (user) => {
				if (user) {
					// Logged in
					setUser(user);
				} else {
					// not logged in
					setUser(null);
				}
				setLoadingInitial(false);
			}),
		[]
	);

	const signInWithGoogle = async () => {
		setLoading(true);
		await Google.logInAsync(config)
			.then(async (logInResult) => {
				if (logInResult.type === 'success') {
					// Login
					const { idToken, accessToken } = logInResult;
					const credential = GoogleAuthProvider.credential(
						idToken,
						accessToken
					);
					// Do sth with credential
					await signInWithCredential(auth, credential);
				}
				return Promise.reject();
			})
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	};

	const logout = () => {
		setLoading(true);
		signOut(auth)
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	};

	const memoedValue = useMemo(
		() => ({
			user,
			loading,
			error,
			signInWithGoogle,
			logout
		}),
		[user, loading, error]
	);

	return (
		<AuthContext.Provider value={memoedValue}>
			{!loadingInitial && children}
		</AuthContext.Provider>
	);
};

export default function useAuth() {
	return useContext(AuthContext);
}
