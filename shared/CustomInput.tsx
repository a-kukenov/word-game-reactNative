import { TextInput, TextInputProps, Text } from 'react-native'

export function CustomInput(props: TextInputProps, name: string) {
	return (
		<TextInput
			caretHidden={true}
			style={[
				{
					fontFamily: 'Nunito_800ExtraBold',
					borderRadius: 10,
					borderWidth: 4,
					borderColor: 'orange',
					color: 'white',
					height: '100%',
					width: '15%',
					fontSize: 35,
					textAlign: 'center',
					justifyContent: 'center',
					alignItems: 'center',
				},
				props.style
			]}
			{...props}
		/>
	)
}
