import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { Splash, LogIn, ReverseString } from './screens'

const AppStack = createStackNavigator({
	Splash: { screen: Splash },
	LogIn: { screen: LogIn },
	ReverseString: { screen: ReverseString },
})

const App = createAppContainer(AppStack)

export default class Routes extends React.Component {
	render() {
		return <App />
	}
}
