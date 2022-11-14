import { useEffect, useState } from 'react'
import { Block } from './Block'
import circle from '../assets/circle.svg'
import x from '../assets/x.svg'

import { possibilities } from '../utils/matrix'

export function Board() {
	const [game, setGame] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
	const [turn, setTurn] = useState(false)

	const updateBoard = (index) => {
		let newBoard = [...game]

		if (newBoard[index] !== 0) return
		newBoard[index] = turn ? 'x' : 'o'
		setGame(newBoard)
		setTurn(!turn)
	}

	useEffect(() => {
		function checkWinner(click) {
			let winner = possibilities.find((item) =>
				item.every((pos) => game[pos] === click)
			)
			let draw = game.every((item) => item !== 0)
			if (draw) {
				setTimeout(() => {
					setGame([0, 0, 0, 0, 0, 0, 0, 0, 0])
					alert(`its a draw`)
				}, 400)
			}
			if (winner) {
				setTimeout(() => {
					setGame([0, 0, 0, 0, 0, 0, 0, 0, 0])
					alert(`the winner is ${click.toUpperCase()}`)
				}, 400)
			}
		}
		checkWinner(turn ? 'o' : 'x')
	}, [game, turn])
	return (
		<div className="h-96 w-96 bg-gray-200 self-center mx-auto flex flex-wrap">
			{game.map((item, index) => {
				return (
					<Block
						onclick={updateBoard}
						key={index}
						item={item}
						index={index}
						name={turn ? x : circle}
					/>
				)
			})}
		</div>
	)
}
