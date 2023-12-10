import { useEffect } from "react"

export const useKey = (key: string, callback: Function) => {

	// Effect
	useEffect(() => {
		const handleKey = (event: KeyboardEvent) => {
			event.key === key && callback(event)
		}
		document.addEventListener('keydown', handleKey)
		return () => { document.removeEventListener('keydown', handleKey) }
	}, [key, callback])

}
