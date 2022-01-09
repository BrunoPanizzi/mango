import { createContext, useState } from 'react'


export const AuthContext = createContext()

export default function AuthProvider({ children }) {
	const [auth, setAuth] = useState('undefined')

	function handleAuthentication(newAuth) {
		setAuth(newAuth)
	}

	return (
		<AuthContext.Provider
			value={{
				auth,
				handleAuthentication
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
