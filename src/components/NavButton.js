import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-native-elements'

const NavButton = ({ loading, onPress, title }) => (
	<Button
		containerStyle={{
			width: '80%',
		}}
		onPress={onPress}
		loading={loading}
		title={title}
	/>
)

NavButton.defaultProps = {
	loading: false,
}

NavButton.propTypes = {
	loading: PropTypes.bool,
	onPress: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
}

export default NavButton
