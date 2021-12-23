import React, { createContext, useContext } from 'react';

const AuthContext = createContext({
	// initial states
});

export const AuthProvider = ({ children }) => {
	return (
		<AuthContext.Provider value={{ user: 'Louis' }}>
			{children}
		</AuthContext.Provider>
	);
};

export default function useAuth() {
	return useContext(AuthContext);
}
