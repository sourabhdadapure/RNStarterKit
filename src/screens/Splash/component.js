import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavButton } from '../../components'

const Wrapper = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`

const Spacer = styled.View`
	height: 20;
`

const SplashComponent = ({ navigateTo }) => (
	<Wrapper>
		<NavButton
			title="Reverse A String"
			onPress={() => navigateTo('ReverseString')}
		/>
		<Spacer />
		<NavButton title="Palindrome" onPress={() => navigateTo('Palindrome')} />
	</Wrapper>
)

SplashComponent.propTypes = {
	navigateTo: PropTypes.func.isRequired,
}

export default SplashComponent
