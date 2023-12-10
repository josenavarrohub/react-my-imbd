import { useEffect, useState } from 'react'

// Hook
export const useStateLocalStorage = <T,>(key: string, initialState: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
	// 🚦 State (1️⃣ initial render)
	const [state, setState] = useState<T>(() => {
		// Initialize state from localStorage or use the provided initialState
		const storedState = localStorage.getItem(key)  
		return storedState ? JSON.parse(storedState) : initialState
	})

	/**
	 * ✨ Effect
	 * - Initialize the localStorage (1️⃣ initial render)
	 * - Update the localStorage (🔁 when the state changes)
	 * */
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state))
	}, [key, state])

	// Return the piece of state and the setter function
	return [state, setState]
}
