import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`

const ReverseText = styled.Text`
	font-size: 15;
`

const ReverseStringComponent = () => (
	<Wrapper>
		<ReverseText>Reverse a String</ReverseText>
	</Wrapper>
)

export default ReverseStringComponent
