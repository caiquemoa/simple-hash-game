import circle from '../assets/circle.svg'
import x from '../assets/x.svg'
export function Block(props) {
	const onButtonPress = () => {
		props.onclick(props.index)
	}
	return (
		<div
			onClick={onButtonPress}
			style={{
				cursor: `url(${props.name}) 10 3, auto`,
			}}
			className="w-32 bg-white border-black border-2 flex items-center justify-center"
		>
			<img
				className="h-8"
				src={props.item === 'x' ? x : props.item == 'o' ? circle : undefined}
			/>
		</div>
	)
}
