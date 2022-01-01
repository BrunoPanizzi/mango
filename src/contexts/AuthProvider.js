import { createContext, useState } from 'react'


export const AuthContext = createContext()

export default function AuthProvider({ children }) {
	const [auth, setAuth] = useState(false)

	function handleAuthentication() {
		setAuth(prevAuth => !prevAuth)
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
