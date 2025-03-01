import { TextInput, TextInputProps, Text } from 'react-native'

export function CustomInput(props: TextInputProps, name: string) {
	return (
		<TextInput
			caretHidden={true}
			style={[
				{
					fontFamily: 'Nunito_800ExtraBold',
					borderRadius: 10,
					backgroundColor: 'orange',
					color: 'rgb(29, 29, 29)',
					height: 60,
					width: 400,
					fontSize: 19,
					textAlign: 'center',
					justifyContent: 'center',
					alignItems: 'center'
				},
				props.style
			]}
			{...props}
		/>
	)
}
