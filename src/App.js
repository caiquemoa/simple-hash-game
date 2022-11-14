import { Board } from './components/Board'

function App() {
	return (
		<div className="bg-white min-h-screen flex flex-col items-center">
			<h1 className="p-5 text-2xl font-bold text-blue-700">Player Turn</h1>
			<Board />
		</div>
	)
}

export default App
