import React from 'react'
import SplashComponent from './component'

export default class SplashContainer extends React.Component {
	navigateTo = screen => {
		this.props.navigation.navigate(screen)
	}

	render() {
		return <SplashComponent navigateTo={this.navigateTo} />
	}
}
